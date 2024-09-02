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

router.get("/:codigo", (req, res) => {
  const codigo = req.params.codigo
  const produto = repo.obterProCodigo(codigo)
  if (produto) {
    res.status(200).send(produto)
  } else {
    res.status(204).send()
  }
})

export default router;
