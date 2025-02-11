import "./App.css";
import ControlPanel from "./components/ControlPanel/ControlPanel";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <ControlPanel />
      </main>
    </>
  );
}

export default App;
