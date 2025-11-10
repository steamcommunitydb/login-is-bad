<?php
// Usuário e senha fixos para exemplo
$usuario_correto = "felipe";
$senha_correta = "rocks_is_cool";

// Verifica se o formulário foi enviado
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $usuario = $_POST['username'];
    $senha = $_POST['password'];

    // Valida o login
    if ($usuario == $usuario_correto && $senha == $senha_correta) {
        echo "<h1>Bem-vindo, " . htmlspecialchars($usuario) . "!</h1>";
    } else {
        echo "<h1>Usuário ou senha incorretos.</h1>";
    }
} else {
    echo "<h1>Acesso negado. Por favor, faça login.</h1>";
}
?>
