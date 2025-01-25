
"use client"

import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useRouter } from 'next/navigation'

interface ProductType {
  id: number
  nome_produto: string
  quantidade: number
  Valor: number
  created_at: Date
  modified_at: Date
}

export default function AtualizarProduto() {
  const { id } = useParams() 
  const router = useRouter()
  const [product, setProduct] = useState<ProductType | undefined>(undefined)

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/api/getProducts?id=${id}`)
          setProduct(response.data) 
        } catch (error) {
          console.error('Erro ao buscar produto:', error)
          alert('Erro ao buscar produto!')
        }
      }
      fetchProduct()
    }
  }, [id])

  const handleUpdate = async (e: React.FormEvent) => {

    e.preventDefault()
    
    if (product) {
      try {
        await axios.put(`http://localhost:3000/api/updateProduct/${id}`, {
         nome_produto: product.nome_produto,
         quantidade: product.quantidade,
         Valor: product.Valor,
        });
        
        alert('Produto atualizado com sucesso!')
        router.push('/atualizarProduto')
      } catch (error) {
        console.error('Erro ao atualizar produto:', error)
        alert('Erro ao atualizar produto!')
      }
    }
  }

  if (!product) return <div>Carregando...</div>

  return (
    <div className="container">
      <h1>Atualizar Produto</h1>
      <form onSubmit={handleUpdate}>
        <div>
          <label htmlFor="nome_produto">Nome do Produto</label>
          <input
            type="text"
            id="nome_produto"
            value={product.nome_produto}
            onChange={(e) => setProduct({ ...product, nome_produto: e.target.value })}
            required
          />
        </div>
        <div>
          <label htmlFor="quantidade">Quantidade</label>
          <input
            type="number"
            id="quantidade"
            value={product.quantidade}
            onChange={(e) => setProduct({ ...product, quantidade: +e.target.value })}
            placeholder='quantidade'
            required
          />
        </div>
        <div>
          <label htmlFor="Valor">Valor</label>
          <input
            type="number"
            id="Valor"
            value={product.Valor}
            onChange={(e) => setProduct({ ...product, Valor: +e.target.value })}
            placeholder='valor'
            required
          />
        </div>
        <button type="submit">Atualizar</button>
      </form>
    </div>
  )
}
