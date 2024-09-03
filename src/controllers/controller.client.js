import serviceCliente from "../services/service.cliente.js";

async function Listar(req, res) {
  const nome = req.query.nome;
  const clientes = await serviceCliente.Listar(nome);

  res.status(200).json(clientes);
}

async function Editar(req, res) {
  const id_cliente = req.params.id_cliente;
  const { nome, endereco, cidade } = req.body;
  const cliente = await serviceCliente.Editar(id_cliente, nome, endereco, cidade);

  res.status(200).json(cliente);
}

async function Inserir(req, res) {
  const { nome, endereco, cidade } = req.body;
  const cliente = await serviceCliente.Inserir(nome, endereco, cidade);

  res.status(201).json(cliente);
}

async function Excluir(req, res) {
  const id_cliente = req.params.id_cliente;
  const cliente = await serviceCliente.Excluir(id_cliente);

  res.status(200).json(cliente);
}

export default { Listar, Editar, Inserir, Excluir };
