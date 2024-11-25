const Controller = require("./Controller.js");
const PessoaServices = require("../services/PessoaServices.js");

const pessoaServices = new PessoaServices();

class PessoaController extends Controller {
  constructor() {
    super(pessoaServices);
  }
  async pegaMatriculasAtivas(req, res) {
    const { estudante_id } = req.params;
    try {
      const listaMatriculas =
        await pessoaServices.pegaMatriculasAtivasPorEstudante(
          Number(estudante_id)
        );
      return res.status(200).json(listaMatriculas);
    } catch (err) {
      throw new Error(err);
    }
  }
  async pegaTodasAsMatriculas(req, res) {
    const { estudante_id } = req.params;
    try {
      const listaMatriculas =
        await pessoaServices.pegaTodasMatriculasPorEstudante(
          Number(estudante_id)
        );
      return res.status(200).json(listaMatriculas);
    } catch (err) {
      throw new Error(err);
    }
  }
  async pegaTodasAsPessoas(req, res) {
    try {
      const listaPessoas = await pessoaServices.pegaPessoasEscopoTodos();
      return res.status(200).json(listaPessoas);
    } catch (erro) {
      res.status(500).json({ erro: erro.message });
    }
  }
  async cancelaRegistroPessoaEMatriculas(req, res) {
    const { estudante_id } = req.params;
    try {
      const estudante = await pessoaServices.cancelaRegistroPessoaEMatriculas(
        Number(estudante_id)
      );
      return res
        .status(200)
        .json({ messagem: `Matrículas estudante ${estudante_id} cancelado` });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = PessoaController;
