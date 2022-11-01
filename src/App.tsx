import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header/Header";
import styled from "styled-components";
import SearchBars from "./components/SearchBars/SearchBars";
import MovieCard from "./components/MovieCard/MovieCard";
import { setDefaultResultOrder } from "dns";

interface IMovieData {
  Title: string;
  Year: string;
  Poster: string;
  imdbID: string;
}

const StyledApp = styled.div`
  padding-bottom: 100px;
`;

const StyledMovieCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 11% 0 11%;
`;

function App() {
  const [movieData, setMovieData] = useState<IMovieData[]>([]);
  const [titleInput, setTitleInput] = useState("test");
  const [yearInput, setYearInput] = useState<Number>();

  useEffect(() => {
    axios
      .get("http://www.omdbapi.com/", {
        params: {
          s: titleInput,
          page: 1,
          apikey: "8f7a576e",
        },
      })
      .then((res) => {
        if (res && res.data && res.data.Search) setMovieData(res.data.Search);
      });
  }, [titleInput]);

  // useEffect(() => {
  //   axios
  //     .get("http://www.omdbapi.com/", {
  //       params: {
  //         s: titleInput,
  //         page: 1,
  //         apikey: "8f7a576e",
  //       },
  //     })
  //     .then((res) => setMovieData(res.data.Search));
  // }, [titleInput]);

  return (
    <StyledApp>
      <Header />
      <SearchBars setTitleInput={setTitleInput} setYearInput={setYearInput} />
      <StyledMovieCardContainer>
        {movieData &&
          movieData.length >= 1 &&
          movieData.map((movie) => <MovieCard key={movie.imdbID} img={movie.Poster} title={movie.Title} yearOfRelease={movie.Year} />)}
      </StyledMovieCardContainer>
    </StyledApp>
  );
}

export default App;
