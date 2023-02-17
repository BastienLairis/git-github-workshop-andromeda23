import "./App.css";

//components
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Hello github workshop !</h1>
      <p>Modification depuis vsCode</p>
      <p>Modification depuis Github par un autre dev</p>
      <Footer />
    </div>
  );
}

export default App;
