const db = require('../db/dbUsers.js');

module.exports = async (req, res) => {
  const id = parseInt(req.params.id);
  const success = await db.deleteUser(id);

  if (success) {
    res.status(204).json();
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};
