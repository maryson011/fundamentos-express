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

    alterarPorCodigo(codigo: string, nome?: string, preco?: number) {
        const indice = this.itens.findIndex((produto) => produto.codigo === codigo)
        if (indice >= 0 && indice < this.itens.length) {
            if (nome) {
                this.itens[indice].nome = nome
            }
            if (preco) {
                this.itens[indice].preco = preco
            }
        }
    }
}