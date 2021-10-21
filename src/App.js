import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { useState, useEffect } from "react";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import './App.css';
import { get, getAll,update } from "./BooksAPI";

function  App() {
  
  const [bookList, setBookList] = useState([]);
  const [wasListUpdated, setWasListUpdated] = useState(false);


  useEffect(() => {
    getAll().then(results => setBookList(results));
  }, [wasListUpdated])
  return (
    <Router>
      <Switch>
        <Route  exact path="/" render={() => <HomePage bookList={bookList}/>}/>
        <Route path="/search" render={() => <SearchPage updateHandler={setWasListUpdated} bookList={bookList}/>}/>
      </Switch>
    </Router>
  );
}
export default App;
