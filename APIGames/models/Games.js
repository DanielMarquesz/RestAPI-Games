const { Sequelize, DataTypes, Model } = require("sequelize");
const connection = require("../database/connection");

class Games extends Model {}

Games.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    description: {
      type: DataTypes.TEXT,
    },

    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },

    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    avaiable: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },

    cover: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize: connection,
    modelName: "Games",
  }
);

//Games.sync({force: false}) // To create the table set 'True', but after created once set 'False'

module.exports = Games;
