const express = require('express');
const router = express.Router();
const pool = require('./users.js');

router.get('/', async (req, res) => {
  try {
    const users = await pool.getUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const user = await pool.getUserById(req.params.id);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.json(user);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, age } = req.body;
    const user = await pool.addUser({ name, age });
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { name, age } = req.body;
    const updatedUser = await pool.updateUser(req.params.id, { name, age });
    if (!updatedUser) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.json(updatedUser);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deleted = await pool.deleteUser(req.params.id);
    if (!deleted) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.json({ message: 'User deleted' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
