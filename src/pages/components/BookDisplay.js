import BookDisplaySelectMenu from "./bookDisplayComponents/BookDisplaySelectMenu";

function BookDisplay({book:{imageLinks: {smallThumbnail} = "", title, authors = [], shelf = "none", id}, currentList, updateHandler}){
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
    function handleUpdate(){
        updateHandler();
    } 
    //ADD dropdown menu to select options. 
    return(
        <div className="card">
            <img className="card-img-top" src={smallThumbnail} alt={"Background thumbnail for book"}></img>
            <div className="card-body">
                <div className="card-title">{"Title: " + title}</div>
                {getAuthorsList()}
            </div>
            <div className="card-footer">
                <BookDisplaySelectMenu updateHandler={handleUpdate} currentList={currentList} shelf={shelf} id={id}/>
            </div>
        </div>
    );
}
export default BookDisplay;