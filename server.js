import express from "express";
import conectarAoBanco from "./src/config/dbConfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO)


const app = express();
app.use(express.json());

//const posts = [
  
 // { id: 1, descricao: "Uma foto teste", imagem: "https://placecats.com/millie/300/150" },
  //{ id: 2, descricao: "Gato fazendo yoga", imagem: "https://placecats.com/millie/300/150" },
  //{ id: 3, descricao: "Gato fazendo panqueca", imagem: "https://placecats.com/millie/300/150"},
//];

function BuscarPostPorID(id){
  return posts.findIndex((post)=>{
    return post.id === Number(id);

  })
}

app.get("/posts",async (req, res) => {
  const posts=  await getTodosPosts()
  res.json(posts);
});



async function  getTodosPosts(){
  const db = conexao.db("imersao-alura-backend")
  const colecao = db.collection("posts")
  return colecao.find().toArray()

}
