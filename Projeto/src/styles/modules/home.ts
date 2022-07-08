import styled from "styled-components";
import {
  background,
  disabled,
  primary,
  secondaryDark,
  secondaryLight,
  text,
} from "../global/colors";

export const Container = styled.main`
  width: 100%;
  heigth: 100%;
  background: ${background};
  font-family: "Roboto", sans-serif;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    heigth: 100%;

    h1,
    h3 {
      color: ${text};
    }

    form {
      background: #ffffff;
      border: 1px solid  #717171;
      border-radius: 0.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 2rem;

      select {
        padding: 0.5rem 1rem;
        width: 500px;
        color: #717171;

      }

      select + select {
        margin-top: 1rem;
        color: #717171;
      }

      button {
        padding: 0.5rem 1rem;
        margin-top: 1rem;
        border: 0;
        background: ${primary};
        color: #ffffff;
        &:disabled {
            background: ${disabled}
        }
      }
    }

    > div {
     width: 600px;
     background: ${secondaryLight};
     padding: 2rem;
     margin-top: 2rem;
     display: flex;
     gap: 0.5rem;
     flex-direction: column;
     align-items: center;
     justify-content: center;

     strong {
        color: ${text};

     }

     span {
        padding: 0.5rem;
        border-radius: 3rem;
        color: #ffffff;
        background: ${secondaryDark};
     }

     small {
        font-size:0.75rem;
        color: #717171;
     }
    }
  }
`;
