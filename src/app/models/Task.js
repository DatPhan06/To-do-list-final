const { Sequelize, DataTypes } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define("Tasks", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    Completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
  });
  return Task;
};
