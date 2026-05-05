import React from "react";
import { FaTrash } from "react-icons/fa";

const textual = {
  base: "text-inverted/70 font-medium",
};

const CartItem = ({ item, updateItemQuantity, removeItem }) => {
  const remaining =
    typeof item.copies === "number"
      ? Math.max(item.copies - item.quantity, 0)
      : null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-4 border-b border-inverted/20 pb-6">
      {/* IMAGE */}
      <div className="bg-inverted/10 rounded-xl p-2 flex items-center justify-center">
        <img
          src={item.image}
          alt={item.title}
          className="w-24 h-32 object-contain"
        />
      </div>

      {/* DETAILS */}
      <div>
        <p className="text-xs uppercase text-inverted/60">
          {item.format || "Paperback"}
        </p>

        <p className="font-semibold">{item.title}</p>

        <p className="text-xs text-inverted/60">
          By {item.author}
        </p>

        <div className="flex flex-wrap gap-6 items-center mt-4">
          {/* QUANTITY */}
          <div>
            <div className="flex items-center gap-4 text-base font-semibold">
              <button
                type="button"
                className="cursor-pointer text-inverted/60 disabled:opacity-40"
                onClick={() =>
                  updateItemQuantity(item.id, item.quantity - 1)
                }
                disabled={item.quantity <= 1}
              >
                -
              </button>

              <p>{item.quantity}</p>

              <button
                type="button"
                className="cursor-pointer text-inverted/60 disabled:opacity-40"
                onClick={() =>
                  updateItemQuantity(item.id, item.quantity + 1)
                }
                disabled={
                  typeof item.copies === "number" &&
                  item.quantity >= item.copies
                }
              >
                +
              </button>
            </div>

            <p className="border-b w-full border-black"></p>
          </div>

          {/* PRICE */}
          <p className="text-sm font-semibold text-inverted/80">
            ₦{(item.price * item.quantity).toLocaleString()}
          </p>

          {/* STOCK */}
          {remaining !== null && (
            <p className="text-xs uppercase tracking-widest text-inverted/70">
              {remaining > 0
                ? `Only ${remaining} left`
                : "Out of stock"}
            </p>
          )}

          {/* REMOVE */}
          <button
            type="button"
            className="flex items-center gap-2 text-red-600"
            onClick={() => removeItem(item.id)}
          >
            <FaTrash size={12} />
            <span className={`uppercase text-xs ${textual.base}`}>
              remove item
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
