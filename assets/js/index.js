import { listaProdutos } from "./acessarProdutos.js"
import { validaMensagem, validaNome } from "./validacaoMensagem.js"

//validação do form
const inputs = document.querySelectorAll("input")
const textos = document.querySelectorAll("textarea")

inputs.forEach(input=>{  
   if(input.dataset.tipo === 'nome'){
      input.addEventListener('blur', (evento) => {
         validaNome(evento.target)
      })
   }
})

textos.forEach(texto =>{
   if(texto.dataset.tipo === 'mensagem'){
      texto.addEventListener('blur', (evento) => {
         validaMensagem(evento.target)
      })
   }
})

//Selecionar categoria da página principal
const exibirCategoria = (categoria) =>{
   criarSecao(categoria)
   atualizarProdutos()
}

//Listar Produtos na index
const atualizarProdutos = async () => {
   try{
      const db_produtos = await listaProdutos()
      db_produtos.forEach(criarCard)
   }
   catch(erro){
      console.log(erro)
      //window.location.href = "erro.html"
   }
}

const criarSecao = (categoria) => {
   const principal = document.querySelector(".conteudoPrincipal")
   principal.innerHTML = ""
   const secao = document.createElement("section")
   secao.setAttribute("class", `secao`)
   secao.innerHTML = `
         <div class="secao__container">
            <div class="secao__cabecalho">
               <h3 class="secao__titulo">${categoria}</h3>
               <a href="#" class="verTudo">Ver Tudo &#5586</a>
            </div>
            <div class="secao__produtos">
               <ul class="produtos__lista ${categoria}">

               </ul>
            </div>
         </div>
   `
   document.querySelector(".conteudoPrincipal").appendChild(secao)
}

const criarCard = (produto) =>{
   if(produto.categoria == categoriaSelecionada.value || categoriaSelecionada.value == "todosProdutos"){
      const produtoCadastrado = document.createElement("li")
      produtoCadastrado.setAttribute("class", "produtos__card")
      produtoCadastrado.innerHTML = `
         <img class="card__img" src="${produto.img}" alt="">
         <h4 class="card__titulo">${produto.nome}</h4>
         <p class="card__preco">R$ ${produto.preco}</p>
         <a class="card__botao" href="#">Ver Produto</a>
      `
      document.querySelector(`.${categoriaSelecionada.value}`).appendChild(produtoCadastrado)
   }
}


//Exibir na index a categoria selecionada
const categoriaSelecionada = document.querySelector("#selecionarCategoria")
categoriaSelecionada.addEventListener('change', () => {
   const categoriaSelecionada = document.querySelector("#selecionarCategoria").value
   exibirCategoria(categoriaSelecionada)
})

document.onload = exibirCategoria(categoriaSelecionada.value)