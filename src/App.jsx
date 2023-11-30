import styles from "./style";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar, Home, Services, About, Footer } from "./components";

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route index element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default App;
