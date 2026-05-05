import "./App.css";
import AuthPage from "./modules/public/pages/Auth/AuthPage";
import BookDetailPage from "./modules/public/pages/BookDetailPage";
import LandingPage from "./modules/public/pages/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./modules/user/cart/pages/Cart";
import { CartProvider } from "./modules/shared/context/CartContext";
import CheckOut from "./modules/user/cart/pages/CheckOut";
import AboutPage from "./modules/public/pages/AboutPage";
import ReturnsPage from "./modules/public/pages/ReturnsPage";
import ShippingPage from "./modules/public/pages/ShippingPage";
import TermsOfServicePage from "./modules/public/pages/TermsOfServicePag";
import PrivacyPolicyPage from "./modules/public/pages/PrivacyPolicyPage";

function App() {
  return (
    <>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/book/:id" element={<BookDetailPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsOfServicePage />} />
            <Route path="/shipping" element={<ShippingPage />} />
            <Route path="/returns" element={<ReturnsPage />} />
          </Routes>
        </Router>
      </CartProvider>
    </>
  );
}

export default App;
