const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const connection = require('./db/connection');

//Models
const Task = require('./models/Task');

//Rotas
const tasksRoutes = require('./routes/tasksRoutes');

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json())
app.use(express.static('public'))
app.use('/tasks', tasksRoutes);
connection.sync()
  .then((db) => app.listen(3000))
  .catch((err) => console.log(err))

