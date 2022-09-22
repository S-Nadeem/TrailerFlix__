import React from "react";
import { StyledGrid, StyledGridContent } from "../styles/StyledGrid";

const Grid = ({ header, children }) => {
  return (
    <StyledGrid>
      <h1 id="movies-header-title">{header}</h1>
      <StyledGridContent>{children}</StyledGridContent>
    </StyledGrid>
  );
};

export default Grid;
