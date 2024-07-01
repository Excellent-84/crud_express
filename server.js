import Router from 'express';
import router from './router.js';

const app = new Router();
const PORT = 3000;

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
