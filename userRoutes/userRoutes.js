const express = require('express');
const router = express.Router();
const createUser = require('./createUser');
const getUser = require('./getUser');
const listUser = require('./listUser');
const updateUser = require('./updateUser');
const deleteUser = require('./deleteUser');
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', listUser);
router.get('/:id', getUser);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
