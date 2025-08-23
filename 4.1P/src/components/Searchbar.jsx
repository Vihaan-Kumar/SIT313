import { Input } from "semantic-ui-react";

function SearchBar() {
  return (
    <Input
      icon="search"
      placeholder="Search..."
      style={{ width: "400px", marginLeft: "1rem", marginRight: "1rem" }}
    />
  );
}

export default SearchBar;
