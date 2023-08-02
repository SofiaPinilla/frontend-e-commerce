import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserState";
import { UserDeleteOutlined, UserAddOutlined } from "@ant-design/icons";
import "./Header.scss";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
const Header = () => {
  const { token, logout } = useContext(UserContext);
  const { cart } = useContext(ProductsContext);
  const navigate = useNavigate();
  //se ejecuta cada vez que cart cambia
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const logoutUser = () => {
    logout();
    navigate("/login");
  };
  return (
    <div className="header">
      <Link to="/">Home /</Link>
      {token ? (
        <>
          <Link to="/profile"> Profile / </Link>
          <Link to="/cart" style={{ marginRight: "5px" }}>
            <Badge
              count={cart.length}
              size="small"
              style={{ marginRight: "5px" }}
            >
              <ShoppingCartOutlined
                style={{ color: "#eb2f96", width: "20px" }}
              />
            </Badge>
          </Link>
          {/* <UserDeleteOutlined onClick={logoutUser} /> */}

          <button onClick={logoutUser}>
            Logout <UserDeleteOutlined />
          </button>
        </>
      ) : (
        <Link to="/login">
          Login <UserAddOutlined />
        </Link>
      )}
    </div>
  );
};

export default Header;
