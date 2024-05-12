const SearchBox = (props) => {
  return (
    <div className="py-6 px-8 flex justify-center items-center">
      <input
        className="border border-gray-800 rounded-lg outline-none h-9 "
        type="search"
        placeholder={props.placeholder}
        onChange={props.searchChange}
      />
    </div>
  );
};

export default SearchBox;
