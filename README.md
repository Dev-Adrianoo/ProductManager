<h1>Projeto Gestão de Estoque 📦 </h1>
<h2>Objetivo Do Projeto 🎯 </h2>
<p>"Desenvolver um sistema de gestão de estoque com funcionalidades para adicionar, remover, atualizar e listar produtos. O sistema permitirá o controle eficiente dos produtos armazenados, com a capacidade de registrar entradas e saídas de itens"</p>
<h2>Tecnologias Utilizadas 💻 </h2>
<ul> 
  <li>
    <strong><a href="https://nextjs.org/docs">Next.js</a></strong>: Framework baseado em React que oferece renderização do lado do cliente e do servidor, otimizando o desempenho da aplicação.</li>
  <li>
    <strong><a href="https://www.typescriptlang.org/pt/docs/">TypeScript</a></strong>: Superset do JavaScript que adiciona tipagem estática, ajudando a prevenir erros e tornando o código mais robusto e escalável.</li> 
  <li>
    <strong><a href="https://www.prisma.io/docs">Prisma</a></strong>: ORM (Object-Relational Mapping) que simplifica a interação com o banco de dados MySQL, facilitando operações como leitura, escrita e manipulação de dados.
  </li> 
  <li>
    <strong><a href="https://dev.mysql.com/doc/">MySQL</a></strong>: Banco de dados relacional utilizado para armazenar e gerenciar as informações da aplicação.
  </li> 
  <li>
    <strong><a href="https://axios-http.com/docs/intro">Axios</a></strong>: Biblioteca JavaScript para realizar requisições HTTP de forma simples e eficiente.
  </li>
  <li>
    <strong><a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS">CSS</a></strong>: Usado para estilizar a aplicação e criar uma interface visual atraente e funcional.</li> 
</ul>

<h2>Estrutura do Projeto 📂</h2>
<ul>
    <li><code>/public</code></li>
    <li><code>/app</code>
        <ul>
            <li><code>/api</code>
                <ul>
                    <li><code>/createProduct</code> - Rota para criar produtos</li>
                    <li><code>/deleteProduct</code> - Rota para remover produtos</li>
                    <li><code>/updateProduct</code> - Rota para atualizar produtos</li>
                    <li><code>/getProduct</code> - Rota para listar produtos</li>
                </ul>
            </li>
            <li><code>/atualizarProduto</code> - Página para atualizar produtos</li>
            <li><code>/criarProduto</code> - Página de criação de novos produtos</li>
            <li><code>/listarProduto</code> - Página para listar produtos</li>
            <li><code>/removerProduto</code> - Página para remover produtos</li>
        </ul>
    </li>
    <li><code>/global.css</code> - Estilos globais da aplicação</li>
</ul>

<h2>Configuração com Prisma 🛠️</h2>
<p>O <strong>Prisma</strong> foi configurado para gerenciar o banco de dados <strong>MySQL</strong>. Ele facilita a criação de esquemas e a realização de operações no banco de dados.</p>

<pre><code>model Produtos {
  id          Int      @id @default(autoincrement())
  nome_produto String
  quantidade   Int
  valor        Float
  created_at   DateTime @default(now())
  modified_at  DateTime @updatedAt
}
</code></pre>

<h2>Como Executar o Projeto 🏃‍♂️</h2>
<ol>
    <li>Clone o repositório:
        <pre><code>git clone https://github.com/Dev-Adrianoo/ProductManager</code></pre>
    </li>
    <li>Instale as dependências:
        <pre><code>npm install</code></pre>
    </li>
    <li>Configure o arquivo <code>.env</code> com a URL do seu banco de dados:</li>
    <pre><code>DATABASE_URL="mysql://usuario:senha@localhost:3306/nome_do_banco"
</code></pre>
    <li>Gere o cliente Prisma:
        <pre><code>npx prisma generate</code></pre>
    </li>
    <li>Rode as migrações:
        <pre><code>npx prisma migrate dev</code></pre>
    </li>
    <li>Inicie o servidor:
        <pre><code>npm run dev</code></pre>
    </li>
    <li>Acesse a aplicação no navegador:</li>
    <p><code>http://localhost:3000</code></p>
</ol>

<h2>Deseja contribuir ? 🤝 </h2>
<ol>
    <li>Faça um fork deste repositório.</li>
    <li>Crie um branch para sua feature/bugfix:
        <pre><code>git checkout -b minha-feature</code></pre>
    </li>
    <li>Faça o commit das suas alterações:
        <pre><code>git commit -m "Minha contribuição"</code></pre>
    </li>
    <li>Envie as alterações para o branch remoto:
        <pre><code>git push origin minha-feature</code></pre>
    </li>
    <li>Abra um Pull Request.</li>
</ol>

<h2>Autor 👨‍💻</h2>
<p>Este projeto foi desenvolvido por <strong>Adriano Souza</strong>. Caso tenha dúvidas ou sugestões, sinta-se à vontade para entrar em contato.</p>

<h2>Licença 📜</h2>
<p>Este projeto é licenciado sob a <strong>MIT License</strong>.</p>


