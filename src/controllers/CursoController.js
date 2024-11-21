const Controller = require("./Controller.js");
const CursoServices = require("../services/CursoServices.js");
const { Op } = require("sequelize");
const cursoServices = new CursoServices();

class CursoController extends Controller {
  constructor() {
    super(cursoServices);
  }

  async pegaCursos(req, res) {
    const { data_inicial, data_final } = req.query;

    const where = {};
    // se os queries existirem, cria um prop
    data_inicial || data_final ? (where.data_inicio = {}) : null;
    // se data inicial existir, adiciona o prop gte com o valor
    data_inicial ? (where.data_inicio[Op.gte] = data_inicial) : null;
    // se existir data final, idem
    data_final ? (where.data_inicio[Op.lte] = data_final) : null;

    try {
      const listaCursos = await cursoServices.pegaTodosOsRegistros(where);
      return res.status(200).json(listaCursos);
    } catch (err) {
      return res.status(500).json({ erro: err.message });
    }
  }
}

module.exports = CursoController;
