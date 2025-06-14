import "./searchbar.css";

interface SearchBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <div className="input-group searchbar flex items-center">
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="searchbar focus:ring-0"
        placeholder="Search..."
      />
      <div id="lens">
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default SearchBar;
