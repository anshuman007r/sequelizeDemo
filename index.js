const Sequelize = require('sequelize');
const Model = Sequelize.Model;

const sequelize = new Sequelize('learningorm', 'postgres', 'password', {
  host: 'localhost',
  dialect: 'postgres', /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  }).finally(() => {
    console.log('FINALLY BLOCK EXECUTED');
    sequelize.close();
    console.log('CONNECTION CLOSED');
  });

console.log('EXITING PROGRAM');