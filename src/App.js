import logo from './logo.svg';
import './App.css';
import Product from './Components/Product/Product';
import Navber from './Components/Navber/Navber';
import Shop from './Components/Shopp.js/Shop';

function App() {
  return (
    <div>
      <Navber />
      <Product />
      <Shop />
    </div>
  );
}

export default App;
