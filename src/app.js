import express from "express";
import db from "./config/dbConnect.js";
import livros from "./models/livro.js";

db.on("error", console.log.bind(console, "erro de conexão"));
db.once("open", () => {
    console.log("conexão com o banco de dados feita com secesso!")
})

const app = express();
app.use(express.json());

//const livros = [
//  {id: 1, "titulo": "harrypoter"},
//  {id: 2, "titulo": "senhor dos aneis"}
//]

app.get('/', (req, res) => {
    res.status(200).send('livraria node');
})

app.get('/livros', (req, res) => {
    livros.find((err, livros) =>{
        res.status(200).json(livros);
    })
    
})

app.get('/livros/:id', (req, res) => {
    //utiliza o id vindo pela url para passa-lo a funçao
    let index = findLivro(req.params.id);
    //retorna somente o livro com o id informado na url
    res.json(livros[index]);
})

app.post('/livros', (req, res) =>{
    //adiciona um elemento no array pelo corpo da requisição 
    livros.push(req.body);
    res.status(201).send('livro cadastrado com sucesso');
})

app.put('/livros/:id', (req, res) => {
    //utiliza o id vindo pela url para passa-lo a funçao
    let index = findLivro(req.params.id);
    //faz a atualização do titulo do livro pegando o titulo do corpo da requisição
    livros[index].titulo = req.body.titulo;

    res.json(livros);
})

app.delete('/livros/:id', (req, res) => {
    //atribuição por desestruturação
    let {id} = req.params;
    let index = findLivro(id);
    livros.splice(index, 1)

    res.send(`livro ${id} removido com sucesso`);
})

//função que localiza o objeto pelo id
function findLivro (id) {
    return livros.findIndex(livro => livro.id == id);
}

export default app;