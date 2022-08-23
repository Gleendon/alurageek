//Acessar o banco de dados de produtos
export const listaProdutos = () =>{ 
   //Requisições com Fetch API
   return fetch(`http://localhost:3000/produtos`)
   .then(resposta =>{
      if(resposta.ok){
         return resposta.json()
      }
      throw new Error('Não foi possível localizar os produtos');
   })
}

//Acessar produto específico
export const produto = (id) => {
   return fetch(`http://localhost:3000/produtos/${id}`)
   .then(resposta =>{
      if(resposta.ok){
         return resposta.json()
      }
      throw new Error('Não foi possível localizar o produto');
   })
}

//Adicionar Produto
export const criaProduto = (img, categoria, nome, preco, descricao) => { 
   return fetch('http://localhost:3000/produtos', {
      method: 'POST', //envio de informação p. servidor
      headers: { //qual o tipo de informação será enviada
         'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
         img: img, 
         categoria, categoria, 
         nome: nome, 
         preco: preco, 
         descricao: descricao
      })
   })
   .then(resposta => {
      if(resposta.ok){
         return resposta.body
      }
      throw new Error('Não foi possível criar um novo produto');
   })
}

export const removeProduto = (id) => {
   return fetch(`http://localhost:3000/produtos/${id}`,{
      method: 'DELETE'
   }).then(resposta =>{
      if(resposta.ok){
         throw new Error('Não foi possível deletar o produto');
      }
   })
}

//atualizar produto
export const atualizaProduto = (id, nome, preco, img, categoria, descricao) => {
   return fetch(`http://localhost:3000/produtos/${id}`, {
   method: 'PUT', //envio de informação p. servidor
      headers: { //qual o tipo de informação será enviada
         'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
         img: img, 
         categoria, categoria, 
         nome: nome, 
         preco: preco, 
         descricao: descricao
      })
   })
   .then(resposta => {
      if(resposta.ok){
         return resposta.json()
      }
      throw new Error('Não foi possível atualizar o produto');
   })
}