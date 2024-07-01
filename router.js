const express = require('express');
const router = express.Router();
const usersRouter = require('./userRoutes/userRoutes.js');

router.use('/users', usersRouter);

module.exports = router;
