const Sequelize = require('sequelize');
const Model = Sequelize.Model;

const sequelize = new Sequelize('learningorm', 'postgres', 'password', {
  host: 'localhost',
  dialect: 'postgres', /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

class User extends Model {}

User.init({
  // attributes
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING
    // allowNull defaults to true
  }
}, {
  sequelize,
  modelName: 'user'
  // options
});

User.sync().then(() => {
  // Now the `users` table in the database corresponds to the model definition
  return User.create({
    firstName: 'John',
    lastName: 'Hancock'
  });
});

console.log('EXITING PROGRAM');