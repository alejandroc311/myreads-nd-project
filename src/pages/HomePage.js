import { update } from "../BooksAPI";
function HomePage({bookList}){
    console.log("Home Page Test:", bookList);
    const books = bookList.map(({id, shelf})=>{
        return(
            <h2>
                Book Id: {id} and Book Status: {shelf}
            </h2>
        );
    });
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <div className="card">
                        {books}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;