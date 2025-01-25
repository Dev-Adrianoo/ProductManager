import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  if (!id) {
    return new Response("ID do produto não fornecido", { status: 400 });
  }

  try {
    const product = await prisma.produtos.findUnique({
      where: { id: parseInt(id) },
    });

    if (!product) {
      return new Response("Produto não encontrado", { status: 404 });
    }

    await prisma.produtos.delete({
      where: { id: parseInt(id) },
    });

    return new Response("Produto removido com sucesso", { status: 200 });

  } catch (error) {
    console.error(error);
    return new Response("Erro ao remover produto", { status: 500 });
  }
}