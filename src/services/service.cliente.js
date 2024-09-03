import repoCliente from "../repositories/sqlite/repository.cliente.sqlite.js";

async function Listar(nome) {
  const clientes = await repoCliente.Listar(nome);
  return clientes;
}

async function Editar(id_cliente, nome, endereco, cidade) {
  const cliente = await repoCliente.Editar(id_cliente, nome, endereco, cidade);
  return cliente;
}

async function Inserir(nome, endereco, cidade) {
  const cliente = await repoCliente.Inserir(nome, endereco, cidade);
  return cliente;
}

async function Excluir(id_cliente) {
  const cliente = await repoCliente.Excluir(id_cliente);
  return cliente;
}

export default { Listar, Editar, Inserir, Excluir };
