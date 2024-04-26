const User = require('../models/usuarioModel');

class loginController{

    loginView(req, res) {
        res.render('login/login', { layout: 'login/login' });
    }

    async logar(req,res){
        let mensagem = ``;
        if(req.body.email != null && req.body.password != null){
            let user = new User();

            user = await user.obterPorEmailSenha(req.body.email, req.body.password);
            if(user != null) {
                res.cookie("usuarioLogado", user.usuarioId);
                res.redirect("/");
            }
            else {
                mensagem = "Usuário/Senha incorretos!";
            }
        }
        else {
            mensagem = "Usuário/Senha incorretos!";
        }
        console.log(mensagem)

        res.render('login/login', { mensagem: mensagem, layout: 'login/login' });
    }
}

module.exports = loginController