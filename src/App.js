import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { useState, useEffect } from "react";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import './App.css';
import { get, getAll,update } from "./BooksAPI";

function  App() {
  const [bookList, setBookList] = useState(null);
  
  useEffect(() => {
    if(bookList == null) getAll().then(results => setBookList(results));
  }, [bookList])
  return (
    <Router>
      <Switch>
        <Route  exact path="/" render={() => <HomePage bookList={bookList}/>}/>
        <Route path="/search" render={() => <SearchPage bookList={bookList}/>}/>
      </Switch>
    </Router>
  );
}
export default App;
