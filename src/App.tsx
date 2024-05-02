import { GlobalStyles, HeadingStyle } from './GlobalStyles'
import Input from './components/Input'
import Generate from './components/Generate'


function App() {
  return (
    <div>
      <GlobalStyles/>
      <HeadingStyle>
        Password Generator
      </HeadingStyle>
      <Input/> <br />
      <Generate/>
    </div>
  )
}

export default App
