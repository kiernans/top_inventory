import pool from "./pool";

async function getAllEntries() {
    const { rows } = await pool.query("SELECT * FROM webtoons");
    return rows;
}

async function insertEntry(title: string, author: string, genre: string) {
    await pool.query(`
        INSERT INTO
        webtoons (title, author, genre, added)
        VALUES
        (
        ($1),
        ($2),
        ($3),
        ($4))`, [title, author, genre, new Date()]
    )
}




export default { getAllEntries, insertEntry };