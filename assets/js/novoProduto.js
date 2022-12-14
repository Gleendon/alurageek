import { criaProduto } from "./acessarProdutos.js"

//Coletando dados do form
const salvarProduto = () =>{ 
   const img = document.querySelector("#urlIMGProduto").value
   const categoria = document.querySelector("#categoriaProduto").value
   const nome = document.querySelector("#nomeProduto").value
   const preco = document.querySelector("#precoProduto").value
   const descricao = document.querySelector("#descricaoProduto").value

   criaProduto(img, categoria, nome, preco, descricao)
   window.location.href = "editarProdutos.html"
   window.alert("Produto Cadastrado com Sucesso")
   limparForm()
}

//Limpar Formulários
const limparForm = () =>{
   const campos = document.querySelectorAll(".novoProduto__input")
   const descricao = document.querySelector(".novoProduto__textarea")
   descricao.value = ""
   campos.forEach(campos => campos.value = "")
}

//eventos
const botaoAddProduto = document.querySelector(".novoProduto__botao")
botaoAddProduto.addEventListener('click', (event)=>{
   event.preventDefault()
   salvarProduto()
})

const botaoAdministrador = document.querySelector("#botaoADM")
botaoAdministrador.addEventListener("click", ()=>{
   window.location.href = "editarProdutos.html"
})