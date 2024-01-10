import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({ message: 'Backend API...'});
});

app.post('/api/leads', async (req, res) => {
    const { name, email, whatsapp, city } = req.body;
    try {
        const lead = await prisma.lead.create({
            data: {
                name,
                email,
                whatsapp,
                city,
            },
        });
        console.log('Dados do lead salvos no MySQL',lead);
        res.status(200).json(lead);
    } catch (error) {
        console.error('Erro ao salvar dados do lead', error);
        res.status(500).json({ error: 'Erro interno do servidor'});
    }
});

app.get('/api/leads', async (req, res) => {
    try {
        const response = await prisma.lead.findMany();
        res.json({ data: response });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar dados.', error });
    }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`O servidor está sendo executado em http://localhost:${PORT}`);
});