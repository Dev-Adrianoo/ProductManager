import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function PUT(request: Request) {
  try {
    const url = new URL(request.url);
    
 
    const productId = url.pathname.split("/").pop()
    console.log(productId)

    if (!productId) {
      return new Response("ID do produto não fornecido", { status: 400 });
    }

    console.log(productId)

    const { nome_produto, quantidade, Valor } = await request.json();

   
    if (!nome_produto || quantidade == null || Valor == null) {
      return new Response("Dados incompletos", { status: 400 });
    }


    const product = await prisma.produtos.findUnique({
      where: { id: parseInt(productId) },
    });
    console.log("Dados recebidos:", {nome_produto, Valor});

    if (!product) {
      return new Response("Produto não encontrado", { status: 404 });
    }


    const updatedProduct = await prisma.produtos.update({
      where: { id: parseInt(productId) },
      data: {
        nome_produto: nome_produto,
        quantidade: quantidade,
        Valor: Valor,
      },
    });
    console.log(productId)


    // Retornar a resposta com o produto atualizado
    return new Response(JSON.stringify(updatedProduct), { status: 200 });

  } catch (error: unknown) {
    
    if (error instanceof Error) {
      console.log(error.message);
      return new Response("Erro ao atualizar produto", { status: 500 });
    }
    console.error(error);
    return new Response("Erro desconhecido ao atualizar produto", { status: 500 });
  }
}
