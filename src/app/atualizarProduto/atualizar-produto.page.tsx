"use client"

import "./index.css"

import Link from "next/link"
import axios from "axios"
import { useEffect, useState } from "react"

interface ProductType {
  id: number
  nome_produto: string
  quantidade: number
  Valor: number
  created_at: Date
  modified_at: Date
}

export default function GerenciarProdutos() {
  const [products, setProducts] = useState<ProductType[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/getProducts')
        setProducts(response.data)
      } catch (error) {
        console.error("Erro ao buscar produtos:", error)
        alert("Erro ao buscar produtos!")
      }
    }
    fetchProducts()
  }, [])

  const handleRemove = async (id: number) => {
    
    try {
      await axios.delete(`http://localhost:3000/api/deleteProduct/${id}`)
      setProducts((prev) => prev.filter((product) => product.id !== id))
      alert("Produto removido com sucesso!")
    } catch (error) {
      console.error("Erro ao remover produto:", error)
      alert("Erro ao remover produto!")
    }
  }

  return (
    <div className="container">
      <div className="tabelaProdutos">
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
                  <th>Ações</th>
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
                    <td className="botoes">
                      <Link href={`/atualizarProduto/${product.id}`}>
                        <button className="btn">Atualizar</button>
                      </Link>
                      <button
                        className="btn"
                        onClick={() => handleRemove(product.id)}
                      >
                        Remover
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="no-products">Não há produtos disponíveis para gerenciar.</p>
          )}
        </div>
      </div>
    </div>
  )
}
