import React from 'react';
import './Header.css'; // Importa o arquivo de estilo

const Header = () => {
  return (
    <header className="header" style={{ marginBottom: '30px' }}>
      <div className="logo">
        <h1>Receitas do Samu</h1>
      </div>
    </header>
  );
}

export default Header;
