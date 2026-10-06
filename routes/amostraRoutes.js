import express from "express"
import { atualizarAmostra, cadastrarAmostra, deletarAmostra, ListarAmostras, BuscarAmostraPorId } from "../controller/amostraController.js"

const router = express.Router();

router.post("/", cadastrarAmostra);
router.get("/", ListarAmostras)
router.patch("/:indice", atualizarAmostra)
router.delete("/:indice", deletarAmostra)
router.get("/:indice", BuscarAmostraPorId)

export default router;