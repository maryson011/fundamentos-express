import Router from 'express'

const router = Router()

router.get("/produtos", (req, res) => {
    res.send("Aqui existe produtos")
})

router.get("/produtos/cozinha", (req, res) => {
    const prods = ["Colher", "Garfo", "Panela", "Detergente"]
    res.send(prods)
})
router.get("/produtos/banheiro", (req, res) => {
    const prods = ["Sabonete", "Escova de Dentes", "Chuveiro", "Espelho"]
    res.send(prods)
})

export default router