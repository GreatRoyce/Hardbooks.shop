import React from "react";
import { Link, useLocation } from "react-router-dom";
import CompBtn from "../../../components/ui/primitives/CompBtn";
import { useCart } from "../../shared/context/CartContext";
import CheckOut from "../cart/pages/CheckOut";

const OrderSummary = () => {
  const { items, itemsCount, subtotal, clearCart } = useCart();
  const location = useLocation();
  const isCheckoutPage = location.pathname === "/checkout";
  const shipping = subtotal > 0 ? 2500 : 0;
  const total = subtotal + shipping;

  return (
    <div className="p-6 space-y-4 bg-offwhite/80">
      <h1 className="text-2xl font-semibold text-inverted">Order Summary</h1>

      {itemsCount > 0 && (
        <div className="space-y-2 text-sm text-inverted/70">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-white/60 textshade shade rounded-xl p-3 gap-3"
            >
              <div className="flex items-center gap-4">
                <div className="flex gap-4">
                  <img src={item.image} className="h-20" alt="" />
                </div>

                <div>
                  <p className="font-semibold text-inverted/90">{item.title}</p>
                  <p className="text-xs text-inverted/60">
                    Qty {item.quantity} • ₦{item.price.toLocaleString()} each
                  </p>
                </div>


              </div>
              <p className="text-sm font-semibold text-tertiary/80 sm:ml-auto">
                ₦{(item.price * item.quantity).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}

      <div className="space-y-3 text-sm text-inverted/70">
        <div className="flex items-center justify-between">
          <span>Items</span>
          <span>{itemsCount}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Subtotal</span>
          <span> ₦{subtotal.toLocaleString()}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Shipping</span>
          <span> ₦{shipping.toLocaleString()}</span>
        </div>
        <div className="flex items-center justify-between text-base tracking-wider font-semibold text-tertiary">
          <span>Total</span>
          <span> ₦{total.toLocaleString()}</span>
        </div>
      </div>

      <div className="space-y-4">
        {itemsCount === 0 || isCheckoutPage ? (
          <CompBtn variant="primary" size="medium" className="w-full" disabled>
            Proceed to Checkout
          </CompBtn>
        ) : (
          <Link to="/checkout" className="block">
            <CompBtn variant="primary" size="medium" className="w-full">
              Proceed to Checkout
            </CompBtn>
          </Link>
        )}
        <CompBtn
          variant="outline"
          size="small"
          className="w-full border border-inverted/50"
          disabled={itemsCount === 0}
          onClick={clearCart}
        >
          Clear Cart
        </CompBtn>
      </div>
    </div>
  );
};

export default OrderSummary;
