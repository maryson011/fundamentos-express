import express from 'express'
import cors from 'cors'
import rotasProdutos from "./routes/produtos"
import rotasLogin from "./routes/Login"

const app = express()
const port = 4000

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(cors())
app.use("/produtos", rotasProdutos)
app.use("/login", rotasLogin)

app.listen(port, () => {
    console.log(`server running in port ${port}...`)
})