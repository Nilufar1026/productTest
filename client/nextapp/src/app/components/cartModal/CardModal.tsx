import React from "react";
import styled from "styled-components";
import {useState, useEffect} from "react";
import {IProduct} from "../../type/index";
import Image from "next/image";

type ModalProps = {
  // isOpen: boolean;
  onClose: () => void;
  orders: IProduct[];
};

const CartModal: React.FC<ModalProps> = (props) => {
  const [allOrders, setAllOrders] = useState<IProduct[]>([]);
  useEffect(() => {
    setAllOrders(props.orders);
  }, []);

  return (
    <ModalContainer>
      <div className="modal">
        <button onClick={props.onClose} className="closeButton">
          Back
        </button>
        <div className="wrapper">
          <h2 className="summary">Order Summary</h2>
          {/* <div className="orderWrapper"> */}
          {allOrders.map((order, index) => (
            <div key={order.id || index} className="orderWrapper">
              <Image
                src={
                  `/assets/${order.ImageUrl}.png` || "/assets/savingAndCost.png"
                }
                alt={order.ImageUrl || "savingAndCost.png"}
                width={200}
                height={163}
              />
              <div className="detail">
                <h3 className="product-title">{order.name}</h3>
                <div className="quantityWrapper">
                  <p className="item-details">Quantity:</p>
                  <p>1</p>
                </div>

                <p className="item-details">{order.price} SEK</p>
              </div>
            </div>
          ))}
          {/* </div> */}
          <div className="totalPrice">
            <h1>Total</h1>
            <h1>{allOrders.reduce((acc, item) => acc + item.price, 0)} SEK</h1>
          </div>
          <button className="proceed-btn">Checkout</button>

          <h1 className="tos-title">terms and conditions</h1>
          <p className="tos-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            fermentum ut dignissim pellentesque ut amet. Ipsum donec enim arcu,
            tempus aenean non nisl. Egestas aenean sapien cum mi et at
            venenatis. Ac nascetur proin metus, tellus arcu mattis platea vitae.
            At ultricies sagittis cursus malesuada enim sed vivamus morbi id.
            Proin amet, amet, sed tortor.
          </p>
        </div>
      </div>
    </ModalContainer>
  );
};
export default CartModal;

const ModalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20rem 20rem;
  .modal {
    background: "#fff";
    padding: 20px;
    position: relative;
    .closeButton {
      position: absolute;
      top: 10px;
      right: 10px;
      padding: 5px 10px;
    }
    .wrapper {
      padding: 5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      .orderWrapper {
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-between;
        .detail {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-left: 3rem;
          width: 25%;
          .quantityWrapper {
            display: flex;
            gap: 1rem;
          }
          img {
            width: 1rem;
          }
        }
      }
      .totalPrice {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin: 5rem 0;
      }
      .proceed-btn {
        display: flex;
        width: 184px;
        height: 40px;
        justify-content: center;
        align-items: center;

        border-radius: 6px;
        background: black;

        color: #fff;
        text-align: center;
        font-family: Inter;
        font-size: 10px;
        font-style: normal;
        font-weight: 700;
        line-height: 150%;
        letter-spacing: -0.22px;
        margin-bottom: 5rem;
      }
    }
  }
`;
