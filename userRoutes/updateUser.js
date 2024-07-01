const db = require('../db/dbUsers.js');

module.exports = async (req, res) => {
  const id = parseInt(req.params.id);
  const updateData = req.body;

  const updateUser = await db.updateUser(id, updateData);

  if (updateUser) {
    res.status(200).json(updateUser);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};
