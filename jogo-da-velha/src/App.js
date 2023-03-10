import { Router } from "./Routes/Routes";
import { GlobalState } from "./Global/GlobalState";
import { GlobalStyled } from "./Global/GlobalStyled";

function App() {
  return (
    <GlobalState>
      <GlobalStyled />
      <Router />
    </GlobalState>
  );
}

export default App;
