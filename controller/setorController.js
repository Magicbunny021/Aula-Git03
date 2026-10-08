import {cadastrar, excluir, listar, BuscarporIndice, atualizar} from "../repository/setorRepository.js"
import { Setor } from "../model/Setor.js"

export function cadastrarSetor(req, res){
    const {nome, sigla, responsavel, ramal} = req.body;

    const setor = new Setor(nome, sigla, responsavel, ramal);

    cadastrar(setor)

    res.status(201).json(setor);
}

export function ListarSetores(req, res){
    const setor = listar();

    res.status(200).json(setor);
}

export function atualizarSetor(req, res){

    const indice = Number(req.params.indice);

    const setor = BuscarporIndice(indice);

    if(!setor) {
        return res.status(404).sjon({
            mensagem: "Amostra não encontrado"
        })
    } 
    // Aqui ja substitui depois de confirma se existe
    const {nome, sigla, responsavel, ramal } = req.body;

    if (nome !== undefined){
        setor.nome = nome;
    }

    if (sigla !== undefined){
        setor.sigla = sigla;
    }

    if (responsavel !== undefined){
        setor.responsavel = responsavel;
    }

    if (ramal !== undefined){
        setor.ramal = ramal;
    }

    atualizar(indice, setor);

    res.status(200).json(setor)
}

export function deletarSetor(req, res){
    const indice = Number(req.params.indice);

    const setor = BuscarporIndice(indice);

    if(!setor) {
        return res.status(404).sjon({
            mensagem: "Setor não encontrado"
        })
    }
    
    excluir(indice);

    res.status(200).json({
        mensagem: "Setor excluida com sucesso"
    });
}

export function BuscarSetorPorId(req, res){
    const indice = Number(req.params.indice);

    const setor = BuscarporIndice(indice);

    if(!setor) {
        return res.status(404).sjon({
            mensagem: "Setor não encontrado"
        });
    } 
    res.status(200).json(setor)
}