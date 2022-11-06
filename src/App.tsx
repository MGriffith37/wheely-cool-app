import { Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Options } from "./pages/Options";
import { Wheel } from "./pages/Wheel";
import { Navbar } from "./components/Navbar";
import { WheelOptionProvider } from "./context/WheelOptionContext";

function App() {
  return (
    <>
      <WheelOptionProvider>
        <Navbar />
        <Container className="mb-4">
          <Routes>
            <Route path="/wheely-cool-app/" element={<Options />} />
            <Route path="/wheely-cool-app/wheel" element={<Wheel />} />
          </Routes>
        </Container>
      </WheelOptionProvider>
    </>
  );
}

export default App;
