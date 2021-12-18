import NavBar from "./components/NavBar";
import Home from "./Pages/Home";
import Announcement from "./components/Announcement";
import ProductList from "./Pages/ProductList";
import Product from "./Pages/Product";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import PaymentForm from "./components/PaymentForm";
import stripeContainer from "./components/stripeContainer";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Routes,
  Navigate,
  Switch
} from "react-router-dom";
import Products from "./components/Products";


const App =() => {
  const user = true;
  return(
    <Router>
      <Routes>
      {/* latest react dom version */}
        <Route path="/" element={<Home/>} /> 
        <Route path="/products/:category" element={<ProductList/>} />
        <Route path="/product/:id" element={<Product/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={user ? <Navigate to="/"/> : <Login/>} />
        <Route path="/register" element={user ? <Navigate to="/"/> : <Register/>} />



      </Routes>
      
    </Router>
  ) 
};

export default App;
