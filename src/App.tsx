import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header/Header";
import styled from "styled-components";
import SearchBars from "./components/SearchBars/SearchBars";
import MovieCard from "./components/MovieCard/MovieCard";
import InfiniteScroll from 'react-infinite-scroll-component';
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
  const [movieData, setMovieData] = useState<IMovieData[]>([]);
  const [page, setPage] = useState(1);
  const [titleInput, setTitleInput] = useState("test");
  const [yearInput, setYearInput] = useState<Number>();

  


  useEffect(() => {
    axios
      .get("http://www.omdbapi.com/", {
        params: {
          s: titleInput,
          page: page,
          apikey: "8f7a576e",
        },
      })
      .then((res) => {
        if (res && res.data && res.data.Search) setMovieData(page===1?res.data.Search:[...movieData, ...res.data.Search]);

      });
  }, [page, titleInput]);

  return (
    <StyledApp>
      <Header />
      <SearchBars setTitleInput={setTitleInput} setYearInput={setYearInput} />
      <StyledMovieCardContainer>
          <MovieList page = {page} setPage = {setPage} movieData = {movieData} setMovieData = {setMovieData}/>
      </StyledMovieCardContainer>
    </StyledApp>
  );
}

export default App;
