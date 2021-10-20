import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { useState, useEffect } from "react";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import './App.css';

function App() {
  const [bookLists, setBookLists] = useState([]);

  return (
    <Router>
      <Switch>
        <Route  exact path="/" render={<HomePage bookLists={}/>}/>
        <Route path="/search" render={<SearchPage bookLists={}/>}/>
      </Switch>
    </Router>
  );
}

export default App;
