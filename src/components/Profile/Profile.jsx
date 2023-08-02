import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { Card, Spin } from "antd";
import "./Profile.scss";

const Profile = () => {
  const { user, getUserInfo } = useContext(UserContext);

  useEffect(() => {
    getUserInfo();
  }, []);
  if (!user) {
    return <Spin size="large" />;
  }
  return (
    <div>
      <Card
        title={user.name}
        bordered={true}
        style={{
          width: 300,
          borderColor:"pink",
          marginTop:"10px"
        }}
      >
        <p>{user.email}</p>
      </Card>
      <div>
        {user.orderIds.map((order) => {
          return (
            <div key={order._id} className="order-card">
              <p>Nº pedido:{order._id}</p>
              <p>{order.productIds.map(product => {
                return <div>
                    <img style={{width:"100px"}} src="https://static.vecteezy.com/system/resources/previews/002/563/549/original/white-3d-pedestal-background-with-realistic-palm-leaves-for-cosmetic-product-presentation-or-fashion-magazine-free-vector.jpg" alt="" />
                    <span>{product.name} {product.price} €</span>
                </div>
              })}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
