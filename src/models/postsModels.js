import conectarAoBanco from "../config/dbConfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function getTodosPosts(){
    const db = conexao.db("imsersao-alura-backend");
    const colecao = db.collection("posts");
    return colecao.find().toArray();
}