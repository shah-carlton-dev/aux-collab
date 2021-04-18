import logo from './logo.svg';
import './App.css';
import Header from './components/Header.jsx';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route></Route>
        <Route></Route>
      </Switch>
    </div>
  );
}

export default App;
