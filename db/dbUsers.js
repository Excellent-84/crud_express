import pool from './db.js';

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

export default {

  async addUser(user) {
    try {
      const { rows } = await pool.query(
        'INSERT INTO users (name, age) VALUES ($1, $2) RETURNING id',
        [user.name, user.age]
      );
      const lastId = rows[0].id;
      return { id: lastId, ...user };
    } catch (err) {
      throw err;
    }
  },

  async getUsers() {
    try {
      const { rows } = await pool.query('SELECT * FROM users ORDER BY id');
      return rows;
    } catch (err) {
      throw err;
    }
  },

  async getUserById(id) {
    try {
      const { rows } = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
      return rows[0];
    } catch (err) {
      throw err;
    }
  },

  async updateUser(id, updateData) {
    try {
      const originalUser = await this.getUserById(id);
      if (!originalUser) {
        return null;
      }
      const { rows } = await pool.query(
        'UPDATE users SET name = $1, age = $2 WHERE id = $3 RETURNING *',
        [updateData.name, updateData.age, id]
      );
      if (originalUser.name === rows[0].name &&
        originalUser.age === rows[0].age) {
        return null;
      }
      return this.getUserById(id);
    } catch (err) {
      throw err;
    }
  },

  async deleteUser(id) {
    try {
      const { rowCount } = await pool.query('DELETE FROM users WHERE id = $1', [id]);
      return rowCount > 0;
    } catch (err) {
      throw err;
    }
  }
};
