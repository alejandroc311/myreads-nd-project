import { update } from "../BooksAPI";
import BookShelf from "./components/BookShelf";
function HomePage({bookList}){
    console.log("Home Page Test:", bookList);
    
    //TODO add three carousels to represent each shelf. Map through results to place them in the correct shelf
    //add headers to identify each shelf/carousel. 
    //maybe compose the shelf/carousel and then only call it instead of declaring it thrice? 
    return(
    
        <div className="container-fluid">
            
        </div>
                        
    )
}

export default HomePage;