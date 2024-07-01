const express = require('express');
const router = express.Router();
const usersRouter = require('./userRoutes/userRoutes.js');

router.use('/users', usersRouter);
router.use((req, res) => {
  res.status(404).json({ message: 'Page not found' });
});

module.exports = router;
