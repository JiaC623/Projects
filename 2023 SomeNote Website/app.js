const express = require('express');
const mongoose = require('mongoose');
const cateRoutes = require('./routes/cateRoutes');
const blogRoutes = require('./routes/blogRoutes');
const todoRoutes = require('./routes/todoRoutes');
const indexController = require('./controllers/indexController');

const app = express();

const dbURL = 'mongodb+srv://DemoSiteUser:DemoSite1234@demositedb.yti8zx9.mongodb.net/DemoData?retryWrites=true&w=majority';

mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(3000))
  .catch( err => console.log(err));

// register view engine
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));

// routes
app.get('/', indexController.index_get);

// app.use('/', indexRoutes);

app.use('/all-cates', cateRoutes);

app.use('/all-blogs', blogRoutes);

app.use('/all-todos', todoRoutes);

