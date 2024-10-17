import Button from "./Button";
import { FcGoogle } from "react-icons/fc";

/**
 * Challenge: Add an onClick handler to the Button
 * component instance (the one on this page). Then
 * make whatever changes you need for it to actually
 * work.
 *
 * Clicking the button should log "Logging in..."
 * to the console.
 */

function App() {
  const handleClick = () => {
    console.log("Logging in...");
  };

  return (
    <main>
      <Button handleClick={handleClick}>
        <FcGoogle />
        Log in with Google
      </Button>
    </main>
  );
}

export default App;
