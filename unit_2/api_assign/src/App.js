import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import MovieDisplay from './components/MovieDisplay';


function App() {

const apiKey = 'be8650d0'

const [movie, setMovie] = useState({});

const getMovie = async (searchTerm) => {
  try{
  const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`)

  const data = await response.json()

  setMovie(data);
  } catch(error){
    console.error(error)
  }
}

useEffect(() => {
  const movies = ['Donnie Darko', 'Princess Mononoke', 'I,robot', 'The Knight Before Christmas', 'Home Alone']
  getMovie(movies[Math.floor(Math.random()* movies.length)])
}, []
)

  return (
    <div className="App">
     <Form moviesearch={getMovie}/>
     <MovieDisplay movie={movie} />
    </div>
  );
}

export default App;
