const { Sequelize} = require('sequelize');

const db = new Sequelize({
    database: 'todo_db',
    dialect: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root",
});

module.exports = db;