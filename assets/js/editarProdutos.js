import { listaProdutos, produto, removeProduto } from "./acessarProdutos.js"

//Listar Produtos na index
const atualizarProdutos = async () => {
   try{
      const db_produtos = await listaProdutos()
      db_produtos.forEach(listarCard)
   }
   catch(erro){
      console.log(erro)
      //window.location.href = "erro.html"
   }
}

//listar produtos na tela
const listarCard = (produto) =>{
      const produtoCadastrado = document.createElement("li")
      produtoCadastrado.setAttribute("class", "produtos__card")
      produtoCadastrado.innerHTML = `
      <div class="produtos__editar">
         <input class="botaoExcluir" type="image" src="assets/img/excluir.png" alt="Botão excluir">
         <a href="modificarProduto.html?id=${produto.id}"><input class="botaoEditar" type="image" src="assets/img/editar.png" alt="Botao editar"></a>
      </div>
      <img class="card__img" src="${produto.img}" alt="">
      <h4 class="card__titulo">${produto.nome}</h4>
      <p class="card__preco">R$ ${produto.preco}</p>
      <p class="produto__id">#${produto.id}</p>
      `
      produtoCadastrado.dataset.id = produto.id
      document.querySelector(`.produtos__lista`).appendChild(produtoCadastrado)
}

//deletar produtos
const card = document.querySelector(".produtos__lista")

card.addEventListener("click", async(evento) =>{
   let botaoDeExcluir = evento.target.className === "botaoExcluir"
   if(botaoDeExcluir){
      try{
         const cardProduto = evento.target.closest("[data-id]")
         let id = cardProduto.dataset.id
         console.log(id)
         await removeProduto(id)
      }
      catch(erro){
         console.log(erro)
      }
   }
})



document.onload = atualizarProdutos()