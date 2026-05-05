import React from "react";
import { Link } from "react-router-dom";
import OrderSummary from "../../components/OrderSummary";
import NavBar from "../../../public/components/NavBar";
import { useCart } from "../../../shared/context/CartContext";
import CartItem from "../../components/CartItem";

const textual = {
  base: "text-inverted/70 font-medium",
};

const Cart = () => {
  const { items, updateItemQuantity, removeItem, itemsCount } = useCart();

  return (
    <div>
      <NavBar />

      <div className="mt-14">
        <div className="p-4 sm:p-8 space-y-6">
          {/* HEADER */}
          <div className="max-w-xl">
            <p className="text-2xl sm:text-4xl font-semibold text-inverted">
              Your private collection
            </p>
            <p className={`pt-4 text-sm ${textual.base}`}>
              Review the curated editions currently awaiting acquisition.
            </p>
          </div>

          {/* EMPTY STATE */}
          {itemsCount === 0 ? (
            <div className="border border-inverted/30 p-6 rounded-lg">
              <p className="text-sm text-inverted/70">
                Your cart is empty. Start your collection from the archive.
              </p>
              <Link
                to="/"
                className="inline-flex mt-4 text-sm font-semibold text-tertiary"
              >
                Browse books
              </Link>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-10">
              {/* CART ITEMS */}
              <div className="flex-1 flex flex-col gap-6">
                {items.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    updateItemQuantity={updateItemQuantity}
                    removeItem={removeItem}
                  />
                ))}
              </div>

              {/* ORDER SUMMARY */}
              <div className="w-full lg:w-96">
                <OrderSummary />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
