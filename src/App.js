import { Routes } from "./routes/Routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
