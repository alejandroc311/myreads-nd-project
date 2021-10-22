function BookDisplay({book}){
    console.log(book);
    const {imageLinks: {smallThumbnail} = "", title, authors = []} = book ;
    console.log("Book being passed down from shelf: ", book);

    function getAuthorsList() {
        return(authors.length == 0 ? 
            <div className="card-text">{"No Author Available"}</div>
        :
            authors.map((author) => {
                return(
                    <div className="card-text">{"Author: " + author}</div>
                );
            })
        );
    } 
    return(
        <div className="card">
            <img className="card-img-top" src={smallThumbnail}>

            </img>
            <div className="card-body">
                <div className="card-title">{"Title: " + title}</div>
                {getAuthorsList()}
            </div>
            <div className="card-footer">
                <button className="btn bi bi-three-dots"></button>
            </div>
        </div>
    );
}
export default BookDisplay;