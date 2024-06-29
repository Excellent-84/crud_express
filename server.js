const express = require('express');

const app = express();

const routes = require('./router.js');
app.use('/users', routes);
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
