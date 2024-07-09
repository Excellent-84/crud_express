import db from '../../db/dbUsers.js';

export default async (req, res) => {
  const id = parseInt(req.params.id);
  const user = await db.getUserById(id);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};
