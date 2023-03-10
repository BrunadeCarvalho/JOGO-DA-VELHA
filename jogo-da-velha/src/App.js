import { GlobalState } from "./Global/GlobalState";
import { GlobalStyled } from "./Global/GlobalStyled";
import { BodyStyled } from "./styled";

function App() {
  return (
    <GlobalState>
      <GlobalStyled />
      
    </GlobalState>
  );
}

export default App;
