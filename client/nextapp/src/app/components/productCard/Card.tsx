"use client";

import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Star from "../ratingStar/Star";

type ICardProps = {
  src?: string;
  name?: string;
  $color?: string;
  rating: number;
  price: number;
  onClick:()=>void
};

const Card: React.FC<ICardProps> = (props) => {
  const stars = Array(5).fill(0);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("sv-SE").format(price);
  };
  return (
    <CardSection $color={props.$color}>
      <div className="imageSection">
        <Image
          src={`/assets/${props.src}.png` || "/assets/savingAndCost.png"}
          alt={props.src || "savingAndCost.png"}
          width={200}
          height={163}
        />
        <div className="priceSection">
          <span>{formatPrice(props.price)} SEK</span>
        </div>
      </div>
      <div className="name">
        <span>{props.name}</span>
      </div>
      <div className="rating">
        <span>Ratings</span>
      </div>
      <div>
        {stars.map((_, index) => (
          <Star fill={index < props.rating ? true : false} key={index} />
        ))}
      </div>
      <button onClick={props.onClick}>ADD TO CART</button>
    </CardSection>
  );
};
export default Card;

const CardSection = styled.div<{$color?: string}>`
  width: 15rem;
  height: 20rem;
  border-radius: 0.375rem;
  background: #fff;
  box-shadow: 0px 30px 50px -30px rgba(0, 0, 0, 0.2),
    0px 50px 100px -20px rgba(50, 50, 93, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  justify-content: space-between;

  .imageSection {
    position: relative;
    .priceSection {
      position: absolute;
      bottom: 2%;
      right: 5px;
      display: flex;
      width: 88px;
      height: 32px;
      padding: 7px 10px;
      justify-content: center;
      align-items: center;
      /* gap: 10px;
      flex-shrink: 0; */
      border-radius: 16px;
      background: #fff;
      span {
        color: #1a364c;
        text-align: center;
        font-family: Inter;
        font-size: 12px;
        font-style: normal;
        font-weight: 600;
        line-height: 150%; /* 18px */
        letter-spacing: -0.264px;
      }
    }
  }
  .name {
    span {
      color: ${(props) => (props.$color ? props.$color : "black")};
      text-align: center;
      font-family: Inter;
      font-size: 12px;
      font-style: normal;
      font-weight: 600;
      line-height: 150%;
      letter-spacing: -0.264px;
    }
  }
  .rating {
    span {
      color: #222;
      text-align: center;
      font-family: Inter;
      font-size: 10px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
      letter-spacing: -0.22px;
    }
  }
  button {
    display: flex;
    width: 184px;
    height: 40px;
    justify-content: center;
    align-items: center;

    border-radius: 6px;
    background: ${(props) => props.$color || "yellow"};

    color: #fff;
    text-align: center;
    font-family: Inter;
    font-size: 10px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.22px;
  }
`;
