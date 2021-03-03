const express = require('express');
const cors = require('cors'); 

require('dotenv').config();
const cookieParser = require('cookie-parser');
const app = express();

require('./config/mongoose.config');
app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
const userRoutes = require('./routes/users.routes');
userRoutes(app);
const BeerRoutes = require('./routes/beers.routes');
BeerRoutes(app);

app.listen(8000, () => console.log('hello, listening on 8000'));