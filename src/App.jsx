import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import BubbleArena from "./components/BubbleArena";
import AddBubbleForm from "./components/AddBubbleForm";
import colorNames from "daisyui/src/colors/colorNames";

const App = () => {
  return (
    <div className="">
      <NavBar />
      <BubbleArena />
      <Footer />
    </div>
  );
}

export default App;
