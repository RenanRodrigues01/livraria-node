import mongoose from "mongoose";

mongoose.connect("mongodb+srv://renan:renan123@cluster0.pn5qv53.mongodb.net/livraria-node");

let db = mongoose.connection;

export default db ;