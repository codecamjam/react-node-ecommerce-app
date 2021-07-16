const express = require('express');
const mongoose = require('mongoose');
const expressValidator = require('express-validator');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
require('dotenv').config();

//import routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const categoryRoutes = require('./routes/category');

//app
const app = express();

//db
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => console.log('DB Connected'));

//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

//routes middleware
app.use(expressValidator());
app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', categoryRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
