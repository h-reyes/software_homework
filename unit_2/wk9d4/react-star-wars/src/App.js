
import React, { useState, useEffect } from 'react';
import { getAllStarships } from './services/sw-api';
import StarshipCard from './components/StarshipCard';
import './App.css';

const App = () => {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const starshipsData = await getAllStarships();
      setStarships(starshipsData);
    };

    fetchData();
  }, []);

  return (
    <div className="app">
      <h1 className='title'>STAR WARS STARSHIPS</h1>
      {starships.map((starship) => (
        <StarshipCard key={starship.name} starship={starship} />
      ))}
    </div>
  );
};

export default App;
