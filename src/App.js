import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { useState, useEffect } from "react";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import './App.css';
import { get, getAll,update } from "./BooksAPI";

function  App() {
  
  const [bookList, setBookList] = useState([]);
  const [wasListUpdated, setWasListUpdated] = useState(0);
  function handleUpdate(){
    setWasListUpdated(++wasListUpdated);
  }

  useEffect(() => {
    getAll().then(results => setBookList(results));
  }, [wasListUpdated])
  return (
    <Router>
      <Switch>
        <Route  exact path="/" render={() => <HomePage updateHandler={handleUpdate} bookList={bookList}/>}/>
        <Route path="/search" render={() => <SearchPage updateHandler={handleUpdate} bookList={bookList}/>}/>
      </Switch>
    </Router>
  );
}
export default App;
