import pool from "./pool";

interface Webtoon {
    id: string,
    title: string,
    author: string,
    genre: string
}

async function getAllWebtoons() {
    const { rows } = await pool.query("SELECT * FROM webtoons ORDER BY id");
    return rows;
}

async function getWebtoonById(id: number) {
    const { rows } = await pool.query("SELECT * FROM webtoons WHERE id=$1", [id]);
    return rows[0];
}

async function insertWebtoon(title: string, author: string, genre: string) {
    await pool.query(`
        INSERT INTO
        webtoons (title, author, genre, added)
        VALUES
        (
        ($1),
        ($2),
        ($3),
        ($4))`, [title, author, genre, new Date()]
    );
}

async function updateWebtoon({ id, title, author, genre }: Webtoon) {
    await pool.query(`
        UPDATE webtoons
        SET 
            title = ($1), 
            author = ($2), 
            genre = ($3)
        WHERE id = ($4)
        `, [title, author, genre, id]);
}

async function deleteWebtoonById(id: string) {
    await pool.query(`
        DELETE FROM webtoons
        WHERE id = ($1)
        `, [id]);
}



export default {
    getAllWebtoons,
    getWebtoonById,
    insertWebtoon,
    updateWebtoon,
    deleteWebtoonById
};