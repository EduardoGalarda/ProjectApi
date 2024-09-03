import { query } from "../../database/sqlite.js";

async function Listar(nome) {
  let filtro = [];
  let sql = "select * from cliente ";

  if (nome) {
    sql = sql + "where nome like ? ";
    filtro.push("%" + nome + "%");
  }
  return await query(sql, filtro);
}

async function Editar(id_cliente, nome, endereco, cidade) {
  let sql =
    "update cliente set nome=?, endereco=?, cidade=? where id_cliente=?";
  await query(sql, [nome, endereco, cidade, id_cliente]);
  return { id_cliente };
}

async function Inserir(nome, endereco, cidade) {
  let sql =
    "insert into cliente (nome, endereco, cidade) values(?, ?, ?) returning id_cliente ";
  const cliente = await query(sql, [nome, endereco, cidade]);
  return cliente[0];
}

async function Excluir(id_cliente) {
  let sql = "delete from cliente where id_cliente = ? ";
  await query(sql, [id_cliente]);
  return { id_cliente };
}

export default { Listar, Editar, Inserir, Excluir };
