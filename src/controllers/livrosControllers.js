import livros from "../models/livro.js";

class livroController {

    static listarLivros = (req, res) => {
        livros.find((err, livros) =>{
            res.status(200).json(livros)
        });    
    }
}

export default livroController