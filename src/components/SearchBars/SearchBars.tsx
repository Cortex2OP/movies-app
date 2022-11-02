import { useRef, useState } from "react";
import styled from "styled-components";

interface ISearchBarProps {
    setTitleInput: any,
    setYearInput: any,
}

const StyledInput = styled.input `
  height: 22px;
  margin-top: 15px;
`

const SearchForms = styled.form`
  margin: 0 40% 0 40%;
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
  flex-direction: column;

  @media (max-width: 480px) {
    margin: 0;
    flex-direction: row;
  }
`;

const SearchBars: React.FC<ISearchBarProps> = (props) => {
  

  return (
    <>
      <SearchForms>
        <label style={{fontFamily: "Arial"}}>
          TITLE:
          <StyledInput type="text" name="title" onChange={(e) => props.setTitleInput(e.target.value)} />
            </label>
        <label style={{fontFamily: "Arial"}}>
          YEAR:
          <StyledInput type="text" name="year" onChange={(e) => props.setYearInput(e.target.value)}/>
        </label>
      </SearchForms>
    </>
  );
};

export default SearchBars;
