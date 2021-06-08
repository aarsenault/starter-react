import { createGlobalStyle } from "styled-components";

// Set some common colours
const GlobalStyle = createGlobalStyle`
  :root {
    --black: #220c10;
    --red: #ff674d;
    --darkGreen:#0b6e4f;
    --green: #59c9a5;
    --lightGreen: #daefb3;
    --yellow: #feffbe;
    --darkBlue: #145c9e;
    --blue: #75b8c8;
    --grey: #d8dbe2;
    --white: ##FFFFFF;
  }

  *{
    margin: 0;
  }

  html {
    font-size: 10px;
    color: var(--black);

  }

  body {
    font-size: 2rem;
    background: var(--white);
    transition: all 0.2s;
  }


  /* Sensible defaults for common elements: */

  fieldset {
    border-color: rgba(0, 0, 0, 0.1);
    border-width: 1px;
  }

  button {
    background: var(--darkBlue);
    color: var(--white);
    border: 0;
    padding: 0.6rem 1rem;
    border-radius: 2px;
    cursor: pointer;
    --cast: 2px;
    box-shadow: var(--cast) var(--cast) 0 var(--grey);
    text-shadow: 0.5px 0.5px 0 rgba(0, 0, 0, 0.2);
    transition: all 0.2s;
    &:hover {
      --cast: 4px;
    }
  }


  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    background: var(--white);
    width: 12px;
  }

  html {
    scrollbar-width: thin;
  }
  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  body::-webkit-scrollbar-thumb {
    border-radius: 6px;
    border: 3px solid var(--white);
  }

`;

export default GlobalStyle;
