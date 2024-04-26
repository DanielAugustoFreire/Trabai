const Database = require("../db/database");

const banco = new Database();

class usuarioModel {
    #usuarioId;
    #usuarioNome;
    #usuarioEmail;
    #usuarioSenha;

    constructor(id, nome, email, senha) {this.#usuarioId = id;this.#usuarioNome = nome;this.#usuarioEmail = email;this.#usuarioSenha = senha;}
    get usuarioId() {return this.#usuarioId;}set usuarioId(id) {this.#usuarioId = id;}
    get usuarioNome() {return this.#usuarioNome;}set usuarioNome(nome) {this.#usuarioNome = nome;}
    get usuarioEmail() {return this.#usuarioEmail;}set usuarioEmail(email) {this.#usuarioEmail = email;}
    get usuarioSenha() {return this.#usuarioSenha;}set usuarioSenha(senha) {this.#usuarioSenha = senha;}

    async obterPorEmailSenha(email, senha) {
        let sql = "SELECT * FROM tb_usuario WHERE usuarioEmail = ? AND usuarioSenha = ?";

        let valores = [email, senha];

        let rows = await banco.ExecutaComando(sql, valores);

        if (rows.length > 0) {
            let row = rows[0];
            return new usuarioModel(row["usuarioId"], row["usuarioNome"], row["usuarioEmail"], row["usuarioSenha"]);
        }

        return null;
    }


    async pegar_id(id) {
        let sql = "select * from tb_usuario where usuarioId = ?"

        let valores = [id];

        let rows = await banco.ExecutaComando(sql, valores);

        if (rows.length > 0) {
            let row = rows[0];
            return new usuarioModel(row["usuarioId"], row["usuarioNome"], row["usuarioEmail"], row["usuarioSenha"]);
        }

        return null;
    }
}

module.exports = usuarioModel
