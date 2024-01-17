import React, { useState, useEffect } from 'react';
import './CardList.css';

const CardList = () => {
  const [cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 10; // Set the number of cards to display per page

  useEffect(() => {
    const fetchCards = async () => {
      const apiEndpoint = 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards';
      const headers = {
        'X-RapidAPI-Key': '2fac1e735dmshc9a264a720d676cp179bb5jsn8eef8aed8f34',
        'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
      };

      try {
        const response = await fetch(`${apiEndpoint}?page=${currentPage}&pageSize=${cardsPerPage}`, {
          method: 'GET',
          headers
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        setCards(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCards();
  }, [currentPage]); // Trigger fetch when currentPage changes

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="pokedex">
      <h1>Hearthstone Cards</h1>
      {Array.isArray(cards) && cards.length > 0 ? (
        <div>
          <div className="card-container">
            {cards.map(({ cardId, img, name }) => (
              <div className="card" key={cardId}>
                <img src={img} alt={name} />
                <p>{name}</p>
              </div>
            ))}
          </div>
          <div className="pagination">
            <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
              Previous Page
            </button>
            <span>Page {currentPage}</span>
            <button onClick={() => handlePageChange(currentPage + 1)}>Next Page</button>
          </div>
        </div>
      ) : (
        <p>Loading cards...</p>
      )}
    </div>
  );
};

export default CardList;
