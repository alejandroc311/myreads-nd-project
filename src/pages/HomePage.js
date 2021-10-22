import { update } from "../BooksAPI";
import { CURRENTLY_READING } from "../constants";
import { WANT_TO_READ } from "../constants";
import { READ } from "../constants";
import BookShelf from "./components/BookShelf";
function HomePage({bookList}){
    console.log("Home Page Test:", bookList);
    const currentlyReadingList = bookList.filter(({shelf}) => shelf == CURRENTLY_READING);
    const wantToReadList = bookList.filter(({shelf}) => shelf == WANT_TO_READ);
    const readList = bookList.filter(({shelf}) => shelf == READ)

    return(
    
        <div>
            <BookShelf filteredBookList={currentlyReadingList} bookShelfHeader={"Currently Reading"}/>
            <BookShelf filteredBookList={wantToReadList} bookShelfHeader={"Want to Read"}/>
            <BookShelf filteredBookList={readList} bookShelfHeader={"Read"}/>
        </div>
                        
    )
}

export default HomePage;