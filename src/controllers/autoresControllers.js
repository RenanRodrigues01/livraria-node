import autor from "../models/Autor.js";

class autoresControler { 
    
    static listarAutores = (req, res) => {
        //lista todos os autor já cadastrados no banco de dados
        autor.find((err, autor) =>{
            res.status(200).json(autor);
        });    
    }

    static listarAutorPorId = (req, res) => {
        let {id} = req.params
        // faz a busca no banco de dados por id, e retorna só o documento correspondente 
        autor.findById(id,(err, autor) =>{
            if(err){
                res.status(400).send({message: `${err.message} - id do autor não encontrada`}) 
            } else {
                res.status(200).send(autor)
            }
        })
    }

    static cadastrarAutor = (req, res) => {
        //cria uma variavel que recebe o json recebido no corpo da requisução com o formato definido com schema
        let autores = new autor(req.body)
        //comando responsavel por salvar os dados no banco de dados 
        autores.save((err) =>{
        // condição responsavel por verificar se houve algum erro, e retornar um status e uma mensagem
            if(err){
                res.status(500).send({message:`${err.message} - falha ao cadastrar autor`})
            } else{
        // efetivamente cadastra o autor com o status correto e retorna o proprio autor em formato JSON
                res.status(201).send(autores.toJSON())
            }
        })

    }

    static atualizarAutor = (req, res) => {
        //atribuição por desestruturação
        let {id} = req.params
        // metodo responsavel por encontar pelo id e fazer a atualização
        autor.findByIdAndUpdate(id, {$set: req.body}, (err) =>{
        // se não houve nenhum erro, o autor sera atualizado retornando um status e uma mensagem 
            if(!err){
                res.status(200).send("autor atualizado com sucesso")
            } else{
        // caso tenha ocorrido algum erro, esse erro é retornado informando o motivo 
                res.staus(500).send({message: `${err.message}`})
            }
        })

    }

    static deletarAutor = (req, res) =>{
        let {id} = req.params
        // metodo responsavel por achar o ducumento pelo id e deleta-lo do banco de dados
        autor.findByIdAndDelete(id, (err) => {
        // condição que verifica se houve algum tipo de erro 
            if(!err){
                res.status(200).send(`autor id:${id} removido com sucesso`)
            } else {
                res.status(500).send({message: `${err.message}`})
            }
        })
    }
}

export default autoresControler
