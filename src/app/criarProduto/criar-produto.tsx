"use client"

import axios from "axios"
import React, { useState, useEffect } from "react"

export default function CriarProduto(){
  
  const [name, setName] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(0)
  const [value, setValue] = useState<number>(0)


  const [isClient, setIsClient] = useState(false) 
  
    useEffect(() => {
      if(!isClient){
        setIsClient(true)
      }
    }, [isClient])


    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
      if(!name || quantity <= 0 || value <= 0){
        alert("Por favor, preencha todos os campos corretamente.");
        return
      }

    try {
      const response = await axios.post('http://localhost:3000/api/createProduct', {
        name, 
        quantity,
        value,
      });
      
      alert("Produto Criado com sucesso!");
      console.log(response.data);

    }catch(error){
      if(axios.isAxiosError(error))
      console.error(error.response?.data || "Erro ao criar produto.");
      alert("Erro ao criar produto!")
    }
  }

  return (
    <div className="containerProduto">   

   <form onSubmit={handleSubmit}> 
     <div className="AdicionarProduto">
       <h1>Adicionar Produto</h1>
      Nome <input type="text" 
       value={name} 
       onChange={(e) => setName(e.target.value)} placeholder="Nome Produto..."
        required />

      Quantidade <input type="number" 
       value={quantity} 
       onChange={(e) => setQuantity(Number(e.target.value) || 0)} placeholder="Quantidade Produto..." 
       required />

      Valor <input type="number"
        value={value} 
        onChange={(e) => setValue(Number(e.target.value) || 0)} placeholder="Valor Produto..." 
        required />
       <div className="secoesBotoes">
       <button className="btn">Adicionar</button>
       </div>
     </div>
   </form>
    </div>
  )
}