import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ExplorePage, HomePage } from "./main";
import TopNavigation from "../features/navigation/TopNavigation";
import AppFooter from "../features/navigation/AppFooter";
import CartPage from "./main/CartPage";
import ContactPage from "./main/ContactPage";
import LocationPage from "./main/LocationPage";
import OnSalePage from "./main/OnSalePage";
import ShippingDetailPage from "./main/ShippingDetailPage";

const AppNavigation = () => {
  return (
    <Router>
      <div>
        <TopNavigation />
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/explore" Component={ExplorePage} />
          <Route path="/cart" Component={CartPage}/>
          <Route path="/onsale" Component={OnSalePage}/>
          <Route path="/contact" Component={ContactPage}/>
          <Route path="/location" Component={LocationPage}/>
          <Route path="/shipping_and_return" Component={ShippingDetailPage}/>
        </Routes>

        <AppFooter/>
      </div>
    </Router>
  );
};

export default AppNavigation;
