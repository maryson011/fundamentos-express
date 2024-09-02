import Router from "express";
import RepositorioUsuario from "@src/core/usuarios/RepositorioUsuario";

const router = Router();
const repo = new RepositorioUsuario();

router.post("/", (req, res) => {
  const { email, senha } = req.body;

  if (!repo.usuarioExiste(email)) {
    res.send(204).send()
  }

  if (!repo.loginCorreto(email, senha)) {
    res.status(204).send()
  }

  res.status(200).send("Login correto")
});

export default router