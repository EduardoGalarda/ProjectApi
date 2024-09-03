import { Router } from "express";
import controllerCliente from "./controllers/controller.client.js"

const router = Router();

router.get("/clientes", controllerCliente.Listar);
router.post("/clientes", controllerCliente.Inserir);
router.put("/clientes/:id_cliente", controllerCliente.Editar);
router.delete("/clientes/:id_cliente", controllerCliente.Excluir);

export default router;
