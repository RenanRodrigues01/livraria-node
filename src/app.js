import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";

//estabelece a conexão com o banco de dados
db.on("error", console.log.bind(console, "erro de conexão"));
db.once("open", () => {
    console.log("conexão com o banco de dados feita com secesso!")
})

//estabelece o uso d efetivo do express
const app = express();
//converte os arquivos para formato JSON
app.use(express.json());
// estabelece as rotas com o arquivo routes passando o proprio app como parametro
routes(app)

export default app;