const db = require('../db/dbUsers.js');

module.exports = async (req, res) => {
  const id = parseInt(req.params.id);
  const user = await db.getUserById(id);

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};
