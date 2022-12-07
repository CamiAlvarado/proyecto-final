import './App.css';
import Home from './Components/Home';
import Header from './Components/Header';
import Cards from './Components/Cards';
import Footer from './Components/Footer';
import Movies from './Components/Movies';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <>

      <Header />
      {/* <Home /> */}
      <Movies />
      {/* <Cards /> */}
      <Footer />
    </>
  );

  <BrowserRouter>
    <Routes>
      <Route path='/Cards' element={<Cards />} />
      {/* <Route path='/' element={<Cards />} /> */}
    </Routes>
  </BrowserRouter>
}

export default App;
