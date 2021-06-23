const dados = require('../banco/data.json');
const { escreverNoArquivo, lerArquivo } = require('../bibliotecaFS');

function consultarProdutos(req, res) {
  const produtos = dados.produtos;
  const precoInicial = Number(req.query.precoInicial);
  const precoFinal = Number(req.query.precoFinal);
  const categoria = dados.produtos.categoria;

  if(precoInicial === NaN || precoFinal === NaN) {
    res.status(400);
    res.json({
      erro: 'Por favor informe um preço válido.'
    })
  } else if(precoInicial > precoFinal) {
    res.status(400)
    res.json({
      erro: 'O preço final precisa ser maior que o preço inicial.'
    })
  } else if(precoInicial && precoFinal) {
    const produtosFiltradosPorPreco = produtos.filter(produto => {
      if(produto.preco >= precoInicial && produto.preco <= precoFinal && produto.estoque > 0) {
        return produto;
      };
    });
    res.status(200);
    res.json(produtosFiltradosPorPreco);
  } else if(precoInicial && precoFinal && categoria) {
    const produtosFiltrados = produtos.filter(produto => {
      if(produto.categoria === categoria && produto.preco >= precoInicial && produto.preco <= precoFinal && produto.estoque > 0) {
        
      }
    })
  }
}

module.exports = {
  consultarProdutos
}