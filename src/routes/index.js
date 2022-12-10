import express from "express";
import livros from './livrosRoutes.js';

const routes = (app) => {
    // define a mensagem da pagina principal ou endPoint prinipal
    app.route("/").get((req, res) => {
        res.status(200).send({titulo: "livraria Node"});
    })
    // faz a conexão entre meu arquivo app.js e as minhas rotas já definidas
    app.use(
        express.json(),
        livros
    )
}



export default routes 