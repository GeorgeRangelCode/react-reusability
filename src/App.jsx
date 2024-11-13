//import Avatar from "./components/Avatar";
import Menu from "./components/Menu/Menu";
import MenuButton from "./components/Menu/MenuButton";
import MenuDropdown from "./components/Menu/MenuDropdown";

function App() {
  /**
   * Challenge:
   * 1. Convert the MenuButton to accept children and
   *    render them. (In this case, the children will
   *    just be the button text)
   * 2. Change the MenuButton below to pass "Sports"
   *    in as a child of the component instead of by
   *    using the `buttonText` prop.
   *
   * NOTE: It's fine that the menu is still broken, I
   * promise we're getting there! 😃
   */

  return (
    <main>
      {/*   <Avatar src="./images/bob.jpg" alt="Bob Ziroll" />
      <br />
      <Avatar>BZ</Avatar>
      <br />
      <Avatar /> */}
      <Menu>
        <MenuButton>Sports</MenuButton>
        <MenuDropdown
          items={["Tennis", "Racquetball", "Pickleball", "Squash"]}
        />
      </Menu>
    </main>
  );
}

export default App;
