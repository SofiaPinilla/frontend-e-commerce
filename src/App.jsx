import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Login from "./components/Login/Login";
import { UserProvider } from "./context/UserContext/UserState";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import { ProductsProvider } from "./context/ProductsContext/ProductsState";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import { OrdersProvider } from "./context/OrdersContext/OrdersState";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <ProductsProvider>
            <OrdersProvider>
              <Header />
              <Routes>
                <Route path="/" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </OrdersProvider>
          </ProductsProvider>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
