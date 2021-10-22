import { update } from "../BooksAPI";
import BookShelf from "./components/BookShelf";
function HomePage({bookList}){
    console.log("Home Page Test:", bookList);
    

    return(
    
        <div className="container-fluid">
            <BookShelf filteredBookList={bookList} bookShelfHeader={"All"}/>
        </div>
                        
    )
}

export default HomePage;