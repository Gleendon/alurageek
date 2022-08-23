export function validaNome (input){
   console.log(input.value)
   const nome = input.value
   const mensagemErro = document.querySelector(".nome-mensagem-erro")

   if(nome.length == 0 | nome.length > 40){
      mensagemErro.innerHTML = "O campo nome deve conter de 1 a 40 caracteres"
   }
   else{
      mensagemErro.innerHTML = ""
   }
}

export function validaMensagem(mensagem){
   console.log(mensagem.value)
   const texto = mensagem.value
   const mensagemErro = document.querySelector(".texto-mensagem-erro")

   if(texto.length == 0 | texto.length > 120){
      mensagemErro.innerHTML = "O campo mensagem deve conter de 1 a 120 caracteres"
   }
   else{
      mensagemErro.innerHTML = ""
   }
}

