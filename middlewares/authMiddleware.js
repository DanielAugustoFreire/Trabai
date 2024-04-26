const UsuarioModel = require("../models/usuarioModel");

class AuthMiddleware {

    async EstaLogado(req, res, next) {
        if (req.cookies != undefined && req.cookies.usuarioLogado != null) {
            let usuarioId = req.cookies.usuarioLogado;
            let usuario = new UsuarioModel();
            usuario = await usuario.pegar_id(usuarioId);
            if (usuario != null && usuario.usuarioId != null) {
                next();
            }
            else {
                //Página com contador para retornar a pagina de vitrine
                res.redirect("/login");
            }
        }
        else {
            //Página com contador para retornar a pagina de vitrine
            res.redirect("/login");
        }
    }
}

module.exports = AuthMiddleware;