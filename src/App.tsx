import { Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Options } from "./pages/Options";
import { Wheel } from "./pages/Wheel";

function App() {
  return (
    <Container className="mb-4">
      <Routes>
        <Route path="/wheely-cool-app/" element={<Options />} />
        <Route path="/wheely-cool-app/wheel" element={<Wheel />} />
      </Routes>
    </Container>
  );
}

export default App;
