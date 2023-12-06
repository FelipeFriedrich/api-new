const { request } = require('express');
const CostumersDataBase = require('../database/models/costumer');

module.exports = class Book {

  static all(req, res, next) {
    CostumersDataBase.findAll()
      .then((result) => {
        res.json(result);
      })
      .catch(next);
  }

  static findByPK(req, res, next) {
    try {
      const { id } = req.params;
      CostumersDataBase.findByPk(id).then((result) => {
        res.json(result);
      })
        .catch(next);
    }catch(err){
      console.error(err);
      res.status(404).json(err);
    }
  }

  static create(req, res, next) {
    const { nome, telefone, email } = req.body;
    CostumersDataBase.create({
      nome,
      telefone,
      email
    })
      .then((result) => {
        res.status(201).json(result);
      })
      .catch(next);
  }

  static async update(req, res, next) {
    try {
      const { id } = req.params;
      const { nome, telefone, email } = req.body;
      const response = await CostumersDataBase.update(
        { nome, telefone, email },
        { where: { 'id': id } });
        res.status(200).json(response);
    } catch (err) {
      return err;
    }

  }

  static async delete(req, res, next) {
    try {
      const { id } = req.params;
      const response = await CostumersDataBase.destroy(
        { where: { 'id': id } });
        res.status(202).json(response);
    } catch (err) {
      return err;
    }
  }
}