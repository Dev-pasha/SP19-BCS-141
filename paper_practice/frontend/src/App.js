import './App.css';
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Register />
      {/* <Login /> */}
      <Footer />
    </div>
  );
}

export default App;
