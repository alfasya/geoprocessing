import pool from './db/config.js';

async function getAll(req, res) {
    let data = await pool.query(
        `SELECT id, kecamatan FROM batas_kecamatan_2019 ORDER BY kecamatan ASC;`, []
    );

    const result = await data.rows;

    res.status(200).json({
        response: 'OK',
        data: result,
    });
};

export default getAll;