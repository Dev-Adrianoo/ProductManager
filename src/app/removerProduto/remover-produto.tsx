"use client"

import { useState } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function RemoverProduto() {
  const [productId, setProductId] = useState<string>("")
  const router = useRouter()

  const handleRemove = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!productId) {
      alert("Por favor, insira o ID do produto")
      return
    }

    try {

      await axios.delete(`http://localhost:3000/api/deleteProduct/${productId}`)
      alert("Produto removido com sucesso!")
      router.push("/listarProduto")
    } catch (error) {
      console.error("Erro ao remover produto:", error)
      alert("Erro ao remover produto!")
    }
  }

  return (
    <div className="containerProduto">
      <form onSubmit={handleRemove}>
        <div className="RemoverProduto">
          <h1>Remover produto</h1>

          <input
            type="text"
            placeholder="ID do Produto..."
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            required
          />
          <div className="botoes">
            <button className="btn" type="submit">
              Remover
            </button>
            <Link href="/listarProduto">
              <button className="btn" type="button">
                Listar Produto
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  )
}
