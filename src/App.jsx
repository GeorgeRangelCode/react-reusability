import Button from "./Button";
import { FcGoogle } from "react-icons/fc";

function App() {
  const onClick = () => {
    console.log("Logging in...");
  };

  return (
    <main>
      <Button style={{ color: "green" }} onClick={onClick}>
        <FcGoogle />
        Log in with Google
      </Button>
    </main>
  );
}

export default App;
