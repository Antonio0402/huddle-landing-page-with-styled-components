import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle `
/*
  1. Use a more-intuitive box-sizing model.
*/
*, *::before, *::after {
  box-sizing: border-box;
}
/*
  2. Remove default margin
*/
* {
  margin: 0;
}

/*
  3. Allow percentage-based heights in the application
*/
html:focus-within {
  font: 100%;
  scroll-behavior: smooth;
}

html, body {
  height: 100%;
}
/*
  Typographic tweaks!
  4. Add accessible line-height
  5. Improve text rendering
*/
body {
  font-family: ${({theme}) => theme.fonts.body};
  line-height: 1.5;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
}

ul[role='list'], 
ol[role='list'] {
  list-style: none;
}

a:not([class]) {
  text-decoration-skip-ink: auto;
}
/*
  6. Improve media defaults
*/
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
/*
  7. Remove built-in form typography styles
*/
input, button, textarea, select {
  font: inherit;
}
/*
  8. Avoid text overflows
*/
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
/*
  9. Create a root stacking context
*/
#root, #__next {
  isolation: isolate;
}
`

export default GlobalStyle;