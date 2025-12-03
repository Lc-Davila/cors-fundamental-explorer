import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 8080;

const corsOptions = {
    origin: 'http://localhost:3000',
    methods: ['GET', 'OPTIONS'], 
    optionsSuccessStatus: 200
};

app.use(express.json());

app.get('/api/mensagem', (req, res) => {
    const corsStatus = app.get('cors-enabled') ? "ATIVADO" : "DESATIVADO (Verifique o código fonte)";
    
    res.status(200).json({ 
        data: "Mensagem secreta da API em 8080.",
        status: `CORS para 3000 está ${corsStatus}.`
    });
});
app.listen(PORT, () => {
    console.log(`\n--- Servidor Node/Express ---`);
    console.log(`✅ API Backend rodando em: http://localhost:${PORT}`);
    console.log(`🌐 Origem permitida para CORS (configurada): http://localhost:3000`);
    console.log(`\n⚠️ Lembre-se de COMENTAR/DESCOMENTAR 'app.use(cors)' para alternar o teste.`);
    console.log(`-------------------------------\n`);
});
