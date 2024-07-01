import db from '../db/dbUsers.js';

export default async (req, res) => {
  const { name, age } = req.body;

  if (name && age) {
    const user = { name, age: parseInt(age) };
    const createdUser = await db.addUser(user);
    res.status(201).json(createdUser);
  } else {
    res.status(404).json({ message: 'Name and age are required' });
  }
};
