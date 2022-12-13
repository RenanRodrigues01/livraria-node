import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
    {// define o padrão do arquivo JSON e os campos obrigatorios ou não 
        id: {type: String},
        titulo: {type: mongoose.Schema.Types.ObjectId, ref: 'autor', required: true},
        autor: {type: String, required: true},
        editora: {type: String, require: true},
        num_pages: {type: Number}
    }
);

const livros = mongoose.model('livros', livroSchema);

export default livros