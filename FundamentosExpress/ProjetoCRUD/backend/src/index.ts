import express from 'express'
import rotasProdutos from "./routes/produtos"
const app = express()
const port = 4000

app.use("/produtos", rotasProdutos)

app.listen(port, () => {
    console.log(`server running in port ${port}...`)
})