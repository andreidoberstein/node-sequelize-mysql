(async () => {
  const database = require('./config/db');
  const Produto = require('./models/Produto');
  const Fabricante = require('./models/Fabricante');

  try {
    Produto.belongsTo(Fabricante, {
      constraint: true,
      foreignKey: 'idFabricante'
    });


    Fabricante.hasMany(Produto, {
      foreignKey: 'idFabricante'
    });

    const resultado = await database.sync({ force: true });
    //console.log(resultado);

    const resultadoCreate = await Fabricante.create({
      nome: 'Apple'
    })
    const idFabricante = resultadoCreate.id;

    const resultadoCreate2 = await Produto.create({
      nome: 'iPhone',
      preco: 5000,
      descricao: 'Smartphone da maçã',
      idFabricante: idFabricante
    })
    //console.log(resultadoCreate2);

    // const produto = await Produto.findByPk(resultadoCreate2.id, { include: Fabricante });
    // console.log(produto);
    // const fabricante = await produto.getFabricante();
    // console.log(fabricante);

    // const produto = await Produto.findByPk(resultadoCreate2.id);
    // console.log(produto);
    // const fabricante = await produto.getFabricante();
    // console.log(fabricante);


    const fabricante = await Fabricante.findByPk(resultadoCreate.id, { include: Produto });
    //console.log(fabricante);
    const produtos = await fabricante.getProdutos();
    console.log(produtos);

  } catch (error) {
    console.log(error);
  }
})();