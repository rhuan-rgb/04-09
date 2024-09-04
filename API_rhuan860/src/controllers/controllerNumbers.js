module.exports = class controllerNumbers {
  static async checkPar(req, res) {
    const { numero } = req.body;
    if (typeof  numero  !== "number") {
      res
        .status(400)
        .json({
          message:
            "Valor inválido, digite um número (use ponto em vez da vírgula para decimais)",
        });
    }
    if ( numero  % 2 === 0) {
      res.send({ message: `o número ${numero} é par` });
    } else {
      res.send({ message: `o número ${numero} é ímpar` });
    }
  }

  static async checkPrimo(req, res) {
    const { numero } = req.body;
    if (typeof { numero } !== Number) {
      res
        .status(400)
        .json({
          message:
            "Valor inválido, digite um número (use ponto em vez da vírgula para decimais)",
        });
    }

    let var_checkPrimo;

    //checa se o numero não é primo, retornando "true"
    for (let i = 2; i <= Math.sqrt({ numero }); i++) {
      if ({ numero } % 2 === 0) {
        var_checkPrimo = true;
      }
    }

    //caso o número seja primo, a variavel var_checkPrimo não terá nada dentro, logo será "false"
    if (!var_checkPrimo) {
      res.send({ message: `o número ${numero} é primo` });
    }
  }
}
