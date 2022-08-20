import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import LoadPopUp from "./components/loadPopUp";
import BubbleArena from "./components/BubbleArena";

const App = () => {
  return (
    <div>
      <NavBar />
      <LoadPopUp />
      <BubbleArena />
      <Footer />
    </div>
  );
}

export default App;
