import React from 'react';
import '../assets/css/Card.css';

const Card = ({ img, nome, cargo, children }) => {
  return (
    <div className="info">
      <img className="perfil" src={img} alt="Thyeris Lima" />
      <h1>{nome}</h1>
      <h2>{cargo}</h2>
      <div className="icons">{children}</div>
    </div>
  );
};

export default Card;
