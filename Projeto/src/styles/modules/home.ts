import styled from "styled-components";
import { background, text } from "../global/colors";

export const Container = styled.main`
  width: 100%;
  heigth: 100%;
  background: ${background};

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
      font-family: "Roboto", sans-serif;
    }

    form {
      background: #ffffff;
      border: 1px solid ${text};
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      paddind: 2rem;
    }
  }
`;
