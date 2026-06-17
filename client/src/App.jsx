import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Livres from "./pages/Livres";
import MesEmprunts from "./pages/MesEmprunts";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h1>Bibliothèque numérique : Maryem Belouaar</h1>

        <nav>
          <Link to="/">Livres</Link>
          {" | "}
          <Link to="/emprunts">Mes emprunts</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Livres />} />
          <Route path="/emprunts" element={<MesEmprunts />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;