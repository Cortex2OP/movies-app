import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const StyledMovieCardParagraph = styled.p`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  padding-bottom: 5px;
  margin-top: 20px;
`;

const StyledMovieCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  padding-top: 50px;
  padding: 50px 10px 0px 10px;

  @media (max-width: 480px) {
   
  }
`;

const StyledMovieCover = styled.img`
  max-width: 350px;
  height: 100%;
`;

const StyledMovieInfo = styled.div`
  box-shadow: -1px 4px 14px 4px rgba(0, 0, 0, 0.21);
  -webkit-box-shadow: -1px 4px 14px 4px rgba(0, 0, 0, 0.21);
  -moz-box-shadow: -1px 4px 14px 4px rgba(0, 0, 0, 0.21);
  width: 330px;
  padding: 15px 0 40px 10px;
  height: 140px;
`;

interface IImageProps {
  img: string;
  title: string;
  yearOfRelease: string;
  id: string
}

const MovieCard: React.FC<IImageProps> = (props) => {
  const navigate = useNavigate();
  
  
  return (
    <StyledMovieCard onClick={() => navigate(`/movieDetails/${props.id}`)}>
      <StyledMovieCover src={props.img !== "N/A" ? props.img : "https://t4.ftcdn.net/jpg/01/41/37/75/360_F_141377507_5L5rW5qp3c0imYgWZyNJRr3n2aws0i7w.jpg"}></StyledMovieCover>
      <StyledMovieInfo>
        <StyledMovieCardParagraph>
          <span style={{ fontWeight: "bold" }}>Title: </span>
          {props.title}
        </StyledMovieCardParagraph>
        <StyledMovieCardParagraph>
          <span style={{ fontWeight: "bold" }}>Year of Release: </span>
          {props.yearOfRelease}
        </StyledMovieCardParagraph>
      </StyledMovieInfo>
    </StyledMovieCard>
  );
};

export default MovieCard;
