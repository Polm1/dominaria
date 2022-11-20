import React from 'react';

// Third Parties
import styled from 'styled-components';
import {
  Button as SemanticButton,
  ButtonProps as SemanticButtonProps,
} from 'semantic-ui-react';

export const Button = styled(BaseButton)``;

function BaseButton({ content, children, ...rest }: SemanticButtonProps) {
  return (
    <SemanticButton color="orange" content={content} {...rest}>
      {children}
    </SemanticButton>
  );
}
