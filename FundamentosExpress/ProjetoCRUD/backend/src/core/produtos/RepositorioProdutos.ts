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

    novo(nome: string, preco: number) {
        const novoProduto = new Produto(nome, preco)
        this.itens.push(novoProduto)
    }

    obterProCodigo(codigo: string) {
        const produto = this.itens.find((produto) => {return produto.codigo === codigo})
        return produto
    }
}