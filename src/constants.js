export const RESPONSIVE = {
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1200, min: 992 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    bigMobile: {
      breakpoint: { max: 992, min: 772 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    smallMobile:{
        breakpoint:{max: 772, min:400},
        items: 1,
        slidesToSlide: 1,
    }
  };

  export const CURRENTLY_READING = "currentlyReading";
  export const WANT_TO_READ = "wantToRead";
  export const READ = "read";