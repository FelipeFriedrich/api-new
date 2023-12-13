const { request } = require('express');
const RentBookDataBase = require('../database/models/rentBook');
const BooksDataBase = require('../database/models/book');
const CostumersDataBase = require('../database/models/costumer');

module.exports = class Book {

  static all(req, res, next) {
    RentBookDataBase.findAll()
      .then((result) => {
        res.json(result);
      })
      .catch(next);
  }

  static findByPK(req, res, next) {
    try {
      const { id } = req.params;
      RentBookDataBase.findByPk(id).then((result) => {
        res.json(result);
      })
        .catch(next);
    }catch(err){
      console.error(err);
      res.status(404).json(err);
    }
  }

  static create(req, res, next) {
    const { idBook, idCostumer } = req.body;
    const status = 'alugado';
    const dataRetirada = new Date();
    RentBookDataBase.create({
      idBook,
      idCostumer,
      status,
      dataRetirada
    })
      .then((result) => {
        res.status(201).json(result);
      })
      .catch(next);
  }

  static async update(req, res, next) {
    try {
      const { id } = req.params;
      const status = 'devolvido';
      const dataDevolucao = new Date();
      const response = await RentBookDataBase.update(
        { status, dataDevolucao},
        { where: { 'id': id } });
        res.status(200).json(response);
    } catch (err) {
      return err;
    }

  }

  static async delete(req, res, next) {
    try {
      const { id } = req.params;
      const response = await RentBookDataBase.destroy(
        { where: { 'id': id } });
        res.status(202).json(response);
    } catch (err) {
      return err;
    }
  }
}