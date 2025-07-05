import pool from "./pool";

async function getAllEntries() {
    const { rows } = await pool.query("SELECT * FROM webtoons");
    return rows;
}

export default { getAllEntries };