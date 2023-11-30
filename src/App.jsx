import styles from "./style";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar, Home, Services, Footer } from "./components";

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route index element={<Home />} />
      <Route path="/services" element={<Services />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default App;
