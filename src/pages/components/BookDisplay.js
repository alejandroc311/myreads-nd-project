function BookDisplay({book:{imageLinks: {smallThumbnail} = "", title, authors = [], shelf = "none"}}){
    function getAuthorsList() {
        return(authors.length == 0 ? 
            <div className="card-text">{"No Author Available"}</div>
        :
            authors.map((author) => {
                return(
                    <div key={author} className="card-text">{"Author: " + author}</div>
                );
            })
        );
    } 
    //ADD dropdown menu to select options. 
    return(
        <div className="card">
            <img className="card-img-top" src={smallThumbnail}></img>
            <div className="card-body">
                <div className="card-title">{"Title: " + title}</div>
                {getAuthorsList()}
            </div>
            <div className="card-footer">
                <button className="btn bi bi-three-dots dropdown-toggle"></button>
            </div>
        </div>
    );
}
export default BookDisplay;