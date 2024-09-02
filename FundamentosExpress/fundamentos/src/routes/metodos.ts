import Router from 'express'

const router = Router()

const pessoas = [
    {nome: "Catia", idade: 21},
    {nome: "Mauro", idade: 44},
    {nome: "Leticia", idade: 22},
]

router.get("/", (req, res) => {
    res.status(200).send(pessoas)
})

router.get("/:id", (req, res) => {
    const indice = +req.params.id
    if (indice >= 0 && indice <= pessoas.length) {
        res.status(200).send(pessoas[indice])
    } else {
        res.status(204).send(pessoas)
    }
})

export default router