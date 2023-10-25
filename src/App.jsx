import { GlobalProvider } from "./context/GlobalState";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "./css/Global";

import Nav from "./components/Nav";
import Pages from "./Pages";

const theme = {
  colors: {
    body: "#4c4c4c",
  },
  small: "530px",
  medium: "1024px",
  large: "1600px",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalProvider>
        <div className="app">
          <GlobalStyles />
          <Nav />
          <Pages />
        </div>
      </GlobalProvider>
    </ThemeProvider>
  );
}

export default App;
