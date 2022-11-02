import React, {useEffect, useState} from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import MovieCard from "../MovieCard/MovieCard";

interface IMovieData {
    Title: string;
    Year: string;
    Poster: string;
    imdbID: string;
  }

interface IMovieList {
    titleInput: string,
    setTitleInput: any,
}




const MovieList: React.FC<IMovieList> = (props) => {
    const [movieData, setMovieData] = useState<IMovieData[]>([]);
    const [page, setPage] = useState(1);
    
    useEffect(() => {
        axios
          .get("http://www.omdbapi.com/", {
            params: {
              s: props.titleInput,
              page: page,
              apikey: "8f7a576e",
              type: "movie"
            },
          })
          .then((res) => {
            if (res && res.data && res.data.Search) { setMovieData(page===1?res.data.Search:[...movieData, ...res.data.Search]);
                console.log(res.data.Search);
            }
          });
      }, [page, props.titleInput]);

    return (
        <InfiniteScroll
      className="infinite-scroll"
        dataLength={movieData.length}
        loader={<h4></h4>}
        hasMore={true}
        next={() => {
          setPage(page + 1);
        }}
      >       
          
          {movieData &&
          movieData.length >= 1 &&
          movieData.map((movie) => <MovieCard key={movie.imdbID} img={movie.Poster} title={movie.Title} yearOfRelease={movie.Year} id={movie.imdbID}/>)}
          </InfiniteScroll>
    )
}

export default MovieList;