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
    function handleUpdate(){
        updateHandler();
    }
    
    useEffect(()=> {
        console.log("The User Input and Results: ", userInput, searchResults);
    }, [userInput, searchResults]);
    return(
        <div>
            <SearchPageForm onSubmit={handleSubmit} onChange={handleChange} userInput={userInput}/>
            {
                searchResults === undefined ? 
                    <p className="fw-light fs-4">No search results ... Try starting a new search or changing your current search</p>
                :
                    searchResults.length ? 
                            <BookShelf currentList={bookList} filteredBookList={searchResults} updateHandler={handleUpdate} bookShelfHeader={"Search Results"} />
                        :
                            <p className="fw-light fs-4">No search results ... Try starting a new search or changing your current search</p>
            
            }   
            
        </div>
        
    );
}
export default SearchPage;