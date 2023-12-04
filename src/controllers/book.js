const { request } = require('express');
const BooksDataBase = require('../database/models/book');

module.exports = class Book {

  static all(req, res, next) {
    BooksDataBase.findAll()
      .then((result) => {
        res.json(result);
      })
      .catch(next);
  }

  static findByPK(req, res, next) {
    try {
      const { id } = req.params;
      BooksDataBase.findByPk(id).then((result) => {
        res.json(result);
      })
        .catch(next);
    }catch(err){
      console.error(err);
      res.status(404).json(err);
    }
  }

  static create(req, res, next) {
    const { nome, descricao } = req.body;
    const status = 'disponivel';
    BooksDataBase.create({
      nome,
      descricao,
      status
    })
      .then((result) => {
        res.status(201).json(result); //return with ID -> 201 (CREATED)
      })
      .catch(next);
  }

  static async update(req, res, next) {
    try {
      const { id } = req.params;
      const { nome, descricao } = req.body;
      const response = await BooksDataBase.update(
        { nome, descricao },
        { where: { 'id': id } });
      return response;
    } catch (err) {
      return err;
    }

  }

  static async delete(req, res, next) {
    try {
      const { id } = req.params;
      const response = await BooksDataBase.delete(
        { where: { 'id': id } });
      return response;
    } catch (err) {
      return err;
    }
  }
}