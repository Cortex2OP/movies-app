import InfiniteScroll from "react-infinite-scroll-component";
import MovieCard from "../MovieCard/MovieCard";

interface IMovieData {
    Title: string;
    Year: string;
    Poster: string;
    imdbID: string;
  }

interface IMovieList {
    page: number,
    setPage: any,
    movieData: Array<IMovieData>,
    setMovieData: any,
}



const MovieList: React.FC<IMovieList> = (props) => {
    return (
        <InfiniteScroll
      className="infinite-scroll"
        dataLength={props.movieData.length}
        loader={<h4>Loading...</h4>}
        hasMore={true}
        next={() => {
          props.setPage(props.page + 1);
        }}
      >       
          
        {props.movieData &&
          props.movieData.length >= 1 &&
          props.movieData.map((movie) => <MovieCard key={movie.imdbID} img={movie.Poster} title={movie.Title} yearOfRelease={movie.Year} />)}
          </InfiniteScroll>
    )
}

export default MovieList;