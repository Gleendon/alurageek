import { produto, atualizaProduto } from "./acessarProdutos.js"

(async()=>{
   const pegarURL = new URL(window.location)
   const id = pegarURL.searchParams.get('id')
   const inputNome = document.querySelector("#nomeProduto")
   const inputPreco = document.querySelector("#precoProduto")
   const inputIMG = document.querySelector("#urlIMGProduto")
   const inputCategoria = document.querySelector("#categoriaProduto")
   const inputDescricao = document.querySelector("#descricaoProduto")

   try{
      const dados = await produto(id)
      console.log(dados)
      inputNome.value = dados.nome
      inputPreco.value = dados.preco
      inputIMG.value = dados.img
      inputCategoria.value = dados.categoria
      inputDescricao.value = dados.descricao
   }
   catch{
      console.log(erro)
   }

   const formulario = document.querySelector("#atualizarProdutoForm")
   formulario.addEventListener("submit", async (evento)=>{
      evento.preventDefault()
      try{
         await atualizaProduto(id, inputNome.value, inputPreco.value, inputIMG.value, inputCategoria.value, inputDescricao.value)
         window.location.href = "editarProdutos.html"
      }
      catch(erro){
         console.log(erro)
         window.location.href = "erro.html"
      }
   })
})()