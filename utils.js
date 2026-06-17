// Funções auxiliares globais
function escapeHtml(texto) {
    if (!texto) return '';
    return texto.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

function mostrarMsg(elementoId, texto, tipo) {
    const div = document.getElementById(elementoId);
    if (!div) return;
    const msg = document.createElement('div');
    msg.className = `mensagem ${tipo}`;
    msg.textContent = texto;
    div.innerHTML = '';
    div.appendChild(msg);
    setTimeout(() => msg.remove(), 3000);
}