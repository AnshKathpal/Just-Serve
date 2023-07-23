import logo from "./logo.svg";
import "./App.css";

import { MainRoutes } from "./Routes/MainRoutes";

import Homepage from "./pages/Homepage";
import Volunteers from "./pages/Volunteers";



function App() {
  return (
    <div className="App">
        <MainRoutes />
    </div>
  );
}

export default App;
