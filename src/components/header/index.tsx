
import Link from "next/link"
import "./index.css"



export function Header(){
  return(
    <header className="Header">
        <h1>Gestao de Estoque</h1>
      <nav>
        <Link href='/criarProduto'>
        <button className="btn btn-adicionar">Adicionar Produto</button>
        </Link>
        <Link href='/listarProduto'>
         <button className="btn btn-adicionar">Listar Produto</button>
         </Link>
      </nav>
    </header>
  )
}