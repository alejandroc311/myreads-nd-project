import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { useState, useEffect } from "react";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import './App.css';
import { get, getAll } from "./BooksAPI";

function App() {
  const [bookLists, setBookLists] = useState(getAll());

  return (
    <Router>
      <Switch>
        <Route  exact path="/" render={() => <HomePage bookLists={bookLists}/>}/>
        <Route path="/search" render={() => <SearchPage bookLists={bookLists}/>}/>
      </Switch>
    </Router>
  );
}

export default App;
