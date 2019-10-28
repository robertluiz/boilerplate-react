import { createGlobalStyle } from 'styled-components';
import background from '../assets/mybg.svg';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
body {
  min-height: 100%;
  background-image: url(${background}) #fff;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
}
.pull-right {
    float: right!Important;
}
`;
