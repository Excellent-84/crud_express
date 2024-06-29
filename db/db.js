const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'crud_express_db',
  password: 'postgres',
  port: 5432
});

pool.query(
  `CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    age INTEGER NOT NULL
  )`,
  (err, result) => {
    if (err) {
      console.error('Error creating table: ', err);
    } else {
      console.log('Table users is available!');
    }
  }
);

module.exports = pool;
