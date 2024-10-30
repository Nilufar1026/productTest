"use client";

import Header from "./components/header/Header";
import {AxiosResponse} from "axios";
import {useState, useEffect} from "react";
import {IProduct} from "./type";
import * as API from "./api/api";
import Card from "./components/productCard/Card";
import styled from "styled-components";
import CartModal from "./components/cartModal/CardModal";

export default function Home() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [orders, setOrders] = useState<IProduct[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result: AxiosResponse<IProduct[]> = await API.getProducts();
        setProducts(result.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const addToCard = (product: IProduct) => {
    setOrders([...orders, product]);
  };
  console.log("#€", showModal);
  return (
    <>
      {showModal ? (
        <CartModal onClose={() => setShowModal(false)} orders={orders} />
      ) : (
        <HomePage>
          <Header
            cartNumber={orders.length}
            onClick={() => {
              orders.length !== 0 && setShowModal(!showModal);
            }}
          />
          <div className="cards">
            {products &&
              products.length > 0 &&
              products.map((product, index) => (
                <Card
                  src={product.ImageUrl}
                  name={product.name}
                  key={product.id || index}
                  $color={product.color}
                  rating={product.rating}
                  price={product.price}
                  onClick={() => {
                    addToCard(product);
                  }}
                />
              ))}
          </div>
        </HomePage>
      )}
    </>
  );
}

const HomePage = styled.div`
  width: 100%;
  background-color: #f9ffff;
  padding: 9rem 20rem;

  .cards {
    width: 100%;
    margin-top: 5rem;
    display: flex;
    justify-content: space-around;
    gap: 3rem;
  }
`;
