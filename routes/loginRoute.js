const express = require('express');
const LoginController = require('../controllers/loginController');

const loginRouter = express.Router();
let ctrl = new LoginController();

loginRouter.get('/', ctrl.loginView);
loginRouter.post('/logado', ctrl.logar);

module.exports = loginRouter;
