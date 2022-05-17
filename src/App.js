import { CartContextProvider } from "./components/CartContext/CartContext";
import Rutas from "./routes/Rutas";

function App() {
  return (
    <CartContextProvider defaultValue={[]}>
      <Rutas />
    </CartContextProvider>
  );
}

export default App;
