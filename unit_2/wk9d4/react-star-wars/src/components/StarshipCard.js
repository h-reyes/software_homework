import React from 'react';

const StarshipCard = ({ starship }) => {
  return (
    <div className="starship-card">
      <h3>{starship.name}</h3>
    </div>
  );
};

export default StarshipCard;