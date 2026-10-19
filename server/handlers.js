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
}

async function getDistrictList(req, res) {
    const query = await pool.query(
        `SELECT kab_kota FROM batas_kab_kota_2019 ORDER BY kab_kota ASC`, []
    );

    const arr = [];

    for (let i in query.rows) {
        arr.push(query.rows[i].kab_kota);
    }

    res.status(200).json({
        response: "OK",
        list: arr,
    });
}

export { getAll, getDistrictList };