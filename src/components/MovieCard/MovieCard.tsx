import styled from "styled-components";

interface IImageProps{
    img: string
    title: string,
    yearOfRelease: string,
}

const MovieCard:React.FC<IImageProps> = (props) => {

    const StyledMovieCardParagraph = styled.p `
        font-family: system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
        padding-bottom: 8px;
    `

    const StyledMovieCard = styled.div `
        display: flex;
        flex-direction: column;
        width: 350px;
        padding-top: 50px;
    `
    
    const StyledMovieCover = styled.img `
            max-width: 350px;
            height: 100%;
    `

    const StyledMovieInfo = styled.div `
            box-shadow: -1px 4px 14px 4px rgba(0,0,0,0.21);
            -webkit-box-shadow: -1px 4px 14px 4px rgba(0,0,0,0.21);
            -moz-box-shadow: -1px 4px 14px 4px rgba(0,0,0,0.21);
            width: 350px;
            padding: 25px 0 25px 10px;
    `
    
    return (
        <StyledMovieCard>
        <StyledMovieCover src={props.img}></StyledMovieCover>
        <StyledMovieInfo>
            <StyledMovieCardParagraph><span style={{fontWeight: "bold"}}>Title: </span>{props.title}</StyledMovieCardParagraph>
            <StyledMovieCardParagraph><span style={{fontWeight: "bold"}}>Year of Release: </span>{props.yearOfRelease}</StyledMovieCardParagraph>
        </StyledMovieInfo>
        </StyledMovieCard>
    )
}

export default MovieCard;