document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Usuário e senha fixos para teste
    const usuarioCorreto = "felipe";
    const senhaCorreta = "rocks_is_cool";

    // Pegando o que o usuário digitou no formulário
    const usuario = document.getElementById('username').value;
    const senha = document.getElementById('password').value;

    // Verificando se as credenciais estão corretas
    if (usuario === usuarioCorreto && senha === senhaCorreta) {
        // Se o login for bem-sucedido
        window.location.href = 'welcome.html'; // Redireciona para uma página de boas-vindas
    } else {
        // Se o login falhar
        document.getElementById('error-message').textContent = "Usuário ou senha incorretos!";
    }
});
