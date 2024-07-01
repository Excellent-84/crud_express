import Router from 'express';
import createUser from './createUser.js';
import getUser from './getUser.js';
import listUser from './listUser.js';
import updateUser from './updateUser.js';
import deleteUser from './deleteUser.js';
import bodyParser from 'body-parser';

const userRoutes = new Router();

userRoutes.use(bodyParser.urlencoded({ extended: true }));

userRoutes.get('/', listUser);
userRoutes.get('/:id', getUser);
userRoutes.post('/', createUser);
userRoutes.put('/:id', updateUser);
userRoutes.delete('/:id', deleteUser);

export default userRoutes;
