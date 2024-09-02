import Router from 'express'

const router = Router()

let pessoas = [
    {nome: "Catia", idade: 21},
    {nome: "Mauro", idade: 44},
    {nome: "Leticia", idade: 22},
]

router.get("/", (req, res) => {
    res.status(200).send(pessoas)
})

router.post("/", (req, res) => {
    const novaPessoa = {nome: req.body.nome, idade: req.body.idade}
    pessoas.push(novaPessoa)
    console.log(req.body)
    console.log(novaPessoa)
    res.status(201).send(pessoas)
})

router.get("/:id", (req, res) => {
    const indice = +req.params.id
    if (indice >= 0 && indice <= pessoas.length) {
        res.status(200).send(pessoas[indice])
    } else {
        res.status(204).send(pessoas)
    }
})

router.delete("/:id", (req, res) => {
    const indice = +req.params.id
    const dadosAtualizados = pessoas.filter((pessoa, i) => {
        i !== indice
    })
    if (dadosAtualizados.length === pessoas.length) {
        res.status(406).send(pessoas)
    } else {
        pessoas = [...dadosAtualizados]
        res.status(200).send(pessoas)
    }
 })


export default router