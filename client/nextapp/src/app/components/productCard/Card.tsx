import React from "react";
import styled from "styled-components";
import Image from "next/image";

type CardProps = {
  src?: string;
  name?: string;
};
const CardSection = styled.div`
  width: 12.5rem;
  height: 18.75rem;
  border-radius: 0.375rem;
  background: #fff;
  box-shadow: 0px 30px 50px -30px rgba(0, 0, 0, 0.2),
    0px 50px 100px -20px rgba(50, 50, 93, 0.25);
`;

const Card: React.FC<CardProps> = (props) => {
  return (
    <CardSection>
      <Image src={`/assets/${props.src}.png` || "/assets/savingAndCost.png"} alt={props.src||"savingAndCost.png"} width={500} height={500}/>
      <span>{props.name}</span>
      <span>Ratings</span>
      <div>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
      </div>
      <button> ADD TO CART</button>
    </CardSection>
  );
};
export default Card;
