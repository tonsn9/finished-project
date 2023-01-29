import styled from "styled-components";

export const Button = styled.button`
  all: unset;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  min-width: 120px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${props => props.theme["green-700"]};
  color: ${props => props.theme["gray-100"]};
  transition: opacity 0.2s;

  &:not(:disabled):hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.5;
    cursor: auto;
  }
`;
