"use client"

import "./index.css"

import Link from "next/link"
import axios from "axios"
import { useEffect, useState } from "react"

interface productsTypes {
  id: number
  nome_produto: string
  quantidade: number
  Valor: number
  created_at: Date
  modified_at: Date
}

export default function ListarProduto() {
  const [isClient, setIsClient] = useState(false)
  const [products, setProducts] = useState<productsTypes[]>([])  

  useEffect(() => {
    if (!isClient) {
      setIsClient(true)
    }

    const FetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/getProducts')
        setProducts(response.data)
      } catch (error) {
        console.error("Erro ao buscar produtos:", error)
        alert("Erro ao buscar produtos!")
      }
    }
    FetchProducts()
  }, [isClient])

  return (
    <div className="container">
      <div className="tabelaProdutos">
      <h1>Listando os produtos</h1>
        <div className="style-tabela">
          {products.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nome</th>
                  <th>Quantidade</th>
                  <th>Valor</th>
                  <th>Data de Cadastro</th>
                  <th>Data de Modificação</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.nome_produto}</td>
                    <td>{product.quantidade}</td>
                    <td>R$ {product.Valor}</td>
                    <td>{new Date(product.created_at).toLocaleDateString()}</td>
                    <td>{new Date(product.modified_at).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>Não há produtos disponíveis.</p>
          )}
        </div >
        <div>
          <Link href='/atualizarProduto'>
            <button className="btn">Atualizar Tabela</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
