// @ts-nocheck
import { ThemeProvider, createTheme } from '@mui/material/styles';

import './App.css'
import Header1 from './components/header/Header1'
import Header2 from './components/header/Header2'
import Header3 from './components/header/Header3'
import { useMemo, useState } from 'react';
import { getDesignTokens } from './Theme';
import { Box, CssBaseline } from '@mui/material';
import Footer from './components/Footer';
import Main from './components/main/Main';
import Hero from './components/hero/Hero';
import Scroll from './components/Scroll';

function App() {
 
  const myThemem = localStorage.myTheme === 'light' ? 'dark' : 'light'
  const [mode, setMode] = useState(myThemem);

  
  // @ts-ignore
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
  <>
      <ThemeProvider theme={theme}>
      <CssBaseline />
        <Header1 setMode={setMode} />
        <Header2 />
        <Header3 />
        <Box sx={{bgcolor:theme.palette.bgbody.main , py:2}}>
        <Hero />
        <Main />
        </Box>
        <Footer />
        <Scroll />
      </ThemeProvider>
  
    
  </>

  )
}

export default App
