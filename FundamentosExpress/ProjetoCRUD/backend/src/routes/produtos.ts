import { Router } from "express";
import RepositorioProduros from "@src/core/produtos/RepositorioProdutos";

const repo = new RepositorioProduros();
const router = Router();

router.get("/", (req, res) => {
  const dados = repo.obterTodos();
  res.status(200).send(dados);
});

export default router;
