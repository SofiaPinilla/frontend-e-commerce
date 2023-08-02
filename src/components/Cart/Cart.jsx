import React, { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import { Divider, List } from "antd";
import { OrdersContext } from "../../context/OrdersContext/OrdersState";

const Cart = () => {
  const { cart, clearCart } = useContext(ProductsContext);
  const {createOrder} = useContext(OrdersContext)

  const data = cart.map((product) => product.name);

  return (
    <div>
      <Divider orientation="left">Cart</Divider>
      <List
        size="small"
        header={<div>Productos</div>}
        footer={
          <div>
            <button onClick={clearCart}>Vaciar carrito</button>
            <button onClick={()=>{
                createOrder(cart)
                clearCart()
            }}>Comprar</button>
          </div>
        }
        bordered
        dataSource={data}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
    </div>
  );
};

export default Cart;
