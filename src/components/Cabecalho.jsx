export default function Cabecalho() {
  return (
    <>
      <header>
        <h1>Vite + React / Coded By - PF0670</h1>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/produtos">PRODUTOS</Link>
          </li>
          <li>
            <Link to="/editar/produtos/1">PRODUTO - 1</Link>
          </li>
          <li>
            <Link to="/editar/produtos/2">PRODUTO - 2</Link>
          </li>
          <li>
            <Link to="/editar/produtos/3">PRODUTO - 3</Link>
          </li>
          <li>
            <Link to="/editar/produtos/4">PRODUTO - 4</Link>
          </li>
        </ul>
      </header>
    </> 
  );
}
