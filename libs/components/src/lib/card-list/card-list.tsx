import React from 'react';
import styled from 'styled-components';

export const CardList: React.FC<any> = ({ children }) => {
  return (
    <StyledCardList className="card-list ui link cards">
      {children}
    </StyledCardList>
  );
};

const StyledCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 10px;
`;
