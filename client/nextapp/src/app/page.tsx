"use client";

import Header from "./components/header/Header";
import {AxiosResponse} from "axios";
import {useState, useEffect} from "react";
import {IProduct} from "./type";
import * as API from "./api/api";
import Card from "./components/productCard/Card";
import styled from "styled-components";

export default function Home() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<IProduct>();

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

  console.log("sele", selectedProduct);
  return (
    <HomePage>
      <Header />
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
                setSelectedProduct(product);
              }}
            />
          ))}
      </div>
    </HomePage>
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
