// React and libs
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Constants
import { ROUTE_CART, ROUTE_CONTACT, ROUTE_DISCOUNT, ROUTE_EXPLORE, ROUTE_FAVORITES, ROUTE_HOME, ROUTE_NOTIFICATION, ROUTE_ORDER, ROUTE_PRODUCT_DETAIL, ROUTE_SHIPPING, ROUTE_SIGN_IN, ROUTE_SIGN_UP, ROUTE_UPDATE_INFO, ROUTE_USER_INFO } from "../../constants/AppConstant";

// Components
import { TopNavigation, AppFooter } from "../../features/navigation";

// Pages
import { HomePage, ExplorePage, ProductDetailPage, CartPage, ContactPage, ShippingDetailPage } from "../product";
import { SignInPage, SignUpPage, UserInfoPage, UpdateInfoPage, OrderPage, DiscountPage, FavoritePage,NotificationPage, } from "../user";


const AppNavigation = () => {
  return (
    <Router>
      <div>
        <TopNavigation />

        <Routes>
          <Route path={ROUTE_HOME} Component={HomePage} />
          <Route path={ROUTE_EXPLORE} Component={ExplorePage} />
          <Route path={ROUTE_PRODUCT_DETAIL} Component={ProductDetailPage} />
          <Route path={ROUTE_CART} Component={CartPage} />
          <Route path={ROUTE_CONTACT} Component={ContactPage} />
          <Route path={ROUTE_SHIPPING} Component={ShippingDetailPage} />


          <Route path={ROUTE_SIGN_IN} Component={SignInPage}/>
          <Route path={ROUTE_SIGN_UP} Component={SignUpPage} />
          <Route path={ROUTE_USER_INFO} Component={UserInfoPage} />
          <Route path={ROUTE_UPDATE_INFO} Component={UpdateInfoPage} />
          <Route path={ROUTE_FAVORITES} Component={FavoritePage} />
          <Route path={ROUTE_DISCOUNT} Component={DiscountPage} />
          <Route path={ROUTE_ORDER} Component={OrderPage} />
          <Route path={ROUTE_NOTIFICATION} Component={NotificationPage} />
        </Routes>

        <AppFooter />
      </div>
    </Router>
  );
};

export default AppNavigation;
