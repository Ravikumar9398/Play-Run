import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import ProductsItem from "./components/ProductsItem";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/product/:id" Component={ProductsItem} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
