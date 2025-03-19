import "./App.css";
import Biodata from "./components/Biodata";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden ">
      <Navbar />
      <Biodata />
    </main>
  );
};

export default App;
