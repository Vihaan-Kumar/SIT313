import { Menu } from "semantic-ui-react";
import SearchBar from "./Searchbar";

function Header() {
  return (
    <Menu inverted>
      <Menu.Item header>DEV@Deakin</Menu.Item>
      <Menu.Item name="Home"/>
      <Menu.Item name="Post"/>
      <Menu.Item name="Login"/>
      
      <Menu.Menu position="right">
        <Menu.Item>
        <SearchBar/>
      </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}

export default Header;
