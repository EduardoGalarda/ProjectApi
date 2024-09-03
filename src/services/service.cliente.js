import { query } from "../database/sqlite.js";

async function Listar(nome) {
  return await query("select * from cliente", []);
}

async function Editar(id_cliente, nome, endereco, cidade) {
  return { id_cliente, nome, endereco, cidade };
}

async function Inserir(nome, endereco, cidade) {
  return { id_cliente: 4, nome, endereco, cidade };
}

async function Excluir(id_cliente) {
  return { id_cliente };
}

export default { Listar, Editar, Inserir, Excluir };
