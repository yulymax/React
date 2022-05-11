import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import Layout from "../components/Layout/Layout";

const Rutas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <ItemListContainer greeting="¡Hola! 👋 Bienvenidx a nuestra tienda" />
            }
          />
          <Route
            path="/category/:id"
            element={
              <ItemListContainer greeting="¡Hola! 👋 Bienvenidx a nuestra tienda" />
            }
          />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Rutas;
