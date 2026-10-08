const setores = [];

export function cadastrar(Setor){
    setores.push(Setor)
}

export function listar() {
    return setores;
}

export function BuscarporIndice(indice){
    return setores[indice]
}

export function atualizar(indice, Setor) {
    setores[indice] = Setor
}


export function excluir(indice) {
    setores.splice(indice, 1);
}























