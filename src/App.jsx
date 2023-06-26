import "./App.css";
import GetAllComponent from "./components/getAllComponent/getAllComponent";
import NavBar from "./components/navBar/navBar";
function App() {
  return (
    <div className="container">
      <NavBar />
      <GetAllComponent />
    </div>
  );
}

export default App;
