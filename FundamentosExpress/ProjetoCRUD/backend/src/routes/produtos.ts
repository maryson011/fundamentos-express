import { Router } from "express";
import RepositorioProduros from "@src/core/produtos/RepositorioProdutos";

const repo = new RepositorioProduros();
const router = Router();

router.get("/", (req, res) => {
  const dados = repo.obterTodos();
  res.status(200).send(dados);
});

router.post("/", (req, res) => {
  const {nome, preco} = req.body
  repo.novo(nome, preco)
  res.status(201).send()
})

export default router;
