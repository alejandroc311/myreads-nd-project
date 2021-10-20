import { useEffect, useState } from "react";
import { search } from "../BooksAPI";
import SearchPageForm from "./components/searchPageComponents/searchPageForm";
function SearchPage({bookList, updateHandler}){
    const [userInput, setUserInput] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    function handleChange(value){
        setUserInput(value);
        search(value).then(results => setSearchResults(results))
    }
    function handleSubmit(){
        search(userInput).then(results => setSearchResults(results));
        setUserInput("");
        console.log(userInput, searchResults);
    }
    
    useEffect(()=> {
        console.log("The User Input and Results: ", userInput, searchResults);
        if(!searchResults || searchResults.error == "empty query") {console.log("Search Results are undefined.")}
    }, [userInput, searchResults]);
    return(
        <SearchPageForm onSubmit={handleSubmit} onChange={handleChange} userInput={userInput}/>
    );
}
export default SearchPage;