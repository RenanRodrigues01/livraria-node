import express from "express";
import autoresControllers from "../controllers/autoresControllers.js";

//define o uso do roteamento do proprio express 
const router = express.Router();

router // define os endPoints a serem usadas e os metodos 
    .get("/autores", autoresControllers.listarAutores)
    .get("/autores/:id", autoresControllers.listarAutorPorId)
    .post("/autores", autoresControllers.cadastrarAutor)
    .put("/autores/:id", autoresControllers.atualizarAutor)
    .delete("/autores/:id", autoresControllers.deletarAutor)

export default router