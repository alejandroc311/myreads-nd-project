import { useState } from "react";
import { search } from "../../../BooksAPI";
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
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-10">
                        <SearchPageInput userInput={userInput} onChange={handleChange}/>
                    </div>
                </div>
            </div>
        </form>
    );

}

export default SearchPageForm;