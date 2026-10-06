import {cadastrar, excluir, listar, BuscarporIndice, atualizar} from "../repository/amostraRepository.js"
import { Amostra } from "../model/Amostra.js"

export function cadastrarAmostra(req, res){
    const {codigo, material, origem, resultado} = req.body;

    const amostra = new Amostra(codigo, material, origem, resultado);

    cadastrar(amostra)

    res.status(201).json(amostra);
}

export function ListarAmostras(req, res){
    const amostra = listar();

    res.status(200).json(amostra);
}

export function atualizarAmostra(req, res){
    //Aqui conferir pra ver se existe o objeto para ser atualizado
    const indice = Number(req.params.indice);

    const amostra = BuscarporIndice(indice);

    if(!amostra) {
        return res.status(404).sjon({
            mensagem: "Amostra não encontrado"
        })
    } 
    // Aqui ja substitui depois de confirma se existe
    const {codigo, material, origem, resultado } = req.body;

    if (codigo !== undefined){
        amostra.codigo = codigo;
    }

    if (material !== undefined){
        amostra.material = material;
    }

    if (origem !== undefined){
        amostra.origem = origem;
    }

    if (resultado !== undefined){
        amostra.resultado = resultado;
    }

    atualizar(indice, amostra);

    res.status(200).json(amostra)
}

export function deletarAmostra(req, res){
    const indice = Number(req.params.indice);

    const amostra = BuscarporIndice(indice);

    if(!amostra) {
        return res.status(404).sjon({
            mensagem: "Amostra não encontrado"
        })
    }
    
    excluir(indice);

    res.status(200).json({
        mensagem: "Amostra excluida com sucesso"
    });
}

export function BuscarAmostraPorId(req, res){
    const indice = Number(req.params.indice);

    const amostra = BuscarporIndice(indice);

    if(!amostra) {
        return res.status(404).sjon({
            mensagem: "Amostra não encontrado"
        });
    } 
    res.status(200).json(amostra)
}