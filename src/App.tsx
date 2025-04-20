import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./screens/Homepage/Homepage";
import NewArrivals from "./screens/NewArrivals/NewArrivals";
import Products from "./screens/Products/Products";
import ProductDetails from "./screens/ProductDetails/ProductDetails";
import Cart from "./screens/Cart/Cart";
import OrderConfirmation from "./screens/OrderConfirmation/OrderConfirmation";
import Profile from "./screens/Profile/Profile";
import Wishlist from "./screens/Wishlist/Wishlist";
import NotFound from "./screens/NotFound/NotFound";
import { Toaster } from "./components/ui/toaster";

// Footer Routes
import AboutUs from "./screens/Footer/AboutUs.tsx";
import ContactUs from "./screens/Footer/ContactUs.tsx";
import Location from "./screens/Footer/Location.tsx";
import EMI from "./screens/Footer/EMI.tsx";
import Account from "./screens/Footer/Account.tsx";
import CustomerSupport from "./screens/Footer/CustomerSupport.tsx";
import DeliveryDetails from "./screens/Footer/DeliveryDetails.tsx";
import TermsConditions from "./screens/Footer/TermsConditions.tsx";
import PrivacyPolicy from "./screens/Footer/PrivacyPolicy.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/new-arrivals" element={<NewArrivals />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:category" element={<Products />} />
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/wishlist" element={<Wishlist />} />

        {/* Footer Routes */}
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/location" element={<Location />} />
        <Route path="/emi" element={<EMI />} />
        <Route path="/account" element={<Account />} />
        <Route path="/customer-support" element={<CustomerSupport />} />
        <Route path="/delivery-details" element={<DeliveryDetails />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;