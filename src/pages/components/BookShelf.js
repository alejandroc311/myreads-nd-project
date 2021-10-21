import {responsive} from "../constants"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import BookDisplay from "./components/BookDisplay";

function BookShelf({bookShelfHeader, filteredBookList}){
    const books = filteredBookList.map((book)=>{
        return(
            <BookDisplay book={book}/>
        );
    });
    return(
        <div>
            <div className="container-fluid">
                <h2>
                    {bookShelfHeader}
                </h2>
            </div>
            <div className="container-fluid">
                <Carousel
                    arrows={true} 
                    swipeable={true}
                    draggable={true}
                    showDots={true}
                    responsive={responsive}
                    infinite={true}
                    centerMode={true}
                    itemClass={"bookShelfBookDisplay"}
                >
                {books}        
            </Carousel>
            </div>
        </div>
    );
}

export default BookShelf;