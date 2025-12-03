<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>README - Demonstração de CORS</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 30px;
            background-color: #f4f4f9;
            color: #333;
            line-height: 1.6;
        }
        .container {
            max-width: 900px;
            margin: auto;
            background: #fff;
            padding: 40px;
            border-radius: 10px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        h1 {
            color: #007bff;
            border-bottom: 3px solid #007bff;
            padding-bottom: 10px;
        }
        h2 {
            color: #4a4a4a;
            border-bottom: 1px solid #eee;
            padding-bottom: 5px;
            margin-top: 30px;
        }
        code {
            background-color: #e9ecef;
            padding: 2px 5px;
            border-radius: 4px;
            font-family: Consolas, monospace;
            font-size: 0.95em;
        }
        pre {
            background-color: #343a40;
            color: #f8f9fa;
            padding: 15px;
            border-radius: 5px;
            overflow-x: auto;
            font-family: Consolas, monospace;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 15px;
        }
        th, td {
            padding: 12px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }
        th {
            background-color: #007bff;
            color: white;
            font-weight: bold;
        }
        .info-box {
            background-color: #e0f7fa;
            border-left: 5px solid #00bcd4;
            padding: 15px;
            margin: 20px 0;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🌐 Demonstração de CORS: Cliente (3000) e Servidor (8080)</h1>

        <p>Este projeto é um exemplo prático e minimalista para demonstrar o funcionamento do **CORS (Cross-Origin Resource Sharing)**, o mecanismo que permite ou bloqueia requisições HTTP entre diferentes origens (domínio, protocolo ou porta).</p>

        <hr>

        <h2>1. 🏗️ Arquitetura e Componentes</h2>
        
        <p>A demonstração é composta por dois componentes distintos, simulando um ambiente de desenvolvimento real:</p>

        <table>
            <thead>
                <tr>
                    <th>Componente</th>
                    <th>Tecnologia Principal</th>
                    <th>Porta de Origem</th>
                    <th>Função</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Backend (API Server)</strong></td>
                    <td>Node.js / Express</td>
                    <td><code>8080</code></td>
                    <td>Expõe a rota <code>/api/mensagem</code> e configura as políticas CORS.</td>
                </tr>
                <tr>
                    <td><strong>Frontend (Cliente)</strong></td>
                    <td>HTML / JavaScript</td>
                    <td><code>3000</code> (Simulado)</td>
                    <td>Tenta acessar o recurso da API em uma origem cruzada.</td>
                </tr>
            </tbody>
        </table>

        <h3>📂 Estrutura de Diretórios Sugerida</h3>
        <pre>
.
├── backend/
│   ├── app.js       # Configuração do Express e Lógica CORS
│   └── server.js    # Inicialização do Servidor
└── frontend/
    └── index.html   # Cliente HTML com Requisição JS
        </pre>

        <hr>

        <h2>2. 💻 Configuração e Controle de CORS (Backend)</h2>

        <p>O coração desta demonstração está no arquivo <code>backend/app.js</code>, onde o middleware <code>cors</code> é configurado.</p>

        <div class="info-box">
            <h4>🔑 Controle de CORS</h4>
            <p>Para alternar entre os cenários de sucesso e falha de CORS, você deve **COMENTAR** ou **DESCOMENTAR** a linha de middleware no arquivo <code>backend/app.js</code>:</p>
            <pre><code>// Para permitir CORS, DESCOMENTE:
// app.use(cors(corsOptions)); </code></pre>
        </div>

        <h3>⚙️ Comandos de Inicialização</h3>
        
        <p>1. **Instalar Dependências:**</p>
        <pre><code>npm install express cors dotenv</code></pre>
        
        <p>2. **Iniciar o Servidor (no diretório <code>backend</code>):</p>
        <pre><code>node server.js</code></pre>
        <p>O console deve confirmar que a API está rodando em <code>http://localhost:8080</code>.</p>

        <hr>

        <h2>3. 🖥️ Frontend Cliente (Simulação em 3000)</h2>

        <p>O arquivo <code>frontend/index.html</code> realiza a requisição <code>fetch</code> para a API. Ele é projetado para dar um feedback claro ao usuário:</p>
        <ul>
            <li>Em caso de **sucesso** (CORS permitido), exibe o JSON.</li>
            <li>Em caso de **falha** (CORS bloqueado), ele avisa para **verificar o console do navegador** (F12), que é onde o erro de segurança é registrado.</li>
        </ul>

        <hr>

        <h2>4. 🧪 Testes e Cenários</h2>

        <p>Siga estes passos para testar a comunicação entre as origens:</p>
        <ol>
            <li>Garanta que o **Backend** esteja rodando (Porta 8080).</li>
            <li>Abra o arquivo **<code>frontend/index.html</code>** diretamente no seu navegador.</li>
            <li>**Abra o Console** do desenvolvedor (Geralmente <kbd>F12</kbd>).</li>
            <li>Clique no botão **"Acessar API em 8080"** e observe o resultado na tela e no console.</li>
        </ol>

        <table>
            <thead>
                <tr>
                    <th>Cenário</th>
                    <th>Ação no <code>app.js</code></th>
                    <th>Resultado no Frontend (Tela)</th>
                    <th>Resultado no Console (F12)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>**✅ CORS Permitido**</td>
                    <td>**DESCOMENTAR** <code>app.use(cors)</code></td>
                    <td>Exibe o objeto JSON retornado.</td>
                    <td>Limpo.</td>
                </tr>
                <tr>
                    <td>**❌ CORS Bloqueado**</td>
                    <td>**COMENTAR** <code>app.use(cors)</code></td>
                    <td>Mostra a mensagem de ❌ **FALHA NA REQUISIÇÃO**.</td>
                    <td>Exibe o erro de segurança: <code>CORS policy: No 'Access-Control-Allow-Origin' header is present...</code></td>
                </tr>
            </tbody>
        </table>

    </div>
</body>
</html>
