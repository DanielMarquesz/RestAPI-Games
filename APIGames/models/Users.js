const { Sequelize, Model } = require("sequelize");
const connection = require("../database/connection");

class Users extends Model {}

Users.init(
  {
    name: {
      type: Sequelize.STRING(64),
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING(128),
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    modelName: "Users",
  }
);

//Users.sync({ force: false }); // To create the table set 'True', but after created once set 'False'

module.exports = Users;
