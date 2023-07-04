import { BrowserRouter, Route, Routes } from "react-router-dom";
import { App } from "../App.tsx";
import { Home } from "../pages/home/home.tsx";
import { Produtos } from "../pages/produtos/produtos.tsx";
import { Devolucao } from "../pages/devolucao/devolucao.tsx";
import { PDV } from "../pages/pdv/pdv.tsx";

export function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/devolucao" element={<Devolucao />} />
        <Route path="/pdv" element={<PDV />} />
      </Routes>
    </BrowserRouter>
  );
}
