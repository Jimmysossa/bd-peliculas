const { getAll, create, getOne, remove, update } = require('../controllers/directors.controller');
const express = require('express');

const directorsRouter = express.Router();

directorsRouter.route('/directors')
    .get(getAll)
    .post(create);

directorsRouter.route('/directors/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = directorsRouter;