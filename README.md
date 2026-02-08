# Tela-de-login-Um-estudo-de-interatividade

## 📌 Descrição do Projeto

**Pulse Áudio** é um projeto fictício de aplicação de streaming de música, desenvolvido com foco em **Interação Humano-Computador (IHC)**.

O objetivo do projeto é criar uma **interface de login funcional e intuitiva**, proporcionando uma boa experiência ao usuário, mesmo **sem utilização de banco de dados, conexão com a internet ou redirecionamento para outras páginas**.

A tela de login foi projetada considerando princípios de:

- ✅ Usabilidade  
- ♿ Acessibilidade básica  
- 💬 Feedback ao usuário  

A validação dos dados é feita **localmente**, permitindo que o usuário compreenda facilmente o **estado do sistema**, como:

- Erros de preenchimento  
- Mensagens de sucesso  
- Interações visuais durante o uso  

## 🧠 Metas de Usabilidade Aplicados

✔ **Fácil de lembrar como usar**  
A interface segue o padrão conhecido de login (e-mail + senha), o que reduz a curva de aprendizado e facilita o reconhecimento da funcionalidade pelo usuário.

✔ **Fácil de entender**  
Os textos são claros e diretos (ex: “Entre na sua conta”, “Preencha seus dados abaixo para continuar”), e as mensagens de erro informam exatamente o que está incorreto, evitando ambiguidades.

✔ **Útil**  
A tela cumpre seu papel principal: permitir que o usuário tente acessar sua conta de forma simples, com validações locais que simulam o comportamento real de um sistema de login.

✔ **Seguro (percepção do usuário)**  
Mesmo sem autenticação real, a interface transmite sensação de segurança por meio de:

- 🔒 Campo de senha oculto  
- 👁️ Opção de exibir/ocultar senha  
- ✅ Validações visuais  
- 🎨 Design profissional e organizado  

✔ **Eficiente**  
O processo de login exige poucos passos, possui feedback imediato e evita ações desnecessárias, permitindo que o usuário compreenda rapidamente se houve sucesso ou erro ao preencher os dados.

## 🛠️ Tecnologias Utilizadas

- **HTML5** — Estrutura da interface  
- **CSS3 / Bootstrap** — Estilização e layout responsivo  
- **JavaScript** — Validações locais, feedback ao usuário e interações (exibição/ocultação de senha, mensagens de erro/sucesso)

> **Obs:** O sistema funciona totalmente **offline** e não utiliza **banco de dados** ou **APIs externas**.

## ▶️ Instruções de Execução

Você pode executar o projeto de três formas:

### 🔹 Opção 1 — Acessar online (GitHub Pages)
Você pode abrir o projeto diretamente pelo navegador, sem precisar baixar nada:

🔗 **https://seu-usuario.github.io/nome-do-repositorio/**

---

### 🔹 Opção 2 — Abrir direto no navegador (modo simples)
1. Baixe ou clone o repositório do projeto.  
2. Abra o arquivo `index.html` no navegador.

---

### 🔹 Opção 3 — Usando a extensão Live Server (recomendado)
1. Baixe ou clone o repositório do projeto.  
2. Abra a pasta do projeto no **Visual Studio Code**.  
3. Instale a extensão **Live Server** (caso ainda não tenha).  
4. Clique com o botão direito no arquivo `index.html`.  
5. Selecione **“Open with Live Server”**.  

O projeto será aberto automaticamente no navegador.

### 🧪 Como testar as validações

Insira um e-mail e uma senha para testar o funcionamento da tela de login:

- ❌ **E-mail inválido** → exibe mensagem de erro  
- ❌ **Senha com menos de 8 caracteres** → exibe mensagem de erro  
- ✅ **Campos válidos** → exibe feedback visual de sucesso  

> ℹ️ Todas as validações são feitas **localmente**, sem necessidade de conexão com a internet.

