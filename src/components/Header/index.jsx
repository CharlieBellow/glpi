import * as React from 'react';
//import { Link } from 'react-router-dom';
import "../../Styles/base.css"
import "../../Styles/header.css"


import { FaRegBell, FaUserPlus, FaSearch} from 'react-icons/fa';


function Header() {
  
  
  return (
    
    <>
      <header className="header">
        <div className="header__background">
          <div className="header__content">
            <h4>Nome da Página</h4>
            <div className="header__inputIcon">
              <FaSearch size={18} className="header__iconSearch"/>
              <label htmlFor="search"></label>
              <input type="text" name="search" placeholder="o que você está buscando?" className="header__searchBar" />
            </div>
            <div className="header__icons">
              <div className="header__iconsChild">

              <FaRegBell size={24}/>
              </div>
              <div className="header__iconsChild">
              <FaUserPlus size={24}/>

              </div>
            </div>
            <div className="profile">
              <div className="profile-title">
                <p
                    className="profile__title">Nome Completo
                  {/*<Link to="/Perfil"*/}
                  {/*</Link>*/}
                </p>
                <p>email@email.com</p>
              </div>
              <img src="https://www.github.com/charliebellow.png" alt="favicon" className="profile-photo"/>
            </div>
          </div>
        </div>
        <div className="caixa">
          </div>

      </header>
    
    </>
      
    
  )
}

export default Header;