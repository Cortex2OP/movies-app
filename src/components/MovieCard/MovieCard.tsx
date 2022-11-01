import styled from "styled-components";

const MovieCard:React.FC = () => {

    const StyledMovieCard = styled.div `
        display: flex;
        flex-direction: column;
        width: 350px;
        padding-top: 50px;
    `
    
    const StyledMovieCover = styled.img `
            max-width: 350px;
    `

    const StyledMovieInfo = styled.div `
            border: 0 solid #e2e8f0;
            box-shadow: -1px 4px 14px 4px rgba(0,0,0,0.28);
            -webkit-box-shadow: -1px 4px 14px 4px rgba(0,0,0,0.28);
            -moz-box-shadow: -1px 4px 14px 4px rgba(0,0,0,0.28);
            width: 350px;
    `
    
    return (
        <StyledMovieCard>
        <StyledMovieCover src="https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_FMjpg_UX1000_.jpg"></StyledMovieCover>
        <StyledMovieInfo>
            <p style={{fontWeight: "bold"}}>Title:</p>
            <p style={{fontWeight: "bold"}}>Year of Release:</p>
        </StyledMovieInfo>
        </StyledMovieCard>
    )

}

export default MovieCard;