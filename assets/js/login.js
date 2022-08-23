const botaoLogin = document.querySelector("#botaoLogin")

botaoLogin.addEventListener("click", (evento) => {
   evento.preventDefault()
   window.location.href = "editarProdutos.html"
})