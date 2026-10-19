import express from 'express';
import cors from 'cors';

import pool from './db/config.js';
import { getAll, getDistrictList } from './handlers.js';

const PORT = 3000;

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.status(200).json({
        response: 'OK',
    });
});

app.get('/kecamatan', getAll);
app.get('/api/district', getDistrictList);
app.post('/api/geoprocessing/default', (req, res) => 
    setTimeout(() => {
        res.status(200).json({ status: 'OK' })
    }, 5000));

async function startServer() {
    await pool.query('SELECT NOW()');
    console.log('Database connection established.');
    
    app.listen(PORT, () => {
        console.log(`Server is running at port ${PORT}...`);
    });
}

startServer();