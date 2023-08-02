import React, { useContext, useEffect } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import { Card } from "antd";
import "./Products.scss";
const Products = () => {
  const { getProducts, products, addCart, cart } = useContext(ProductsContext);

  //se ejecuta cada vez que se monta el componente
  useEffect(() => {
    getProducts();
  }, []);


  return (
    <div className="products-container">
      {products.map((product) => {
        return (
          <Card
            key={product._id}
            title={product.name}
            bordered={false}
            style={{
              width: 300,
              border: "1px solid",
              borderColor: "pink",
            }}
          >
            <p>{product.price} €</p>
            {/* metemos addCart dentro de una función para que no se ejecute al cargar el componente */}
            <button onClick={() => addCart(product)}>Add cart</button>
          </Card>
        );
      })}
    </div>
  );
};

export default Products;
