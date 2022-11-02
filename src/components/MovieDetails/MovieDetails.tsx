import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

interface IMovieDetails {
  Title: string;
  Year: string;
  imdbID: string;
  Poster: string;
}

const MovieDetails: React.FC = () => {
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://www.omdbapi.com/", {
        params: {
          i: id,
          apikey: "8f7a576e",
        },
      })
      .then((res) => {
        if (res && res.data && res.data) console.log(res.data);
      });
  }, [id]);

  return (
    
  );
};

export default MovieDetails;
