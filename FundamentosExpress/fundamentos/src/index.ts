import express from 'express'
const app = express()
const port = 8080

app.use("/", (req, res) => {
    res.send("<h1>Hello Word!</h1>")
})

app.listen(port, () => {
    console.log(`Server running in port ${port}!!`)
})