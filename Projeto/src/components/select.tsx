import styled from "styled-components";

interface FormControlProps {
  visible?: boolean;
}

export const FormControl = styled.div<FormControlProps>`
  width: 100%;
  display: ${props => props.visible ? 'block' : 'none'};
`;

export const Select = styled.select`
  width: 100%;
  padding: 1rem;
`;
