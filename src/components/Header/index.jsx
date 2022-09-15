import * as React from 'react';
import "../../Styles/header.css"
//import logoUfal from '../../assets/ufal-sigla-branca-fundo-transparente.png'


import { FaRegBell, FaUserPlus} from 'react-icons/fa';


function Header() {
  
  
  return (
    
    <>
      <header className="header">
        <div className="header__background">
          <div className="header__content">
            <h4>Nome da Página</h4>
            <div className="header__inputIcon">
              <i className="fa fa-search icon fa-lg fa-fw" aria-hidden="true"></i>
              <label htmlFor="search"></label>
              <input type="text" name="search" placeholder="o que você está buscando?" className="header__searchBar" />
            </div>
              {/*<FaSearch size={18} />*/}
            <div className="icon">
              <FaRegBell size={24}/>
              <FaUserPlus size={24}/>
            </div>
            <div className="profile">
              <div className="profile-title">
                <p>Nome Completo</p>
                <p>email@email.com</p>
              </div>
              <img src="https://www.github.com/charliebellow.png" alt="favicon" className="profile-photo"/>
            </div>
          </div>
        </div>
        <div className="caixa">
      {/*<img src={logoUfal} alt="logo UFAL" className="logo"/>*/}
          </div>

      </header>
    
    </>
      
    
  )
}

export default Header;