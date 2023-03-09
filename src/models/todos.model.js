const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const Todo = db.define("todos", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
   },
   status:{
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false

   }

});

module.exports = Todo;