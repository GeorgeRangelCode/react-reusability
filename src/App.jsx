//import Avatar from "./components/Avatar";
import Menu from "./components/Menu/Menu";
import MenuButton from "./components/Menu/MenuButton";
import MenuDropdown from "./components/Menu/MenuDropdown";
import MenuItem from "./components/Menu/MenuItem";

function App() {
  const sports = ["Tennis", "Racquetball", "Pickleball", "Squash"];
  return (
    <main>
      <Menu>
        <MenuButton>Sports</MenuButton>
        <MenuDropdown>
          {sports.map((sport) => (
            <MenuItem key={sport}>{sport}</MenuItem>
          ))}
        </MenuDropdown>
      </Menu>
    </main>
  );
}

export default App;
