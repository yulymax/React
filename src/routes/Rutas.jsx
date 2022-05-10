import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";

const Rutas = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Layout />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Rutas;
