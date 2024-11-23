import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/theme/DefaultTheme";
import { ThemeProvider } from "styled-components";
import { LoginProvider } from "./Context/LoginContext";

export function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
        <LoginProvider>
          <Router />
        </LoginProvider> 
        </BrowserRouter>
        <GlobalStyle/>
      </ThemeProvider>
    </>
  );
}

export default App
