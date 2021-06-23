const express = require('express');
const roteador = express();
const produtos = require('./controladores/produtos.js');

roteador.get('/produtos', produtos.consultarProdutos);

module.exports = roteador