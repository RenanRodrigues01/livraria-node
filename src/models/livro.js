import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
    {// define o padrão do arquivo JSON e os campos obrigatorios ou não 
        id: {type: String},
        titulo: {type: String, required: true},
        autor: {type: String, required: true},
        genero:{type: String, required: true},
        editora: {type: String, require: true} 
    }
);

const livros = mongoose.model('livros', livroSchema);

export default livros