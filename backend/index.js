const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/db');
const postsRoutes = require('./routes/postsRoutes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/posts', postsRoutes);

app.listen(3000, () => {
  console.log('Server listening to port 3000');
});