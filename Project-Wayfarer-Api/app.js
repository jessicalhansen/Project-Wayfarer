require('dotenv').config();
require('./models');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || '4000';
const app = express();
const routes = require('./routes');
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use('/api/users', routes.users);
app.use('/api/v1/cities', routes.cities);
app.use('/api/v1/posts', routes.posts);
app.use('/api/v1/comments', routes.comments);
app.listen(port, () => console.log('connected to port ' + port));
