const amostras = [];

export function cadastrar(Amostra){
    amostras.push(Amostra)
}

export function listar() {
    return amostras;
}

export function BuscarporIndice(indice){
    return amostras[indice]
}

export function atualizar(indice, amostra) {
    amostras[indice] = amostra
}


export function excluir(indice) {
    amostras.splice(indice, 1);
}























