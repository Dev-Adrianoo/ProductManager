Gerenciador de Produtos

Este projeto é uma aplicação web desenvolvida com Next.js para gerenciar produtos. Ela utiliza MySQL como banco de dados, gerenciado pelo Prisma ORM, permitindo operações como listar, atualizar e remover produtos.

Estrutura do Projeto

A estrutura do projeto está organizada da seguinte forma:

/app
  /api
    /getProducts      --> Rota para buscar produtos
    /updateProduct    --> Rota para atualizar produtos
    /deleteProduct    --> Rota para remover produtos
  /atualizarProduto   --> Página para atualizar produtos
  /removerProduto     --> Página para remover produtos
  /listarProduto      --> Página para listar produtos
/public
  /images             --> Imagens estáticas
/styles
  /global.css         --> Estilos globais da aplicação

Detalhe sobre a pasta [ID]

Dentro da rota /updateProduct, a pasta [ID] é usada para capturar o identificador do produto que será atualizado. Este identificador é utilizado para realizar operações específicas no banco de dados com base no ID fornecido na URL.

Tecnologias Utilizadas

Next.js: Framework React para renderização do lado do cliente e do servidor.

TypeScript: Superset do JavaScript para tipagem estática.

Prisma: ORM para interação com o banco de dados MySQL.

MySQL: Banco de dados relacional utilizado para armazenar os dados da aplicação.

Axios: Biblioteca para requisições HTTP.

CSS: Estilização global da aplicação.

Banco de Dados

Configuração com Prisma

O Prisma foi configurado para gerenciar o banco de dados MySQL. Ele facilita a criação de esquemas e a realização de operações no banco de dados. O arquivo prisma/schema.prisma contém a definição do modelo do banco de dados.

Exemplo de um modelo no Prisma:

model Produtos {
  id          Int      @id @default(autoincrement())
  nome_produto String
  quantidade   Int
  Valor        Float
  created_at   DateTime @default(now())
  modified_at  DateTime @updatedAt
}

Conexão com o Banco de Dados

No arquivo .env, a URL de conexão com o banco de dados é configurada da seguinte maneira:

DATABASE_URL="mysql://usuario:senha@localhost:3306/nome_do_banco"

Para aplicar as mudanças no banco de dados após alterar o esquema:

npx prisma migrate dev --name nome_da_migracao

Comandos Prisma

Gerar cliente Prisma:

npx prisma generate

Visualizar o banco de dados:

npx prisma studio

Funcionalidades

1. Listar Produtos

Descrição: Lista todos os produtos disponíveis no banco de dados.

Rota: /listarProduto

Método HTTP: GET

2. Atualizar Produto

Descrição: Atualiza informações de um produto específico pelo ID.

Rota: /updateProduct/[ID]

Método HTTP: PUT

3. Remover Produto

Descrição: Remove um produto do banco de dados pelo ID.

Rota: /deleteProduct/[ID]

Método HTTP: DELETE

Como Executar o Projeto

Pré-requisitos

Node.js instalado.

Banco de dados MySQL configurado.

Passos

Clone o repositório:

git clone https://github.com/Dev-Adrianoo/ProductManager

Instale as dependências:

npm install

Configure o arquivo .env:
Crie um arquivo .env na raiz do projeto com o seguinte conteúdo:

DATABASE_URL="mysql://usuario:senha@localhost:3306/nome_do_banco"

Gere o cliente Prisma:

npx prisma generate

Rode as migrações:

npx prisma migrate dev

Inicie o servidor:

npm run dev

Acesse a aplicação:
Abra o navegador e vá para...  (em progresso).

Como Contribuir

Faça um fork deste repositório.

Crie um branch para sua feature/bugfix:

git checkout -b minha-feature

Faça o commit das suas alterações:

git commit -m "Minha contribuição"

Envie as alterações para o branch remoto:

git push origin minha-feature

Abra um Pull Request.

Autor

Este projeto foi desenvolvido por [Adriano Souza]. Caso tenha dúvidas ou sugestões, sinta-se à vontade para entrar em contato.

Licença

Este projeto é licenciado sob a MIT License.
