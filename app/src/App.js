import './App.css';
import Header from './components/Header.jsx';
import Landing from "./components/Landing";
import About from "./components/About";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import Contact from "./components/Contact";
import { Grid } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <Header />
      <Grid item container p={3}>
        <Landing />
        <About />
        <HowItWorks />
        <Features />
        <Contact />
      </Grid>
    </div>
  );
}

export default App;
