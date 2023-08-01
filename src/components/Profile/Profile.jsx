import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { Card, Spin } from "antd";
import "./Profile.scss"

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
        bordered={false}
        style={{
          width: 300,
        }}
      >
        <p>{user.email}</p>
      </Card>
      <div className="message">Mensaje normal</div>
      <div className="success">Mensaje exitoso</div>
    </div>
  );
};

export default Profile;
