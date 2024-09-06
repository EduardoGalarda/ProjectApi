import prismaClient from "../../database/prismaclient.js";

async function Listar(nome) {

  let filtro = {};

  if(nome){
    filtro.where = {
      nome: {
        contains: nome
      }
    }
  }

  const clientes = await prismaClient.cliente.findMany(filtro);

  return clientes;
}

async function Editar(id_cliente, nome, endereco, cidade) {
  const cliente = await prismaClient.cliente.update({
    where:{
      id_cliente: Number(id_cliente)
    },
    data: {
      nome: nome,
      endereco: endereco,
      cidade: cidade,
    }
  });

  return cliente;
}

async function Inserir(nome, endereco, cidade) {
  const cliente = await prismaClient.cliente.create({
    data: {
      nome: nome,
      endereco: endereco,
      cidade: cidade,
    }
  });

  return cliente;
}

async function Excluir(id_cliente) {
  const cliente = await prismaClient.cliente.delete({
    where:{
      id_cliente: Number(id_cliente)
    }
  });

  return cliente;
}

export default { Listar, Editar, Inserir, Excluir };
