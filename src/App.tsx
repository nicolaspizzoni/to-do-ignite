import { ThemeProvider } from 'styled-components'
import { ToDo } from './pages/ToDo'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <ToDo />
    </ThemeProvider>
  )
}

export default App
