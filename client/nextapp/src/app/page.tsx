'use client'

import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header/Header";
import { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import { IProduct } from "./type";
import * as API from './api/api'
import Card from "./components/productCard/Card"

export default function Home() {
  const [products, setProducts] = useState<IProduct[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result:AxiosResponse<IProduct[]> = await API.getProducts();
        setProducts(result.data );
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [])
  console.log("hello",products)
  return (
    <div className={styles.page}>
        <Header />
     {products && products.length>0 && products.map((product)=>(
      <Card src={product.ImageUrl} name={product.name} key={product.id}/>
     ))}
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
