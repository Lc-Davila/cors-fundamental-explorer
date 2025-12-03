<div align="center">
🚀✨ Teste de CORS — Frontend (3000) + Backend (8080)

Demonstração prática e visual de como o CORS funciona
entre um cliente e um servidor de origens diferentes.

<img src="https://img.shields.io/badge/Node.js-Backend-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"> <img src="https://img.shields.io/badge/HTML-Frontend-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/CORS-Enabled/Disabled-blue?style=for-the-badge"> </div>
📘 Visão Geral

Este projeto permite alternar CORS ATIVADO e CORS BLOQUEADO no backend para observar, na prática, como o navegador reage a requisições entre:

Frontend: http://localhost:3000

Backend: http://localhost:8080

Inclui feedback visual, mensagens detalhadas e estilização no frontend para facilitar o entendimento.

🖥️ Backend (Node + Express)
✔️ Instalar dependências
npm install express cors

▶️ Rodar o servidor
node server.js

🔄 Alternar CORS

Abra o arquivo server.js e:

Descomente para permitir:

// app.use(cors(corsOptions));


Comente para bloquear.

O console mostrará instruções claras ao iniciar o servidor.

🌐 Frontend

Não requer instalação.
Basta abrir o arquivo index.html em um servidor local na porta 3000.

Servidor rápido (opcional):
npx serve . -l 3000


ou

npx live-server --port=3000

🧪 Como Testar

Abra o frontend:
👉 http://localhost:3000

Clique no botão “Acessar API em 8080”

Veja o resultado:

🟢 CORS ATIVADO

✔️ Mensagem JSON aparece
✔️ Caixa verde no frontend
✔️ Requisição bem-sucedida

🔴 CORS BLOQUEADO

❌ "Failed to fetch"
⚠️ Mensagem vermelha explicando motivo
🔍 Console mostra erro de política CORS

O frontend foi feito especialmente para você visualizar claramente o diagnóstico.

📨 Resposta da API

O backend retorna algo como:

{
  "data": "Mensagem secreta da API em 8080.",
  "status": "CORS para 3000 está ATIVADO ou DESATIVADO"
}

🔧 Tecnologias Utilizadas
Backend

Node.js

Express

CORS Middleware

Frontend

HTML5

CSS3 estilizado

JavaScript (Fetch API)

🎯 Objetivo do Projeto

✔️ Entender como o navegador bloqueia requisições entre domínios diferentes
✔️ Enxergar o funcionamento real do CORS
✔️ Saber como habilitar, configurar e testar CORS no Express
✔️ Diagnosticar erros comuns de “Failed to fetch”



