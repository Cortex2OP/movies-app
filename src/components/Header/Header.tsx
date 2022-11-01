import React, { FC } from "react";
import styled from "styled-components";



const StyledHeader = styled.nav`
  margin: 0 11% 0 11%;  
  display: flex;
  justify-content: space-between;

  & h1 {
    color: white;
    padding: 15px;
  }

`;

const LinksComponent = styled.div `
    display: flex;
    align-items: center;

    & p {
        padding-right: 150px;
        font-family: Arial, Helvetica, sans-serif;
        color: white;
    }
`

const StyledHeaderWrapper = styled.div`
    background-color: rgb(75, 81, 191);
    width: 100%;
`

const StyledLogo = styled.img `
    max-height: 60px;
`

const Header: FC = () => {
  return (
    <StyledHeaderWrapper>
    <StyledHeader>
      <StyledLogo src="https://www.freeiconspng.com/thumbs/movie-icon/movie-icon-2.png"></StyledLogo>
      <LinksComponent>
      <p>MOVIES</p>
      <p>SERIES</p>
      </LinksComponent>
    </StyledHeader>
    </StyledHeaderWrapper>
  );
};

export default Header;
