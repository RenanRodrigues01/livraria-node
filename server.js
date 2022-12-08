import app from "./src/app.js";

const port = process.env.PORT || 300;



app.listen(port, () =>{
    console.log(`server rodando na porta http://localhost:${port}`);
})