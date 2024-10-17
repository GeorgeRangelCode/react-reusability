import Button from "./Button";
import { FaMoneyBill } from "react-icons/fa";

/**
 * Challenge: Add the "FaMoneyBill" icon to the left
 * of the "Buy now!" text in the button
 */

function App() {
  return (
    <main>
      <Button>
        {/*Icon goes here*/}
        <FaMoneyBill />
        Buy now!
      </Button>
    </main>
  );
}

export default App;
