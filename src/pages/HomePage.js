import React from "react";
import { CURRENTLY_READING } from "../constants";
import { WANT_TO_READ } from "../constants";
import { READ } from "../constants";
import {Link} from "react-router-dom";
import BookShelf from "./components/BookShelf";
function HomePage({bookList, updateHandler}){
    console.log("Home Page Test:", bookList);
    const currentlyReadingList = bookList.filter(({shelf}) => shelf == CURRENTLY_READING);
    const wantToReadList = bookList.filter(({shelf}) => shelf == WANT_TO_READ);
    const readList = bookList.filter(({shelf}) => shelf == READ)
    function handleUpdate(){
        updateHandler();
    }

    return(
    
        <div>
            <Link className="btn bi bi-search my-3" to="/search"><p className="fw-light fs-6">Explore new books!</p></Link>
            <BookShelf filteredBookList={currentlyReadingList} updateHandler={handleUpdate} bookShelfHeader={"Currently Reading"}/>
            <BookShelf filteredBookList={wantToReadList} updateHandler={handleUpdate} bookShelfHeader={"Want to Read"}/>
            <BookShelf filteredBookList={readList} updateHandler={handleUpdate} bookShelfHeader={"Read"}/>
        </div>
                        
    )
}

export default HomePage;