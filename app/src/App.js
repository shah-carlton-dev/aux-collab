import './App.css';
import Header from './components/Header.jsx';
import Landing from "./components/Landing";
import About from "./components/About";
import OurGoal from "./components/OurGoal";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { makeStyles, Grid } from "@material-ui/core";
import AuxBackground from "./assets/AuxBackground.png";

const useStyles = makeStyles(theme => ({
  app: {
    backgroundImage: `url(${AuxBackground})`,
    backgroundSize: `100vw 100%`
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <Header />
      <Grid item container p={3}>
        <Landing />
        <About />
        <OurGoal />
        <HowItWorks />
        <Features />
        <Contact />
        <Footer />
      </Grid>
    </div>
  );
}

export default App;
