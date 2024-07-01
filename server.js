const express = require('express');
const app = express();
const router = require('./router.js');
const PORT = 3000;

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
