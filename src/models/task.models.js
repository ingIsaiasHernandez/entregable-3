
const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const Tasks = db.define(
  "tasks",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN(),
      allowNull: false,
    }

  },
);

module.exports = Tasks;
