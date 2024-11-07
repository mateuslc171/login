document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Impede o envio do formulário

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simulação de verificação (em um sistema real, faça uma chamada de API segura)
    const validUsername = "jogador";
    const validPassword = "1234";

    if (username === validUsername && password === validPassword) {
        alert("Login bem-sucedido! Bem-vindo ao jogo.");
        window.location.href = "game.html";  // Redireciona para o jogo
    } else {
        document.getElementById("error-message").textContent = "Usuário ou senha incorretos!";
    }
});
