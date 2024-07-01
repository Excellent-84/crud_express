import db from '../db/dbUsers.js';

export default async (req, res) => {
  res.status(200).json(await db.getUsers());
};
