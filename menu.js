function carregarMenu() {
    const logado = !!sessionStorage.getItem('usuarioLogado');
    const menuHTML = `
        <h2><i class="fas fa-store"></i> Menu</h2>
        <ul>
            <li><a href="index.html"><i class="fas fa-home"></i> Home</a></li>
            ${logado ? `
                <li><a href="cadastro.html"><i class="fas fa-user-plus"></i> Cadastro</a></li>
                <li><a href="listar.html"><i class="fas fa-list"></i> Listagem</a></li>
                <li><a href="#" id="logout-link"><i class="fas fa-sign-out-alt"></i> Sair</a></li>
            ` : `
                <li><a href="login.html"><i class="fas fa-sign-in-alt"></i> Login</a></li>
            `}
        </ul>
    `;
    const menuDiv = document.getElementById('menu-lateral');
    if (menuDiv) {
        menuDiv.innerHTML = menuHTML;
        if (logado) {
            const logoutLink = document.getElementById('logout-link');
            if (logoutLink) {
                logoutLink.addEventListener('click', (e) => {
                    e.preventDefault();
                    logout();
                });
            }
        }
    }
}