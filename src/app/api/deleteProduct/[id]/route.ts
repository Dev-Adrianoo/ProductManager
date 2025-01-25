import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function DELETE(request: Request, context: { params: { id: string } }) {
  const { id } = context.params; // Use "context.params" para acessar o "id"

  if (!id) {
    return new Response("ID do produto não fornecido", { status: 400 });
  }

  try {
    const product = await prisma.produtos.findUnique({
      where: { id: parseInt(id, 10) }, // Certifique-se de usar "parseInt" corretamente
    });

    if (!product) {
      return new Response("Produto não encontrado", { status: 404 });
    }

    await prisma.produtos.delete({
      where: { id: parseInt(id, 10) },
    });

    return new Response("Produto removido com sucesso", { status: 200 });

  } catch (error) {
    console.error("Erro ao remover produto:", error); // Melhorar o log para depuração
    return new Response("Erro ao remover produto", { status: 500 });
  }
}
