const { Router } = require("express");
const CursoController = require("../controllers/CursoController.js");

const cursoController = new CursoController();

const router = Router();

router.get("/categorias", (req, res) => cursoController.pegaTodos(req, res));
router.get("/categorias/:id", (req, res) =>
  cursoController.pegaUmPorId(req, res)
);
router.post("/categorias", (req, res) => cursoController.criaNovo(req, res));
router.put("/categorias/:id", (req, res) => cursoController.atualiza(req, res));
router.delete("/categorias/:id", (req, res) =>
  cursoController.exclui(req, res)
);

module.exports = router;
