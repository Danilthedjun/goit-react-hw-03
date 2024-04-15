export default function SearchBox({ value, onSearch }) {
  return (
    <div>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        value={value}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}
