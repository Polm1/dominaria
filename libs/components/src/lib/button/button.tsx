import React from 'react';
import styled from 'styled-components';

import { Button as SemanticButton } from 'semantic-ui-react';

const StyledButton = styled(SemanticButton)`
  position: absolute;
  top: 50%;
  //HACK: fast override for semantic-ui style
  width: 50% !important;
`;

export const Button: React.FC<any> = ({ children, onClick }) => {
  return (
    <StyledButton className="ui primary button" onClick={onClick}>
      {children}
    </StyledButton>
  );
};
