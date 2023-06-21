import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Cards from './Components/Card';
import CardDetail from './Components/CardDetail';
import Checkout from "./Components/Checkout";
import Header from './Components/Header';
import BookDetails from "./Components/BookDetails"
import { Routes,Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Cards />}></Route>
        <Route path="/cart/:id" element={<CardDetail />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/bookDetails" element={<BookDetails />}></Route>
      </Routes>
    </>
  );
}

export default App;
