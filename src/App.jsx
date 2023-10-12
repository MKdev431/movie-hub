import GlobalStyles from "./components/styled/Global";
import { ThemeProvider } from "styled-components";
import Nav from "./components/Nav";
import Pages from "./Pages";

const theme = {
  colors: {
    body: "#4c4c4c",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <GlobalStyles />
        <Nav />
        <Pages />
      </div>
    </ThemeProvider>
  );
}

export default App;
