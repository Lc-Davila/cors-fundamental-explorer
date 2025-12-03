import app from './app.js'; 
import 'dotenv/config';
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`✅ Servidor rodando em: http://localhost:${PORT}`);
    console.log(`📡 Aguardando requisições de: http://localhost:3000`);
    console.log("-----------------------------------------");
    console.log(`Para testar o SUCESSO, DESCOMENTE 'app.use(cors(corsOptions))' no app.js.`);
    console.log(`Para testar o ERRO CORS, COMENTE 'app.use(cors(corsOptions))' no app.js.`);
});