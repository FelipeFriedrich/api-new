const { DataTypes } = require("sequelize");

const sequelize = require("../index");

const Books = sequelize.define("book", { 
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
    descricao: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    status:{
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  }, {
    freezeTableName: true,
  });

//create table if not exists...
const init = async () => {
  await Books.sync();
};

init();

module.exports = Books;