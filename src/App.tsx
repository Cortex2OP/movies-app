import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import styled from "styled-components";
import SearchBars from "./components/SearchBars/SearchBars";
import MovieList from "./components/MovieList/MovieList";

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

  @media (max-width: 480px) {
    margin: 0;
  }
`;

function App() {

  const [titleInput, setTitleInput] = useState("test");
  const [yearInput, setYearInput] = useState<Number>();

  return (
    <StyledApp>
      <Header />
      <SearchBars setTitleInput={setTitleInput} setYearInput={setYearInput} />
      <StyledMovieCardContainer>
        <MovieList titleInput={titleInput} setTitleInput={setTitleInput} />
      </StyledMovieCardContainer>
    </StyledApp>
  );
}

export default App;
