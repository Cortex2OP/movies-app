import InfiniteScroll from "react-infinite-scroll-component";
import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../MovieCard/MovieCard";


interface ISeriesData {
  Title: string;
  Year: string;
  Poster: string;
  imdbID: string;
}

interface ISeriesList {
  titleInput: string,
  setTitleInput: any
}

const SeriesList: React.FC<ISeriesList> = (props) => {
    const [seriesData, setSeriesData] = useState<ISeriesData[]>([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
      axios
        .get("http://www.omdbapi.com/", {
          params: {
            s: props.titleInput,
            page: page,
            apikey: "8f7a576e",
            type: "series"
          },
        })
        .then((res) => {
          if (res && res.data && res.data.Search) setSeriesData(page===1?res.data.Search:[...seriesData, ...res.data.Search]);
  
        });
    }, [page, props.titleInput]);

  return (
    <InfiniteScroll
      dataLength={seriesData.length}
      className="infinite-scroll"
      loader={<h4>Loading...</h4>}
      hasMore={true}
      next={() => {
      setPage(page + 1);
      }}
    >
      {seriesData &&
        seriesData.length >= 1 &&
        seriesData.map((movie) => <MovieCard key={movie.imdbID} img={movie.Poster} title={movie.Title} yearOfRelease={movie.Year} id={movie.imdbID}/>)}
    </InfiniteScroll>
  );
};

export default SeriesList;
