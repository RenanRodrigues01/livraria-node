import express from "express";
import livroController from "../controllers/livrosControllers.js";

//define o uso do roteamento do proprio express 
const router = express.Router();

router // define os endPoints a serem usadas e os metodos 
    .get("/livros", livroController.listarLivros)
    .get("/livros/busca", livroController.buscarLivroPorEditora)
    .get("/livros/:id", livroController.listarLivroPorId)
    .post("/livros", livroController.cadastrarLivro)
    .put("/livros/:id", livroController.atualizarlivro)
    .delete("/livros/:id", livroController.deletarLivro)

export default router