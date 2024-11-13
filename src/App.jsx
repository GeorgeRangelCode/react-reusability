//import Avatar from "./components/Avatar";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <main>
      {/*   <Avatar src="./images/bob.jpg" alt="Bob Ziroll" />
      <br />
      <Avatar>BZ</Avatar>
      <br />
      <Avatar /> */}
      <Menu
        buttonText="Sports"
        items={["Tennis", "Racquetball", "Pickleball", "Squash"]}
      />
    </main>
  );
}

export default App;
