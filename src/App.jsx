import { ThemeProvider } from 'styled-components';
import HomePage from './pages/HomePage';
import { darkTheme, lightTheme } from './utils/theme';
import { useState } from 'react';
import { AppRoutes } from './Routes';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleClick = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode? darkTheme : lightTheme}>
      <AppRoutes handleClick={handleClick} />
    </ThemeProvider>

  )
}

export default App
