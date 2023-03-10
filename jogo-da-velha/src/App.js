import { Router } from "./Routes/Routes";
import { GlobalState } from "./Global/GlobalState";
import { GlobalStyled } from "./Global/GlobalStyled";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css'


function App() {
  return (
    <GlobalState>
      <GlobalStyled />
      <Router />
      <ToastContainer />
    </GlobalState>
  );
}

export default App;
