const Sequelize = require('sequelize');
const sequelize = new Sequelize('Park&You_db', 'root', '',
    {
        host: 'localhost',
        port: 3306,
        dialect: 'mysql'
    });

module.exports = sequelize;

// sequelize.authenticate()
//     .then(() =>
//     {
//         console.log('Connection successful!');
//     })
//     .catch((err) =>
//     {
//         console.log('Error connecting to database: ', err);
//     });