import Cart from "./pages/Cart/Index";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Success from "./pages/Success";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { useSelector } from "react-redux";



const App = () => {
  const user = useSelector(state => state.user.currentUser)
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<ProductList />}>
          <Route path=":category" element={<ProductList />} />
        </Route>
        <Route path="product" element={<Product />}>
          <Route path=":id" element={<Product />} />
        </Route>
        <Route path="cart" element={<Cart />}></Route>
        <Route path="success" element={<Success />}></Route>
        <Route path="login" element={user ? <Navigate replace to="/" /> : <SignIn />}></Route>
        <Route path="register" element={user ? <Navigate replace to="/" /> : <SignUp />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
