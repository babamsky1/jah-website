import { Route, Routes } from "react-router-dom";
import Beyond from "../src/pages/Beyond";
import Main from "../src/pages/Main";
import Programs from "../src/pages/Program";

function About() {
  return <h1 style={{ padding: 40 }}>About (coming soon)</h1>;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/beyond" element={<Beyond />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
