import React from 'react';

const Card = ({ title, description, imageUrl, ingredients }) => {
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    width: '300px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    margin: '20px',
    backgroundColor: '#fff',
  };

  const imageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  };

  const contentStyle = {
    padding: '15px',
  };

  const titleStyle = {
    margin: '0 0 10px',
    fontSize: '20px',
    fontWeight: 'bold',
  };

  const descriptionStyle = {
    fontSize: '16px',
    color: '#555',
  };

  const ingredientsStyle = {
    marginTop: '10px',
    fontSize: '14px',
    color: '#333',
  };

  return (
    <div style={cardStyle}>
      <div style={contentStyle}>
        <h3 style={titleStyle}>{title}</h3>
        <p style={descriptionStyle}>{description}</p>
        <h4 style={ingredientsStyle}>Ingredientes:</h4>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
