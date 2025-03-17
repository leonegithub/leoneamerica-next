import React from "react";
import DeleteButton from "./DeleteButton";
import { useCart } from "./CartContext";

const CartComponent: React.FC = () => {
  const { cart, emptyCart } = useCart();

  return (
    <div className="w-1/3 p-4 bg-gray-100 dark:bg-gray-800">
      <div className="line flex justify-between">
        <h2 className="text-2xl mb-4">Carrello</h2>
        <DeleteButton onClick={emptyCart} />
      </div>
      <ul>
        {cart.length > 0
          ? cart.map((item) => (
              <li key={item.id} className="mb-2">
                <span style={{ fontWeight: 700 }}>Qnt: &nbsp; </span>
                {item.quantity} - {item.descrizioneEng}
              </li>
            ))
          : "Il carrello è vuoto"}
      </ul>
      <p>
        Totale:{" "}
        {cart.reduce(
          (accumulator, currentValue) => accumulator + currentValue.quantity,
          0
        )}
      </p>
    </div>
  );
};

export default CartComponent;
