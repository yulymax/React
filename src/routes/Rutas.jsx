import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import Layout from "../components/Layout/Layout";
import CartContainer from "../components/CartContainer/CartContainer";

const Rutas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <ItemListContainer greeting="¡Bienvenido a tienda PetAbby" />
            }
          />
          <Route
            path="/category/:id"
            element={
              <ItemListContainer greeting="Hasta que no hayas amado a un animal parte de tu alma estara dormida" />
            }
          />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartContainer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Rutas;
