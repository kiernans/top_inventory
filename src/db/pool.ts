import { Pool } from "pg";

export default new Pool({
    host: "localhost",
    user: "nukabunny",
    database: "top_inventory",
    password: process.env.DATABASE_PASSWORD,
    port: 5432

});