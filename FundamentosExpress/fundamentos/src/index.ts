import express from 'express'
const app = express()
const port = 8080

app.get("/", (req, res) => {
    res.send("<h1>Hello Word!</h1>")
})

app.get("/variavel", (req, res) => {
    let v = "Adeus"
    res.send(v)
})

app.get("/variavelNumerica", (req, res) => {
    let v = 1520 // é entendido que o número é um status http
    // res.send(v)
    res.json(v)
})

app.get("/objeto", (req, res) => {
    const obj = {nome: "Marcos", idade: 34}
    res.send(obj) // obj será enviado como JSON
})

app.get("/arrayDeObjetos", (req, res) => {
    const objs = [
        {modelo: "Gol", ano: "2010"},
        {modelo: "Uno", ano: "2000"},
        {modelo: "Celta", ano: "2001"},
    ]

    res.send(objs)
})

app.listen(port, () => {
    console.log(`Server running in port ${port}!!`)
})