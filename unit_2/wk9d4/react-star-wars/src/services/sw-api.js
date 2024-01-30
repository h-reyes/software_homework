const API_URL = 'https://swapi.dev/api';

export const getAllStarships = async () => {
  try {
    const response = await fetch(`${API_URL}/starships/`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching starships:', error);
    return [];
  }
};
