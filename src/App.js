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
import Products from "./components/Products";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

const App =() => {
  const user = true;
  
  return(
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/products/:category">
          <ProductList/>
        </Route>
        <Route path="/product/:id">
          <Product/>
        </Route>
        <Route path="/cart">
          <Cart/>
        </Route>
        <Route path="/register">
        {user ? <Redirect to="/"/> : <Register/>}
        </Route>
        <Route path="/login">
          {user ? <Redirect to="/"/> : <Login/>}
        </Route>
      </Switch>
    </Router>
  ) 
};

export default App;
