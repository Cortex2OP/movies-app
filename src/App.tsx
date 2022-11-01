import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/Header/Header';
import styled from "styled-components";
import SearchBars from './components/SearchBars/SearchBars';
import MovieCard from './components/MovieCard/MovieCard';

interface IMovieData {
  Title: string,
  Year: string,
  Poster: string
}

const StyledApp = styled.div`
  
`

const StyledMovieCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 11% 0 11%;  

`


function App() {
  const [movieData, setMovieData] = useState<IMovieData[]>([]);


  useEffect(() => {
    axios
      .get("http://www.omdbapi.com/", {
        params: {
          s: "test",
          page: 2,
          apikey: "8f7a576e",
        },
      })
      .then(res => setMovieData(res.data.Search));
  
      }
  , [])

console.log(movieData);

  return (
    <StyledApp>
      <Header />
      <SearchBars />
      <StyledMovieCardContainer>
        {movieData.map(movie => <MovieCard img = {movie.Poster} title={movie.Title} yearOfRelease={movie.Year}/>)}
      </StyledMovieCardContainer>
    </StyledApp>
  );
}

export default App;
