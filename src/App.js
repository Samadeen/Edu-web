import { BrowserRouter as Router, Switch } from 'react-router-dom';

import './App.css';
import Header from './components/common/heading/Header';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch></Switch>
      </Router>
    </>
  );
}

export default App;
