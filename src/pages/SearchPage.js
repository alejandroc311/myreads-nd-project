import { useEffect, useState } from "react";
import { search } from "../BooksAPI";
import SearchPageForm from "./components/searchPageComponents/searchPageForm";
import BookShelf from "./components/BookShelf";
function SearchPage({bookList, updateHandler}){
    const [userInput, setUserInput] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    function handleChange(value){
        setUserInput(value);
        search(value).then(results => setSearchResults(results)).catch((error) => {console.log(error); setSearchResults([])})
    }
    function handleSubmit(){
        search(userInput).then(results => setSearchResults(results));
        setUserInput("");
        console.log(userInput, searchResults);
    }
    
    useEffect(()=> {
        console.log("The User Input and Results: ", userInput, searchResults);
    }, [userInput, searchResults]);
    return(
        <div>
            <SearchPageForm onSubmit={handleSubmit} onChange={handleChange} userInput={userInput}/>
            {
                searchResults === undefined ? 
                    <h2>No search results ... Try starting a new search or changing your current search</h2>
                :
                    searchResults.length ? 
                            <BookShelf filteredBookList={searchResults} bookShelfHeader={"Search Results"} />
                        :
                            <h2>No search results ... Try starting a new search or changing your current search</h2>
            
            }   
            
        </div>
        
    );
}
export default SearchPage;