import Produto from "./Produto";

export default class RepositorioProduros {
    itens: Produto[] = [
        new Produto("Colher", 5.29),
        new Produto("Mouse", 20.90),
        new Produto("Fone", 200.90)
    ]

    obterTodos() {
        return this.itens
    }
}