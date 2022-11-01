import { useRef, useState } from "react";
import styled from "styled-components";

interface ISearchBarProps {
    setTitleInput: any,
    setYearInput: any,
    handleSubmit: any,
}

const SearchForms = styled.form`
  margin: 0 40% 0 40%;
  display: flex;
  justify-content: space-between;
`;

const SearchBars: React.FC<ISearchBarProps> = (props) => {
  

  return (
    <>
      <SearchForms>
        <label>
          Title:
          <input type="text" name="title" onChange={(e) => props.setTitleInput(e.target.value)} />
            </label>
        <label>
          Year:
          <input type="text" name="year" onChange={(e) => props.setYearInput(parseInt(e.target.value))} />
        </label>
        <input type="submit" value="Submit" onClick={props.handleSubmit}/>
      </SearchForms>
    </>
  );
};

export default SearchBars;
