import pg from 'pg';

const { Pool } = pg;
const connectionString = `postgresql://postgres:2121@localhost:5432/geoprocessing`;

const pool = new Pool({
    connectionString
});

export default pool;