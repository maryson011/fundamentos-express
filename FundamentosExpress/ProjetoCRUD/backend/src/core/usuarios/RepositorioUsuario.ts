import Senha from "../shared/Senha";
import Usuario from "./Usuario";

export default class RepositorioUsuario {
    usuarios: Usuario[] = [
        new Usuario("maria@email.com", "1234"),
        new Usuario("pedro@email.com", "1234"),
        new Usuario("ana@email.com", "1234"),
    ]

    encontrarIndice(email: string) {
        const i = this.usuarios.findIndex(usr=>usr.email===email)
        return i
    }

    usuarioExiste(email: string) {
        return this.encontrarIndice(email) >= 0
    }

    loginCorreto(email:string, senha: string) {
        const i = this.encontrarIndice(email)
        const senhaEstaCorreta = Senha.compara(senha, this.usuarios[i]?.senha)
        return senhaEstaCorreta
    }
}