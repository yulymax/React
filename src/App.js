import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/Navbar";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="¡Hola! 👋 Bienvenidx a nuestra tienda" />
      <Footer />
    </div>
  );
}

export default App;
