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
      </div>
    </HeaderArea>
  );
};

export default Header;