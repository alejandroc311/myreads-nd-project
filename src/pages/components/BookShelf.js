import {RESPONSIVE} from "./../../constants"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import BookDisplay from "./BookDisplay";
function BookShelf({bookShelfHeader, filteredBookList}){
    console.log("Book List being passed down to Shelf: ", filteredBookList)
    const books = filteredBookList.map(book => <BookDisplay book={book}/>)
    return(
        <div>
    
            <div className="container-fluid">
                <p className="fw-light fs-4">{bookShelfHeader}</p>
                <Carousel
                    arrows={true} 
                    swipeable={true}
                    draggable={true}
                    showDots={true}
                    responsive={RESPONSIVE}
                    infinite={false}
                    centerMode={true}
                >
                {books}        
            </Carousel>
            </div>
        </div>
    );
}

export default BookShelf;