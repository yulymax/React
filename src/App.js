import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import ItemCount from "./components/ItemCount/ItemCount";
import NavBar from "./components/NavBar/Navbar";

function App() {
  return (
    <div>
      <NavBar />
      <div className="d-flex">
        <Content />
        <ItemCount />
      </div>

      <Footer />
    </div>
  );
}

export default App;
