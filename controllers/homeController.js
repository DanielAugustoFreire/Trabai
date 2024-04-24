const ProdutoModel = require("../models/produtoModel");

class HomeController {

    constructor() {

    }

    async homeView(req, res) {
        let prod = new ProdutoModel();
        let lista = await prod.listarProdutos();
        res.render('home/index', {lista : lista, layout : `home/index`});
    }
}


module.exports = HomeController;