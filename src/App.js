import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import ItemCount from "./components/ItemCount/ItemCount";
import NavBar from "./components/NavBar/Navbar";

function App() {
  function onAdd(valor) {
    console.log(`Llame al onAdd con ${valor}`);
  }

  return (
    <div>
      <NavBar />
      <div className="d-flex">
        <Content />
        <ItemCount stock={5} initial={1} onAdd={onAdd} />
        <ItemCount stock={10} initial={4} onAdd={onAdd} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
