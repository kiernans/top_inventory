#! /usr/bin/env node

import { Client } from "pg";
// Get ENV variables

// eslint-disable-next-line @typescript-eslint/no-require-imports
require('dotenv').config();

const SQL = `
CREATE TABLE IF NOT EXISTS webtoons (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title VARCHAR(255),
  author VARCHAR(255),
  genre VARCHAR(255),
  added TIMESTAMP
);
INSERT INTO
  webtoons (title, author, genre, added)
VALUES
  (
    'Return of the Mount Hua Sect',
    'Biga',
    'Action',
    '2012-06-18 10:34:09'
  ),
  (
    'Tower of God',
    'S.I.U.',
    'Adventure',
    '2015-02-28 11:12:09'
  );
`;

async function main() {
  console.log("Setting up database...");
  const client = new Client({
    connectionString: `postgresql://nukabunny:${process.env.DATABASE_PASSWORD}@localhost:5432/top_inventory`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();