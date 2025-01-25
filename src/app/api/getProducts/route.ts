
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(){
  try {
    const products = await prisma.produtos.findMany();
    return new Response(JSON.stringify(products), {status: 200});
  }catch (error){
    console.error(error);
    return new Response("Erro ao buscar o produto", {status: 500});
  }
}