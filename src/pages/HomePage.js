import { update } from "../BooksAPI";
import * as React from "react";
import GliderComponent from "react-glider";
import Slider from "react-slick";
import BookDisplay from "./components/BookDisplay";
function HomePage({bookList}){
    console.log("Home Page Test:", bookList);
    const books = bookList.map((book)=>{
        return(
            <BookDisplay book={book}/>
        );
    });
    let settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              arrows: true,
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 772,
            settings: {
              arrows: true,
              dots: true,
              infinite: true,
              speed: 500,
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 1
            }
          },
          {
            breakpoint: 600,
            settings: {
                arrows: true,
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true
            }
          }
        ]
      };
    return(
        <div className="container">
            <Slider {...settings}>
                {books}        
            </Slider>
        </div>
                        
    )
}

export default HomePage;