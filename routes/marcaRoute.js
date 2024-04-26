const express = require('express');
const MarcaController = require('../controllers/marcaController');
const AuthMiddleware = require('../middlewares/authMiddleware');

const marcaRouter = express.Router();
const auth = new AuthMiddleware();

let ctrl = new MarcaController();
marcaRouter.get('/',auth.EstaLogado ,ctrl.listarView);


module.exports = marcaRouter;