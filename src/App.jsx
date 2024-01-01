import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Carrinho from "./pages/Carrinho";
import PaginaErro from "./pages/PaginaErro";

import "./App.css";
import { CarrinhoProvider } from "./context/carrinhoContext";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <CarrinhoProvider>
          <Route path="/" element={<Home />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="*" element={<PaginaErro />} />
        </CarrinhoProvider>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
