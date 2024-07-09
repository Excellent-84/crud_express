import db from '../../db/dbUsers.js';

export default async (req, res) => {
  const id = parseInt(req.params.id);
  const updateData = req.body;

  const updateUser = await db.updateUser(id, updateData);

  if (updateUser) {
    res.json(updateUser);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};
