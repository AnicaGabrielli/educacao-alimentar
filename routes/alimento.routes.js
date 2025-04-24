// routes/alimento.routes.js
import { listar, buscar, criar, atualizar, deletar, buscarPorCategoria } from "../controller/alimentoController.js";

const router = Router();

router.get("/", listar);
router.get("/categoria/:categoria", buscarPorCategoria);
router.get("/:id", buscar);
router.post("/", criar);
router.put("/:id", atualizar);
router.delete("/:id", deletar);

export default router;
