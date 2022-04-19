import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div>
      <NavBar />
      <div className="d-flex">
        <Sidebar />
        <Content />
      </div>

      <Footer />
    </div>
  );
}

export default App;
