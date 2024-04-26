const express = require('express');
const CategoriaController = require('../controllers/categoriaController');
const AuthMiddleware = require('../middlewares/authMiddleware');


const categoriaRouter = express.Router();
const auth = new AuthMiddleware();

router = express.Router();

let ctrl = new CategoriaController()
categoriaRouter.get('/', auth.EstaLogado, ctrl.listarView);

module.exports = categoriaRouter;