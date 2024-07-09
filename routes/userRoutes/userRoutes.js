import bodyParser from 'body-parser';
import Router from 'express';

import createUser from './createUser.js';
import deleteUser from './deleteUser.js';
import getUser from './getUser.js';
import listUser from './listUser.js';
import updateUser from './updateUser.js';


const userRoutes = new Router();

userRoutes.use(bodyParser.urlencoded({ extended: true }));

userRoutes.get('/', listUser);
userRoutes.post('/', createUser);
userRoutes.get('/:id', getUser);
userRoutes.put('/:id', updateUser);
userRoutes.delete('/:id', deleteUser);

export default userRoutes;
