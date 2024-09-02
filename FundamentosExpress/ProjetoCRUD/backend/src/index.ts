import express from 'express'
import cors from 'cors'
import rotasProdutos from "./routes/produtos"
import rotasLogin from "./routes/Login"
import dotenv from 'dotenv'
import autenticacao from "./middlewares/Atenticacao"

dotenv.config()

const app = express()
const port = 4000

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(cors())
app.use("/login", rotasLogin)
app.use("/produtos", autenticacao, rotasProdutos)

app.listen(port, () => {
    console.log(`server running in port ${port}...`)
})