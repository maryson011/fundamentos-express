import express from "express";
import rotaBasico from "./routes/basico"
import rotaDiferentesRetornos from "./routes/diferentesRetornos"
import rotaRotasAninhadas from "./routes/rotasAninhadas"
import rotaStatus from "./routes/status"
import rotaParametrosDeRota from "./routes/parametrosDeRota"
import rotaParametrosDeQuery from "./routes/parametrosDeQuery"
import rotaMetodos from "./routes/metodos"
const app = express();
const port = 8080;

// // middleware -> padrão de projeto usado pelo express -> funções responsáveis por pequenas tarefas
// app.use((req, res, next) => {
//     console.log(`Data: ${Date.now()}`)
//     next()
// }) // executa essa função sempre que uma requisição for feita, pq não foi especificada a rota

// middleware para leitura do body da requisição
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(rotaBasico)
app.use(rotaDiferentesRetornos)
app.use("/produtos", rotaRotasAninhadas)
app.use("/status", rotaStatus)
app.use("/parametrosDeRota", rotaParametrosDeRota)
app.use("/parametrosDeQuery", rotaParametrosDeQuery)
app.use("/metodos", rotaMetodos)

app.listen(port, () => {
  console.log(`Server running in port ${port}!!`);
});
