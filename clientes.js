let clientes = [];

function carregarClientes() {
    const dados = localStorage.getItem('clientes');
    if (dados) {
        clientes = JSON.parse(dados);
    } else {
        clientes = [];
    }
}

function salvarClientes() {
    localStorage.setItem('clientes', JSON.stringify(clientes));
}

function nomeDuplicado(nome, idIgnorar = null) {
    nome = nome.trim().toLowerCase();
    return clientes.some(cliente => 
        cliente.nome.toLowerCase() === nome && cliente.id !== idIgnorar
    );
}

function cadastrarCliente(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const cidade = document.getElementById('cidade').value.trim();
    const endereco = document.getElementById('endereco').value.trim();
    const foto = document.getElementById('foto').value.trim();

    if (!nome || !telefone) {
        mostrarMsg('mensagem-cadastro', 'Nome e Telefone são obrigatórios!', 'erro');
        return;
    }
    if (nomeDuplicado(nome)) {
        mostrarMsg('mensagem-cadastro', 'Já existe um cliente com este nome!', 'erro');
        return;
    }

    const novoId = Date.now();
    const novoCliente = { id: novoId, nome, telefone, cidade, endereco, foto };
    clientes.push(novoCliente);
    salvarClientes();
    document.getElementById('form-cliente').reset();
    mostrarMsg('mensagem-cadastro', 'Cliente cadastrado com sucesso!', 'sucesso');
    setTimeout(() => {
        window.location.href = 'listar.html';
    }, 1500);
}

function renderizarTabela() {
    const termoBusca = document.getElementById('busca') ? document.getElementById('busca').value.toLowerCase() : '';
    let filtrados = clientes;
    if (termoBusca) {
        filtrados = clientes.filter(cliente => cliente.nome.toLowerCase().includes(termoBusca));
    }

    const container = document.getElementById('tabela-clientes');
    if (!container) return;

    if (filtrados.length === 0) {
        container.innerHTML = '<p class="mensagem">Nenhum cliente encontrado.</p>';
        return;
    }

    let html = `<div class="tabela-clientes"><table><thead><tr>
        <th>Nome</th><th>Telefone</th><th>Cidade</th><th>Endereço</th><th>Foto Doc</th><th>Ações</th>
    </tr></thead><tbody>`;
    
    filtrados.forEach(cliente => {
        html += `
            <tr>
                <td data-label="Nome">${escapeHtml(cliente.nome)}</td>
                <td data-label="Telefone">${escapeHtml(cliente.telefone)}</td>
                <td data-label="Cidade">${escapeHtml(cliente.cidade) || 'N/A'}</td>
                <td data-label="Endereço">${escapeHtml(cliente.endereco) || 'N/A'}</td>
                <td data-label="Foto Doc">${cliente.foto ? `<a href="${cliente.foto}" target="_blank">Ver documento</a>` : 'N/A'}</td>
                <td data-label="Ações">
                    <i class="fas fa-edit icone-acao btn-editar" data-id="${cliente.id}" title="Editar"></i>
                    <i class="fas fa-trash-alt icone-acao btn-excluir" data-id="${cliente.id}" title="Excluir"></i>
                </td>
            </tr>
        `;
    });
    html += `</tbody></table></div>`;
    container.innerHTML = html;

    document.querySelectorAll('.btn-editar').forEach(btn => {
        btn.addEventListener('click', () => {
            window.location.href = `editar.html?id=${btn.dataset.id}`;
        });
    });
    document.querySelectorAll('.btn-excluir').forEach(btn => {
        btn.addEventListener('click', () => excluirCliente(parseInt(btn.dataset.id)));
    });
}

function excluirCliente(id) {
    if (confirm('Tem certeza que deseja excluir este cliente?')) {
        clientes = clientes.filter(c => c.id !== id);
        salvarClientes();
        renderizarTabela();
        // Usa a div específica de mensagem na listagem
        const msgDiv = document.getElementById('msg-listagem');
        if (msgDiv) {
            msgDiv.style.display = 'block';
            msgDiv.innerHTML = '';
            const msg = document.createElement('div');
            msg.className = 'mensagem sucesso';
            msg.textContent = 'Cliente excluído com sucesso!';
            msgDiv.appendChild(msg);
            setTimeout(() => {
                msgDiv.style.display = 'none';
            }, 3000);
        }
    }
}

function carregarClienteParaEdicao(id) {
    const cliente = clientes.find(c => c.id === id);
    if (!cliente) {
        mostrarMsgEditar('Cliente não encontrado.', 'erro');
        return;
    }
    document.getElementById('edit-id').value = cliente.id;
    document.getElementById('edit-nome').value = cliente.nome;
    document.getElementById('edit-telefone').value = cliente.telefone;
    document.getElementById('edit-cidade').value = cliente.cidade || '';
    document.getElementById('edit-endereco').value = cliente.endereco || '';
    document.getElementById('edit-foto').value = cliente.foto || '';
}

function mostrarMsgEditar(texto, tipo) {
    const div = document.getElementById('mensagem-editar');
    if (!div) return;
    const msg = document.createElement('div');
    msg.className = `mensagem ${tipo}`;
    msg.textContent = texto;
    div.innerHTML = '';
    div.appendChild(msg);
    setTimeout(() => msg.remove(), 3000);
}

function salvarEdicaoCliente() {
    const id = parseInt(document.getElementById('edit-id').value);
    const nome = document.getElementById('edit-nome').value.trim();
    const telefone = document.getElementById('edit-telefone').value.trim();
    const cidade = document.getElementById('edit-cidade').value.trim();
    const endereco = document.getElementById('edit-endereco').value.trim();
    const foto = document.getElementById('edit-foto').value.trim();

    if (!nome || !telefone) {
        mostrarMsgEditar('Nome e Telefone são obrigatórios!', 'erro');
        return;
    }
    if (nomeDuplicado(nome, id)) {
        mostrarMsgEditar('Já existe outro cliente com este nome!', 'erro');
        return;
    }

    const index = clientes.findIndex(c => c.id === id);
    if (index !== -1) {
        clientes[index] = { ...clientes[index], nome, telefone, cidade, endereco, foto };
        salvarClientes();
        mostrarMsgEditar('Cliente atualizado com sucesso!', 'sucesso');
        setTimeout(() => {
            window.location.href = 'listar.html';
        }, 1500);
    } else {
        mostrarMsgEditar('Erro ao atualizar cliente.', 'erro');
    }
}