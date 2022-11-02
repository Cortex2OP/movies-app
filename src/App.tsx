import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import styled from "styled-components";
import SearchBars from "./components/SearchBars/SearchBars";
import MovieList from "./components/MovieList/MovieList";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import SeriesList from "./components/SeriesList/SeriesList";

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
      <Router>
      <Header />
      <SearchBars setTitleInput={setTitleInput} setYearInput={setYearInput} />
        <Routes>
          <Route path="/" element={<MovieList titleInput={titleInput} setTitleInput = {setTitleInput}/>}></Route>
          <Route path="/series" element={<SeriesList titleInput={titleInput} setTitleInput = {setTitleInput}/>}></Route>
        </Routes>
      </Router>
    </StyledApp>
  );
}

export default App;
