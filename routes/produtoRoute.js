const express = require('express');
const multer = require('multer');
const ProdutoController = require('../controllers/produtoController');
const AuthMiddleware = require('../middlewares/authMiddleware');

const produtoRouter = express.Router();
const auth = new AuthMiddleware();

let storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "public/img/produtos");
    },
    filename: function(req, file, cb) {
        let ext = file.originalname.split(".").pop();  //Pega o ultimo depois do . ~~ ex: dan.png  fica duas
                                                                    //strings uma dan e outra png
        //ou
        //
        //let ext = file.originalname.split(".").slice(-1)[0]
        let novoNome = Date.now().toString() + "." + ext;
        cb(null, novoNome);
    }
})


let upload = multer({storage});

let ctrl = new ProdutoController
produtoRouter.get('/', auth.EstaLogado, ctrl.listarView);
produtoRouter.get('/cadastro', auth.EstaLogado, ctrl.cadastroView);
produtoRouter.post("/cadastro", upload.single("imagem"), auth.EstaLogado, ctrl.cadastrarProduto);
produtoRouter.post("/excluir", auth.EstaLogado, ctrl.excluirProduto);
produtoRouter.get("/alterar/:id", auth.EstaLogado, ctrl.alterarView);
produtoRouter.post("/alterar", upload.single("imagem"), auth.EstaLogado, ctrl.alterarProduto);

module.exports = produtoRouter;