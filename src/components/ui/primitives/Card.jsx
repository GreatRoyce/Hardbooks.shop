import React from "react";
import { useNavigate } from "react-router-dom";
import CartButton from "../composites/CartButton";
import Reveal from "../composites/Reveal";
import { useCart } from "../../../modules/shared/context/CartContext";

const Card = ({ book }) => {
  const { addItem } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (event) => {
    event?.preventDefault?.();
    event?.stopPropagation?.();
    addItem(book, 1);
    navigate("/cart");
  };

  return (
    <div className="h-auto sm:h-[55vh] rotater hover:border-4 cursor-pointer hover:shade hover:rounded-b-2xl transition-all duration-200 w-full sm:w-52 md:w-56 mb-6 p-4 flex flex-col justify-between">
      {/* IMAGE */}
      <Reveal className="mb-4 rounded-2xl p-4 flex items-center justify-center bg-inverted/20">
        <img
          className="shade w-32 h-40 object-cover rotater"
          src={book.image}
          alt={book.title}
        />
      </Reveal>

      {/* CATEGORY */}
      <Reveal>
        <h2 className="font-semibold text-xs text-tertiary uppercase tracking-widest textshade">
          {book.category}
        </h2>
      </Reveal>

      {/* TITLE */}
      <Reveal>
        <p className="text-xs font-bold text-inverted/80">{book.title}</p>
      </Reveal>

      {/* AUTHOR */}
      <Reveal>
        <p className="text-xs font-semibold text-inverted/60">{book.author}</p>
      </Reveal>

      {/* PRICE + BUTTON */}
      <Reveal className="flex justify-between items-center pt-2">
        <div className="flex justify-between items-center gap-14">
          <p className="font-bold text-sm textshade">
            ₦{book.price.toLocaleString()}
          </p>
          <CartButton
            className="mr-auto"
            onClick={handleAddToCart}
            disabled={typeof book.copies === "number" && book.copies <= 0}
          >
            Buy
          </CartButton>
        </div>
      </Reveal>
    </div>
  );
};

export default Card;
