import express from "express"
import { cadastrarSetor, deletarSetor, ListarSetores, atualizarSetor, BuscarSetorPorId } from "../controller/setorController.js"

const router = express.Router();

router.post("/", cadastrarSetor);
router.get("/", ListarSetores)
router.patch("/:indice", atualizarSetor)
router.delete("/:indice", deletarSetor)
router.get("/:indice", BuscarSetorPorId)

export default router;