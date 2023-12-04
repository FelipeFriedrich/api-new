const { DataTypes } = require("sequelize");

const sequelize = require("../index");

const Costumer = sequelize.define("costumer", { 
    id: {
      type: DataTypes.INTEGER ,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,        
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefone: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

//create table if not exists...
const init = async () => {
  await Costumer.sync();
};

init();

module.exports = Costumer;