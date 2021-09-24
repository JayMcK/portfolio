import react, { useState } from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "./ui/Theme";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";

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
          <Route
            path="/projects"
            render={(props) => (
              <Projects {...props} value={value} setValue={setValue} />
            )}
          />
          <Route
            path="/about"
            render={(props) => (
              <About {...props} value={value} setValue={setValue} />
            )}
          />
          <Route
            path="/contact"
            render={(props) => (
              <Contact {...props} value={value} setValue={setValue} />
            )}
          />
          <Redirect from="/home" to="/" />
        </Switch>
        <Footer value={value} setValue={setValue} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
