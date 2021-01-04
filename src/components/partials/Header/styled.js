import styled from 'styled-components';

export const HeaderArea = styled.div`
background-color: #FFF;
height: 60px;
border-bottom: 1px solid #CCC;

.container {
  max-width: 1000px;
  margin: auto;
  display: flex;
}
a {
  text-decoration: none;
}
.logo {
  flex: 1;
  display: flex;
  align-items: center;
  height: 60px;

  .text-logo {
    font-size: 27px;
    font-weight: bold;
    text-shadow: 0px 0px 1px rgba(255,0,0,1),
    0px 0px 13px rgba(255,0,0,0.6),
    0px 0px 23px rgba(255,0,0,0.6);
    color: #FFF
  }
}
`;