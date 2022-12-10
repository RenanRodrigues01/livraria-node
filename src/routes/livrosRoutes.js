import express from "express";
import livroController from "../controllers/livrosControllers.js";

const router = express.Router();

router
    .get("/livros", livroController.listarLivros);

export default router