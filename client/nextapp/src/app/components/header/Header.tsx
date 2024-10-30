// import Link from 'next/link';
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import logo from "../../../../public/assets/logo.png";
import user from "../../../../public/assets/user.svg";
import cart from "../../../../public/assets/cart.svg";

type HeaderProps = {};

const HeaderSection = styled.div<HeaderProps>`
  width: 100%;
  background-color: "1e1e1e";
  display: flex;
  /* justify-content: center; */
  align-items: center;
  justify-content: space-between;

  .userSection {
    .user {
      margin-right: 0.5rem;
    }
  }
`;

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <HeaderSection>
      <div className="logo">
        <Image src={logo} alt="logo" height={30} />
      </div>
      <div className="userSection">
        <Image src={user} alt="user" className="user" />
        <div>
          <Image src={cart} alt="cart" />
          <div className="cartNumber">
            {/* <span>{props.cartNumber}</span> */}
          </div>
        </div>
      </div>
    </HeaderSection>
  );
};

export default Header;
