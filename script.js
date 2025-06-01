function verificarSenha() {
  const senha = document.getElementById("senha").value;
  if (senha === "2103") {
    document.getElementById("senha-container").style.display = "none";
    document.getElementById("conteudo").style.display = "block";
  } else {
    document.getElementById("mensagem-erro").innerText = "Senha incorreta 😢";
  }
}
