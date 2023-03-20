import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import NavBar from './pages/NavBar';
import About from './pages/About';
import Layout from './pages/Layout';
import NoPage from './pages/NoPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Home />} />
          <Route path="contact" element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
