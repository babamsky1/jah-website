import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Beyond from "./pages/Beyond";
import Booking from "./pages/Booking";
import Main from "./pages/Main";
import Programs from "./pages/Program";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/beyond" element={<Beyond />} />
      <Route path="/about" element={<About />} />
      <Route path="/booking" element={<Booking />} />
    </Routes>
  );
}

export default App;
