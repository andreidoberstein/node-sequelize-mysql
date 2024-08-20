(async () => {
  const database = require('./config/db');
  const Produto = require('./models/Produto');
  const Fabricante = require('./models/Fabricante')

  try {
    const resultado = await database.sync();
    console.log(resultado);
  } catch (error) {
    console.log(error);
  }
  const resultadoCreate = await Fabricante.create({
      nome: 'mouse',
      preco: 10,
      descricao: 'Um mouse USB bonitão'
    })
    // console.log(resultadoCreate);

  // const resultadoCreate = await Produto.create({
  //   nome: 'mouse',
  //   preco: 10,
  //   descricao: 'Um mouse USB bonitão'
  // })
  // // console.log(resultadoCreate);

  // const produtos = await Produto.findAll();
  // // console.log(produtos);

  // const produto = await Produto.findByPk(1);
  // // console.log(produto)

  // produto.nome = "Mouse Top";

  // const resultadoSave = await produto.save();
  // console.log(resultadoSave);

  // //assim
  // Produto.destroy({ where: { id: 1 } });

  // //ou assim
  // //const produto = await Produto.findByPk(1);
  // produto.destroy();
})();