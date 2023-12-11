const { DataTypes } = require("sequelize");

const sequelize = require("../index");

const RentBook = sequelize.define("rentBook", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  idBook: {
    type: DataTypes.INTEGER,
    references: {
      model: 'book',
      key: 'id'
    },
    allowNull: false,
  },
  idCostumer: {
    type: DataTypes.INTEGER,
    references: {
      model: 'costumer',
      key: 'id'
    },
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  dataRetirada: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  dataDevolucao: {
    type: DataTypes.DATE,
  },
});

//create table if not exists...
const init = async () => {
  await RentBook.sync();
};

init();

module.exports = RentBook;