import express from 'express'

const app = express();

// const http = require('http');

// const routeHandler = require('./routes/router');

// const server = http.createServer(routeHandler);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
