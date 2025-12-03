🛡️ Teste de CORS — Frontend (3000) + Backend (8080)

Este projeto demonstra, de forma simples e visual, como funciona o mecanismo de CORS (Cross-Origin Resource Sharing) entre um frontend rodando em http://localhost:3000
 e um backend Node/Express rodando em http://localhost:8080
.

O objetivo é permitir alternar facilmente entre CORS ATIVADO e CORS BLOQUEADO, para entender como o navegador reage e como diagnosticar o erro.

📁 Estrutura do Projeto
/backend
  └── server.js     # Código Node+Express com CORS ativável/desativável

/frontend
  └── index.html    # Página HTML com botão para testar a requisição

🚀 Como Rodar o Backend (Node/Express)
1. Instalar dependências
npm install express cors

2. Rodar o servidor
node server.js

3. Alternar CORS ATIVADO/DESATIVADO

No arquivo server.js, existe a linha:

// app.use(cors(corsOptions));


Descomentada → CORS permitido (requisição funciona)

Comentada → CORS bloqueado (erro “Failed to fetch”)

O console do backend mostrará:

⚠️  Lembre-se de COMENTAR/DESCOMENTAR 'app.use(cors)' para alternar o teste.

🌐 Como Rodar o Frontend

Basta abrir o arquivo:

frontend/index.html


em um servidor rodando na porta 3000.

Caso precise rodar um servidor rápido:

npx serve . -l 3000


ou

npx live-server --port=3000

🧪 Como Testar

Abra o frontend em:
http://localhost:3000

Clique no botão “Acessar API em 8080”

Veja o resultado na área de resposta:

Se CORS ativado → mensagem JSON aparece ✔️

Se CORS desativado → mensagem vermelha indicando falha ❌
(e o console do navegador mostrará erro de CORS)

📝 O que é mostrado no backend?

O backend retorna:

{
  "data": "Mensagem secreta da API em 8080.",
  "status": "CORS para 3000 está ATIVADO / DESATIVADO"
}


A resposta muda conforme a configuração do CORS.

⚠️ Diagnóstico de Erro de CORS

Quando o CORS está desativado, o navegador bloqueia a requisição e exibe:

"Failed to fetch"

"Cross-Origin Request Blocked"

"CORS policy: No 'Access-Control-Allow-Origin' header"

O frontend já mostra automaticamente uma mensagem explicando o motivo.

✔️ Tecnologias Utilizadas
Backend:

Node.js

Express

CORS

Frontend:

HTML

JavaScript (Fetch API)

CSS básico para visualização

🎯 Objetivo do Projeto

Este projeto foi criado para fins educacionais, para ajudar a entender:

Como o navegador bloqueia requisições cross-origin

Como analisar erros de CORS no console

Como habilitar e configurar CORS corretamente em aplicações Expres
