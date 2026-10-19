import express from 'express';
import cors from 'cors';

import pool from './db/config.js';
import getAll from './handlers.js';

const PORT = 3000;

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.status(200).json({
        response: 'OK',
    });
});

app.get('/kecamatan', getAll);

async function startServer() {
    await pool.query('SELECT NOW()');
    console.log('Database connection established.');
    
    app.listen(PORT, () => {
        console.log(`Server is running at port ${PORT}...`);
    });
}

startServer();