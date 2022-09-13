function Header() {
  
  
  return (
    
    <>
      <header className="header">
        <h4>Nome da Página</h4>
        <label htmlFor="search"></label>
        <input type="text" name="search" placeholder="o que você está buscando?" />
        <div className="icon">sino</div>
        <div className="icon">add</div>
        <div className="perfil">
          <div>
            <div>Nome Completo</div>
            <div>email@email.com</div>
          </div>
          <img src="#" alt="favicon" className=""/>
        </div>

      </header>
    
    </>
      
    
  )
}

export default Header;