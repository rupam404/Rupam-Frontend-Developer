const SearchBar = ({term,searchKeyWord}) => {

  const getSearchterm=(e)=>{
    searchKeyWord(e.target.value);
}

  return (
    <div className="SearchBar">

      <div className="search-item"> 
        <label>Search-Bar :</label>
        <input type="text" placeholder="search by status" value={term} onChange={getSearchterm}/>
      </div>

      <div className="search-item">
        <label>Search-Bar :</label>
        <input type="text" placeholder="search by landing no" />
      </div>

      <div className="search-item">
        <label>Search-Bar :</label>
        <input type="text" placeholder="search by date" />
      </div>

    </div>
  );
};

export default SearchBar;
