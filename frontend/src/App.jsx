import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Education from "./pages/Education";
import "leaflet/dist/leaflet.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edu" element={<Education />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
