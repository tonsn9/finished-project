import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: #f9f9f9;
`

export const Wrapper = styled.div`
  width: 100%;
  max-width: 768px;
  padding: 1.5rem;
  text-align: center;
  margin: 4rem auto;
  background-color: #f9f9f9;
`

export const Box = styled.form`
  padding: 2rem;
  margin-top: 1.5rem;
  background: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

export const PriceContainer = styled.div`
  width: 100%;
  background: ${props => props.theme["green-400"]};
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin: 1rem 0 ;

  strong {
    color: ${props => props.theme["gray-800"]};
  }

  span {
    background: ${props => props.theme["green-700"]};
    padding: 0.75rem 1.5rem;
    border-radius: 2rem;
    font-weight: 600;
    color: ${props => props.theme["gray-100"]}
  }

  small {
    color: ${props => props.theme["gray-600"]}
  }
`;
