import Button from "./Button";
import { FcGoogle } from "react-icons/fc";

function App() {
  const onClick = () => {
    console.log("Logging in...");
  };

  return (
    <main>
      <Button variant="success" size="lg" className="green" onClick={onClick}>
        <FcGoogle />
        Log in with Google
      </Button>
      <Button variant="warning" size="sm" className="green" onClick={onClick}>
        Log in with Google
      </Button>
      <Button variant="danger" className="green" onClick={onClick}>
        Log in with Google
      </Button>
      <Button>Log in with Google</Button>
    </main>
  );
}

export default App;
