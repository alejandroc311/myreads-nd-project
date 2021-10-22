import { Link } from "react-router-dom";
import SearchPageInput from "./searchPageSubComponents/searchPageInput";
function SearchPageForm({onSubmit, userInput, onChange}){
    function handleSubmit(event){
        event.preventDefault();
        onSubmit();
    }
    function handleChange(value){
        onChange(value);
    }
    return(
        <form onSubmit={handleSubmit}>
            <div className="container-fluid">
                <div className="row d-flex justify-content-center">
                    <div className="col-2 d-flex justify-content-center align-items-center">
                        <Link className="btn bi bi-arrow-left" to="/"></Link>
                    </div>
                    <div className="col-10">
                        <SearchPageInput userInput={userInput} onChange={handleChange}/>
                    </div>
                </div>
            </div>
        </form>
    );

}

export default SearchPageForm;