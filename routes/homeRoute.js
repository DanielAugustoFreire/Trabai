const express = require('express');
const HomeController = require('../controllers/homeController');
const AuthMiddleware = require('../middlewares/authMiddleware');

const homeRouter = express.Router();
const auth = new AuthMiddleware();

let ctrl = new HomeController();
homeRouter.get('/', auth.EstaLogado, ctrl.homeView);

module.exports = homeRouter;