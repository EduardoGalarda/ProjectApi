// import repoCliente from "../repositories/sqlite/repository.cliente.sqlite.js";
import repoCliente from "../repositories/prisma/repository.cliente.prisma.js";

async function Listar(nome) {
  const clientes = await repoCliente.Listar(nome);
  return clientes;
}

async function Editar(id_cliente, nome, endereco, cidade) {
  const cliente = await repoCliente.Editar(id_cliente, nome, endereco, cidade);
  return cliente;
}

async function Inserir(nome, endereco, cidade) {
  
  // CONDICIONAIS DE ERROS
  if (!nome) throw "Informe o nome do cliente";
  if (nome.length < 3) throw "O nome do cliente deve conter mais do que três caracteres";
  if (!endereco) throw "Informe o endereço do cliente";
  if (!cidade) throw "Informe a cidade do cliente";

  const cliente = await repoCliente.Inserir(nome, endereco, cidade);
  return cliente;
}

async function Excluir(id_cliente) {
  const cliente = await repoCliente.Excluir(id_cliente);
  return cliente;
}

export default { Listar, Editar, Inserir, Excluir };
