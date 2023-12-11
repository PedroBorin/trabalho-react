import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardList from "./components/CardList";
import CardDetails from "./components/CardDetails";
import AddCard from "./components/AddCard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <CardList>
                <p>
                  A lista é atualizada automaticamente após a criação de cada
                  carta!
                </p>
              </CardList>
            }
          />
          <Route path="/card/:id" element={<CardDetails />} />
          <Route path="/add" element={<AddCard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
