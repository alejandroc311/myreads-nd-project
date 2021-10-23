import { BOOK_SHELF_OPTIONS } from "../../../constants";
import { update } from "../../../BooksAPI";
function BookDisplaySelectMenu({id:bookObjectId, shelf:bookObjectShelf, currentList, updateHandler}){
    //The search results don't return JSON objects with a shelf. 
    //The JSON objects' "shelf" key is set to null via previous destructuring
    //The JSON objects DO have id keys. 
    //I can compare the user's current book list's ids against the id of the book being passed into the BookDisplay
    //If the id of the current element of the iterated booklist is the same as the book that was passed into the BookDisplay
    //Then the shelf of the book that was passed into the BookDisplay will be set to that of the element of the iterated user's current booklist
    //This is done to ensure that search results that match entries of the user's current booklist are assigned the correct shelf.
    currentList.map(({id, shelf:currentListShelf}) => {
        id == bookObjectId ? bookObjectShelf = currentListShelf : bookObjectShelf = bookObjectShelf
    });
    function handleUpdate(){
        updateHandler();
    }
    const bookDisplaySelectMenuItems = BOOK_SHELF_OPTIONS.map((option) => {
        return(
            bookObjectShelf == option ? 
                <div key={bookObjectId} className="dropdown-item container-fluid">
                    <div className="row d-flex align-items-center">
                        <div className="col-2">
                            <button onClick={() => {update({id:bookObjectId}, option); handleUpdate()}} className="btn bi bi-check-square"></button>
                        </div>
                        <div className="col-10">
                        {option}
                        </div>
                    </div>
                </div>
            :
                <div className="dropdown-item container-fluid">
                    <div className="row d-flex align-items-center">
                        <div className="col-2">
                            <button onClick={() => {update({id:bookObjectId}, option).then((results) => handleUpdate())}} className="btn bi bi-square"></button>
                        </div>
                        <div className="col-10">
                            {option}
                        </div>
                    </div>
                </div>
        );
    });
    return(
        <div className="dropdown">
            <button className="btn bi bi-three-dots dropdown-toggle" data-bs-toggle="dropdown"></button>
            <div className="dropdown-menu">
                {bookDisplaySelectMenuItems}
            </div>
        </div>
    );
}
export default BookDisplaySelectMenu;