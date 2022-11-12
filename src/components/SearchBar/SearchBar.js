import Style from "../SearchBar/SearchBar.css";

const SearchBarTemplate = () => {
  const OnSearch = (event) => {
    console.log(event.target.value);
  };
  return (
    <div>
      <form className="form-wrapper cf">
        <input
          type="text"
          placeholder="Search here..."
          required
          onChange={OnSearch}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBarTemplate;
