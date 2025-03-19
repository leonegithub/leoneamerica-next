import React from "react";
import DeleteButton from "./DeleteButton";
import { useCart } from "./CartContext";

interface CartContextProps {
  id: string;
  codice: string;
  descrizioneEng: string;
  quantity: number;
}

const CartComponent: React.FC = () => {
  const { cart, emptyCart, setCart } = useCart();

  const removeItem = (codice: string) => {
    const url = new URL(window.location.href);
    url.searchParams.delete("codice");
    window.history.replaceState({}, "", url.toString());
    setCart((prevCart: CartContextProps[]) =>
      prevCart.filter((item: CartContextProps) => item.codice !== codice)
    );
  };

  return (
    <div className="w-1/3 bg-gray-100 dark:bg-gray-800">
      <div className="line flex justify-between ">
        <h2 className="text-2xl mb-4">Carrello</h2>
        <DeleteButton onClick={emptyCart} />
      </div>
      <ul>
        {cart.length > 0
          ? cart.map((item) => (
              <>
                <li key={item.id} className="mb-2 flex justify-between">
                  <div>
                    <span style={{ fontWeight: 700 }}>Qnt: &nbsp; </span>
                    {item.quantity} - {item.descrizioneEng}
                  </div>
                  <div
                    style={{ cursor: "pointer", color: "red" }}
                    onClick={() => removeItem(item.codice)}
                  >
                    X
                  </div>
                </li>
              </>
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
