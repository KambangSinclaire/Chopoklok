import Layout from "./Components/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotalInCart } from "./Features/Cart/CartSlice";
import { useEffect } from "react";
import Contact from './Pages/Contact';

function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotalInCart());
  }, [cartItems]);
  return <Layout />;
}

export default App;
