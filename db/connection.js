const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('estudos-mvc', 'admin','admin',{
  host: 'localhost',
  dialect: 'postgres',
});

sequelize.authenticate().then(() => {
  console.log("Conectado ao banco")
}).catch((err) => {console.log("Erro ao conectar ao banco: ", err)});

module.exports = sequelize;