# 🧾 Sistema de Cadastro de Clientes - CRUD com JavaScript e LocalStorage

![Status do Projeto](https://img.shields.io/badge/status-finalizado-brightgreen)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![Licença](https://img.shields.io/badge/licença-MIT-blue)

## 📖 Descrição

Sistema web completo para **gerenciamento de clientes** (CRUD - Create, Read, Update, Delete), desenvolvido como projeto final da disciplina de **Programação Web** do curso Técnico em Informática (2º ano). O sistema utiliza **HTML5**, **CSS3** e **JavaScript puro**, com persistência de dados via **LocalStorage** (não necessita de servidor ou banco de dados).

### Funcionalidades principais

- 🔐 **Autenticação de usuário** – cadastro de um único usuário, login com sessão via `sessionStorage` e logout.
- ➕ **Cadastro de clientes** – campos: Nome*, Telefone*, Cidade (opcional), Endereço (opcional), URL da foto do documento (opcional). Validação de duplicidade de nomes.
- 📋 **Listagem** – exibição em tabela responsiva com ícones de editar/excluir.
- 🔍 **Busca dinâmica** – filtra clientes por nome em tempo real.
- ✏️ **Edição** – carrega dados do cliente em formulário próprio, mantendo validação.
- ❌ **Exclusão** – com confirmação e atualização automática da tabela.
- 📱 **Layout responsivo** – menu lateral adaptado para mobile.
- 🧭 **Menu condicional** – exibe opções de Cadastro, Listagem e Sair apenas quando o usuário está logado.

### Tecnologias utilizadas

| Tecnologia | Finalidade |
|------------|------------|
| HTML5 | Estrutura das páginas |
| CSS3 | Estilização, Flexbox, responsividade |
| JavaScript (ES6+) | Manipulação do DOM, eventos, LocalStorage, JSON |
| Font Awesome 6 | Ícones para botões e ações |
| LocalStorage | Persistência de dados no navegador |
| sessionStorage | Controle de sessão de login |

### Desafios enfrentados

- **Validação de nomes duplicados** na edição (ignorando o próprio ID).
- **Gerenciamento de sessão sem back-end** – uso combinado de `localStorage` (credenciais) e `sessionStorage` (sessão ativa).
- **Renderização dinâmica da tabela** com `innerHTML` e eventos delegados.
- **Exclusão sem quebrar layout** – criação de div separada para mensagens de feedback.
- **Controle de acesso a páginas restritas** via redirecionamento automático.

### Features futuras (planejadas)

- [ ] Exportar lista de clientes para CSV/PDF.
- [ ] Ordenação de colunas por clique no cabeçalho.
- [ ] Suporte a múltiplos usuários com dados separados.
- [ ] Upload real da foto do documento (File API).
- [ ] Modo escuro.

---

## ⚙️ Como instalar e rodar o projeto

### Pré-requisitos

Nenhum! O projeto roda **100% no navegador**. Você só precisa de um editor de código (recomendamos VS Code) e um navegador moderno (Chrome, Firefox, Edge).

### Passo a passo

1. **Baixar o projeto**
   - Opção A: Clone o repositório  
     ```bash
     git clone https://github.com/Ayjalas/Grupo-7-Cadastro-de-Clientes.git

Opção B: Baixe o ZIP diretamente do GitHub e extraia.

### Estrutura de Arquivos: 
├── index.html

├── login.html

├── cadastroUsuario.html

├── cadastro.html

├── listar.html

├── editar.html

├── css/

│   └── style.css

├── js/

│   ├── auth.js

│   ├── menu.js

│   ├── clientes.js

│   └── utils.js

└── README.md

### Executar o projeto

Método recomendado (Live Server)
No VS Code, instale a extensão "Live Server", clique com botão direito no index.html e selecione "Open with Live Server".

Método alternativo
Abra o arquivo index.html diretamente no navegador (pode haver restrições de CORS, mas o LocalStorage funcionará normalmente).

Primeiro uso

Acesse o menu lateral → clique em Login.

Na tela de login, clique em "Crie uma conta".

Cadastre um usuário e senha.

Retorne à tela de login e autentique-se.

Pronto! Agora você pode cadastrar, listar, editar e excluir clientes.

#### 🖥️ Como usar o sistema
1. Cadastrar um cliente
Após logado, menu lateral → Cadastro.

Preencha os campos obrigatórios (Nome e Telefone) e opcionais.

Clique em Salvar Cliente.

Você será redirecionado automaticamente para a Listagem.

2. Listar clientes
Menu lateral → Listagem.

Visualize todos os clientes em tabela.

Buscar: digite parte do nome no campo de busca para filtrar.

Editar: clique no ícone de lápis (✏️) ao lado do cliente.

Excluir: clique no ícone de lixeira (🗑️) e confirme.

3. Editar um cliente
Na listagem, clique no ícone de editar.

Você será levado à página Editar Cliente com os dados preenchidos.

Altere os campos desejados e clique em Atualizar.

Após salvar, retorna à listagem com os dados atualizados.

4. Sair do sistema
Menu lateral → Sair.

O sistema encerra a sessão e volta para a Home.

Exemplos de uso
Pequeno comércio para manter cadastro de clientes.

Projeto acadêmico para demonstrar CRUD e LocalStorage.

Base para evolução para sistema com backend (futuro).

### Prints da interface: 

<img width="1600" height="852" alt="Image" src="https://github.com/user-attachments/assets/1b38fae9-b6b5-49c4-a4ed-3d0081b1b6e6" />
<img width="1600" height="852" alt="Image" src="https://github.com/user-attachments/assets/c9340059-ea92-4218-a8af-b240190eb240" />
<img width="1600" height="852" alt="Image" src="https://github.com/user-attachments/assets/aa0538a4-8875-47f6-971e-44db55228530" />
<img width="1600" height="852" alt="Image" src="https://github.com/user-attachments/assets/1159d202-fefd-43a9-b04c-bc146d1dc3aa" />
<img width="1600" height="852" alt="Image" src="https://github.com/user-attachments/assets/63624d51-9308-4dee-9e1c-d9e7fb12e9ea" />
Tela Home

Tela de login e cadastro de usuário

Formulário de cadastro de cliente

Listagem com busca ativa

Edição de cliente


📜 Licença
Este projeto
 está licenciado sob a Licença MIT - consulte o arquivo LICENSE para mais detalhes.

Resumo da licença MIT:

✅ Pode usar, copiar, modificar, mesclar, publicar, distribuir;

✅ Pode usar comercialmente;

❌ Não pode responsabilizar os autores por danos;

❌ Exige a manutenção da atribuição de copyright.

👨‍🎓 Desenvolvido por
Grupo de alunos - Programação Web (2º ano Técnico em Informática)

### Integrantes	      - Função principal
- Carlos Henrrique  - Estrutura base, CSS, README
- Jose Kayke	      - Autenticação e sessão
- Emanuel Carlos	  - Cadastro de clientes (CREATE)
- Tiago Pedrosa   	- Listagem, busca, exclusão (READ/DELETE)
- Ayjalas Pereira 	- Edição e menu dinâmico (UPDATE)

Professor orientador: Jefferson Macedo

Data de conclusão: Junho/2026
