const db = require('../db/dbUsers.js');

module.exports = async (req, res) => {
  res.status(200).json(await db.getUsers());
};
