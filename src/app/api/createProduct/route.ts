import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request){
  try {
    const {name, quantity, value} = await request.json();

    const newProduct = await prisma.produtos.create({
      data: {
        nome_produto: name,
        quantidade: quantity,
        Valor: value,
      }
    });

    return new Response(JSON.stringify(newProduct), {
      status: 201,
    });
  } catch(error: unknown){
    if(error instanceof Error){
      console.log(error.message)
      return new Response("Erro ao criar produto", {status: 500});
    }
    console.error(error);
    return new Response("Erro desconhecido ao criar produto", {status: 500})
  }
}

export async function GET(){
  try {
    const products = await prisma.produtos.findMany();
    return new Response(JSON.stringify(products), {status: 200});
  }catch (error){
    
    console.log(error);
    return new Response("Erro ao buscar o produto", {status: 500});
  }
}