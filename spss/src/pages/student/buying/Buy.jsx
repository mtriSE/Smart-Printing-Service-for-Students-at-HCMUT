import React from "react";
import { Link } from "react-router-dom";

const BuyPageButton = ({ image, text, to }) => {
  return (
    <Link to={to} className="flex flex-col items-center rounded-3xl bg-white w-80">
      <img className="py-4 h-56" src={image} alt={text} />
      <div className="self-stretch rounded-b-3xl bg-myblue py-2 text-center text-white text-xl">
        {text}
      </div>
    </Link>
  );
};

const Buy = () => {
  return (
    <div className="flex flex-grow items-center justify-evenly bg-light-mygray">
      <BuyPageButton
        image={"/src/assets/images/buy.png"}
        text={"Mua Trang"}
        to={"./buyPage"}
      />
      <BuyPageButton
        image={"/src/assets/images/gift.png"}
        text={"Tặng Trang"}
        to={"./giftPage"}
      />
    </div>
  );
};

export default Buy;
