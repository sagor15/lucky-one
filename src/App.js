import logo from './logo.svg';
import './App.css';
import Product from './Components/Product/Product';
import Navber from './Components/Navber/Navber';
import Shop from './Components/Shopp.js/Shop';
import Qoustion from './Components/Questionone/Qoustion';
import QoustionTwo from './Components/QoustionTwo/QoustionTwo';

function App() {
  return (
    <div>
      <Navber />
      <Product />
      <Shop />
      <Qoustion />
      <QoustionTwo></QoustionTwo>
    </div>
  );
}

export default App;
