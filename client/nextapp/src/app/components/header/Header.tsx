// import Link from 'next/link';
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import logo from "../../../../public/assets/logo.png";
import user from "../../../../public/assets/user.svg";
import cart from "../../../../public/assets/cart.svg";

type HeaderProps = {
  cartNumber: number;
  onClick:()=>void
};

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <HeaderSection>
      <div className="logo">
        <Image src={logo} alt="logo" height={30} />
      </div>
      <div className="userSection">
        <Image src={user} alt="user" className="user" />
        <div className="cartSection" onClick={props.onClick}>
          <Image src={cart} alt="cart" />
          {props.cartNumber !== 0 && (
            <div className="cartNumber">
              <span>{props.cartNumber}</span>
            </div>
          )}
        </div>
      </div>
    </HeaderSection>
  );
};

export default Header;

const HeaderSection = styled.div`
  width: 100%;
  background-color: "1e1e1e";
  display: flex;
  align-items: center;
  justify-content: space-between;

  .userSection {
    display: flex;
    .user {
      margin-right: 0.5rem;
    }
    .cartSection {
      position: relative;

      .cartNumber {
        position: absolute;
        top: -5px;
        right: -5px;
        background-color: red;
        height: 15px;
        width: 15px;
        border-radius: 50%;
        text-align: center;
        font-size: 15px;
        span {
          color: #fff;
        }
      }
    }
  }
`;
