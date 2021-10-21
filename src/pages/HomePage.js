import { update } from "../BooksAPI";
import {responsive} from "../constants"
import * as React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import BookDisplay from "./components/BookDisplay";
function HomePage({bookList}){
    console.log("Home Page Test:", bookList);
    const books = bookList.map((book)=>{
        return(
            <BookDisplay book={book}/>
        );
    });
    
    return(
        <div className="container-fluid">
            <Carousel 
             swipeable={true}
             draggable={true}
             showDots={true}
             responsive={responsive}
             infinite={true}
             centerMode={true}
            >
                {books}        
            </Carousel>
        </div>
                        
    )
}

export default HomePage;