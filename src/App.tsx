import styled, {createGlobalStyle} from 'styled-components'


const GlobalStyles = createGlobalStyle`
  body{
    background-color: #18171f;
    color: #fff;
    padding:0;
    margin:0;
  }
`
function App() {

  return (
    <div>
      <GlobalStyles/>
     <h1>hello</h1>
     <p>hhhhhhhhhhhhhhhhhhhhhhhhh</p>
    </div>
  )
}

export default App
