import styled, {createGlobalStyle} from 'styled-components'


export const GlobalStyles = createGlobalStyle`
  body{
    background-color: #18171f;
    color: #fff;
    padding:0;
    margin:0;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'JetBrains Mono', monospace;
  }
`

export const HeadingStyle = styled.h3`
  color:#817D92;
`