import "./Searchfield.css";

export default function Searchfield({ handleInput, filter }) {
  return (
    <input
      className="search"
      type="search"
      placeholder="Type to search..."
      value={filter}
      onChange={handleInput}
    />
  );
}
