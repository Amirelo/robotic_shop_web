// React and libs
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Navigation components
import { TopNavigation, AppFooter } from "../../features/navigation";

// Pages
import {
  HomePage,
  ExplorePage,
  ProductDetailPage,
  CartPage,
  OnSalePage,
  ContactPage,
  ShippingDetailPage,
} from "../";
import SignInPage from "../SignInPage";

const AppNavigation = () => {
  return (
    <Router>
      <div>
        <TopNavigation />

        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/signin" Component={SignInPage}/>
          <Route path="/explore" Component={ExplorePage} />
          <Route path="/product_detail" Component={ProductDetailPage} />
          <Route path="/cart" Component={CartPage} />
          <Route path="/onsale" Component={OnSalePage} />
          <Route path="/contact" Component={ContactPage} />
          <Route path="/shipping_and_return" Component={ShippingDetailPage} />
        </Routes>

        <AppFooter />
      </div>
    </Router>
  );
};

export default AppNavigation;
