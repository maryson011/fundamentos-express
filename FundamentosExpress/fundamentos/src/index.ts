import express from "express";
import rotaBasico from "./routes/basico"
import rotaDiferentesRetornos from "./routes/diferentesRetornos"
import rotaRotasAninhadas from "./routes/rotasAninhadas"
const app = express();
const port = 8080;

// // middleware -> padrão de projeto usado pelo express -> funções responsáveis por pequenas tarefas
// app.use((req, res, next) => {
//     console.log(`Data: ${Date.now()}`)
//     next()
// }) // executa essa função sempre que uma requisição for feita, pq não foi especificada a rota

app.use(rotaBasico)
app.use(rotaDiferentesRetornos)
app.use(rotaRotasAninhadas)

app.listen(port, () => {
  console.log(`Server running in port ${port}!!`);
});
