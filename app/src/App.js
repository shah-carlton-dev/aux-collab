import './App.css';
import Header from './components/Header.jsx';
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import { Grid } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <Header />
      <Grid container p={3}>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </Grid>
    </div>
  );
}

export default App;
