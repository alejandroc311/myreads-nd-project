function BookDisplay({book}){
    const {imageLinks: {smallThumbnail}} = book
    return(
        <div className="card">
            <img className="card-img-top" src={smallThumbnail}>
                
            </img>
            <div className="card-body">

            </div>
        </div>
    );
}
export default BookDisplay;