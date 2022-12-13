import livros from "../models/livro.js";

class livroController {

    // responsavel por definir as regas de nogocio, recebe os endPoints direto do arquivo livrosRoutes
    static listarLivros = (req, res) => {
        //lista todos os livros já cadastrados no banco de dados
        livros.find()
            .populate('autor')
            .exec((err, livros) =>{
                res.status(200).json(livros);
        });    
    }

    static listarLivroPorId = (req, res) => {
        let {id} = req.params
        // faz a busca no banco de dados por id, e retorna só o documento correspondente 
        livros.findById(id,(err, livros) =>{
            if(err){
                res.status(400).send({message: `${err.message} - id do livro não encontrada`}) 
            } else {
                res.status(200).send(livros)
            }
        })
    }

    static cadastrarLivro = (req, res) => {
        //cria uma variavel que recebe o json recebido no corpo da requisução com o formato definido com schema
        let livro = new livros(req.body)
        //comando responsavel por salvar os dados no banco de dados 
        livro.save((err) =>{
        // condição responsavel por verificar se houve algum erro, e retornar um status e uma mensagem
            if(err){
                res.status(500).send({message:`${err.message} - falha ao cadastrar livro`})
            } else{
        // efetivamente cadastra o livro com o status correto e retorna o proprio livro em formato JSON
                res.status(201).send(livro.toJSON())
            }
        })

    }

    static atualizarlivro = (req, res) => {
        //atribuição por desestruturação
        let {id} = req.params
        // metodo responsavel por encontar pelo id e fazer a atualização
        livros.findByIdAndUpdate(id, {$set: req.body}, (err) =>{
        // se não houve nenhum erro, o livro sera atualizado retornando um status e uma mensagem 
            if(!err){
                res.status(200).send("livro atualizado com sucesso")
            } else{
        // caso tenha ocorrido algum erro, esse erro é retornado informando o motivo 
                res.staus(500).send({message: `${err.message}`})
            }
        })

    }

    static deletarLivro = (req, res) =>{
        let {id} = req.params
        // metodo responsavel por achar o ducumento pelo id e deleta-lo do banco de dados
        livros.findByIdAndDelete(id, (err) => {
        // condição que verifica se houve algum tipo de erro 
            if(!err){
                res.status(200).send(`livro id:${id} removido com sucesso`)
            } else {
                res.status(500).send({message: `${err.message}`})
            }
        })
    }
}

export default livroController