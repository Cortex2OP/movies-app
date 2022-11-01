import { useRef, useState } from "react";
import styled from "styled-components";

const SearchForms = styled.form`
  margin: 0 40% 0 40%;
  display: flex;
  justify-content: space-between;
`;

const SearchBars: React.FC = () => {
  const [titleInput, setTitleInput] = useState("");
  const [yearInput, setYearInput] = useState<Number>();

  return (
    <>
      <SearchForms>
        <label>
          Title:
          <input type="text" name="title" onChange={(e) => setTitleInput(e.target.value)} />
        </label>
        <label>
          Year:
          <input type="text" name="year" onChange={(e) => setYearInput(parseInt(e.target.value))} />
        </label>
        <input type="submit" value="Submit" />
      </SearchForms>
    </>
  );
};

export default SearchBars;
