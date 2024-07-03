import db from '../db/dbUsers.js';

export default async (req, res) => {
  res.json(await db.getUsers());
};
