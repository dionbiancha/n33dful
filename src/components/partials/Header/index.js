import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderArea } from './styled';


const Header = () => {
  return (
    <HeaderArea>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <span className="text-logo">n33dful</span>
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="">Login</Link>
            </li>
            <li>
              <Link to="">Cadastrar</Link>
            </li>
            <li>
              <Link to="" className="button">Poste um anúncio</Link>
            </li>
          </ul>
        </nav>
      </div>
    </HeaderArea>
  );
};

export default Header;