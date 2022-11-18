import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
}

html {
    height: 100%;
}

body {
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .score {
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    font-size: 70px;
    font-weight: 400;
    text-align: center;
    margin: 20px;
  }

  .start,
  .next {
    cursor: pointer;
    background-color: linear-grandient(180deg, #fff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }

  .start {
    max-width: 200px;
  }
`;
