import Router from 'express'

const router = Router()

import path from "path";

router.get("/variavel", (req, res) => {
    let v = "Adeus";
    res.send(v);
  });
  
  router.get("/variavelNumerica", (req, res) => {
    let v = 1520; // é entendido que o número é um status http
    // res.send(v)
    res.json(v);
  });
  
  router.get("/objeto", (req, res) => {
    const obj = { nome: "Marcos", idade: 34 };
    res.send(obj); // obj será enviado como JSON
  });
  
  router.get("/arrayDeObjetos", (req, res) => {
    const objs = [
      { modelo: "Gol", ano: "2010" },
      { modelo: "Uno", ano: "2000" },
      { modelo: "Celta", ano: "2001" },
    ];
  
    res.send(objs);
  });
  
  router.get("/html", (req, res) => {
    res.sendFile(path.join(__dirname, "../", "assets", "pagina.html"));
  });
  
  router.get("/pdf", (req, res) => {
    res.sendFile(path.join(__dirname, "../", "assets", "PDF-teste.pdf"));
  });

export default router