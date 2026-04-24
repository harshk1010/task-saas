const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Task = sequelize.define("Task", {
  title: { type: DataTypes.STRING, allowNull: false },
  status: {
    type: DataTypes.ENUM("PENDING", "COMPLETED"),
    defaultValue: "PENDING",
  },
});

module.exports = Task;