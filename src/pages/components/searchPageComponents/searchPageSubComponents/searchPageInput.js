function SearchPageInput({onChange, userInput}){
    function handleChange({target:{value}}){
        onChange(value);
    }
    return(
        <div>
            <label className="form-text" htmlFor="bookSearchInput">Explore</label>
            <div className="input-group">
                <button className="btn bi bi-search"></button>
                <input onChange={handleChange} value={userInput} className="form-control" name="bookSearchInput" type="text" placeholder="Enter a book or author here!" aria-describedby="bookSearchInputTip"></input>
                
            </div>
            <div id="bookSearchInputTip" className="form-text"> Ex: Tolstoy, Shakespeare, Kafka</div>
        </div>
       
    );

}
export default SearchPageInput;