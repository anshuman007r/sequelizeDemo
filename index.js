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

  // Now the `users` table in the database corresponds to the model definition
// User.create({
//   firstName: 'Shashwat',
//   lastName: 'Sinha'
// });
// User.findAll().then(users=>{
//   console.log('All users',JSON.stringify(users,null,4));
// });
User.destroy({
  where:{
    createdAt:"2020-05-01 14:28:43.535+05:30"
  }
}).then(()=>
{
  console.log('Done')
});

// console.log('EXITING PROGRAM');
