// Gerenciamento de usuário e login (SEM LOGIN AUTOMÁTICO)
let usuarioCadastrado = null;  // armazena as credenciais do localStorage

function carregarUsuario() {
    const user = localStorage.getItem('usuario');
    if (user) {
        usuarioCadastrado = JSON.parse(user);
    } else {
        usuarioCadastrado = null;
    }
}

function cadastrarUsuario(event) {
    event.preventDefault();
    const username = document.getElementById('novo-usuario').value.trim();
    const password = document.getElementById('nova-senha').value.trim();
    if (!username || !password) {
        mostrarMsg('mensagem-cadastro-usuario', 'Preencha usuário e senha!', 'erro');
        return;
    }
    const usuario = { username, password };
    localStorage.setItem('usuario', JSON.stringify(usuario));
    mostrarMsg('mensagem-cadastro-usuario', 'Usuário cadastrado! Faça login.', 'sucesso');
    document.getElementById('form-cadastro-usuario').reset();
    setTimeout(() => {
        window.location.href = 'login.html';
    }, 1500);
}

function fazerLogin(event) {
    event.preventDefault();
    const username = document.getElementById('login-usuario').value.trim();
    const password = document.getElementById('login-senha').value.trim();
    if (!usuarioCadastrado) {
        mostrarMsg('mensagem-login', 'Nenhum usuário cadastrado. Crie uma conta primeiro.', 'erro');
        return;
    }
    if (username === usuarioCadastrado.username && password === usuarioCadastrado.password) {
        // Cria a sessão apenas no sessionStorage
        sessionStorage.setItem('usuarioLogado', JSON.stringify({ username }));
        mostrarMsg('mensagem-login', 'Login efetuado com sucesso!', 'sucesso');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1000);
    } else {
        mostrarMsg('mensagem-login', 'Usuário ou senha incorretos.', 'erro');
    }
}

function logout() {
    sessionStorage.removeItem('usuarioLogado');
    window.location.href = 'index.html';
}

// Carrega as credenciais do localStorage (apenas para comparação, não loga automaticamente)
carregarUsuario();