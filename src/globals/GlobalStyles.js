import { createGlobalStyle } from "styled-components";

const Globals = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Lato:100,400,700|Montserrat:500i&display=swap');

 * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 }

body {
  font-size: 100%;
  color: hotpink;
  background: #fff;
  font-family: 'Lato', sans-serif;
  /* font-family: 'Montserrat', sans-serif; */
}

h1 {
  font-size: 3em;
  line-height: 1.2;
  margin-bottom: 0.5em;
  font-weight: bold;
}

h2 {
  font-size: 2em;
  margin-bottom: 1em;
  margin-bottom: 0.75em;
}

h3 {
  font-size: 1.5em;
  line-height: 1;
  margin-bottom: 1em;
  font-weight: bold;
}

h4 {
  font-size: 1.2em;
  line-height: 1.2;
  margin-bottom: 1.25em;
  font-weight: bold;
  font-weight: bold;
  
}

h5 {
  font-size: 1em;
  margin-bottom: 1.5em;
  font-weight: bold;
  
}
h6 {
  font-size: 1em;
  margin-bottom: 0.5em;
  
}

p {
  line-height: 1.5;
  margin: 0 0 1.5 0;
}
`;

export default Globals;
