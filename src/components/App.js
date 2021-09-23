import react, { useState } from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "./ui/Theme";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import Home from "./Home";

import "../App.css";

function App() {
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header value={value} setValue={setValue} />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <Home {...props} value={value} setValue={setValue} />
            )}
          />
          <Route path="/projects" component={() => <h1>Projects</h1>} />
          <Route path="/about" component={() => <h1>About</h1>} />
          <Route path="/contact" component={() => <h1>contact</h1>} />
          <Redirect from="/home" to="/" />
        </Switch>
        <Footer value={value} setValue={setValue} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
