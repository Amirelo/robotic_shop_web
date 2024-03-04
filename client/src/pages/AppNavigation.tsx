import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ExplorePage, HomePage } from "./main";
import TopNavigation from "../features/navigation/TopNavigation";
import AppFooter from "../features/navigation/AppFooter";

const AppNavigation = () => {
  return (
    <Router>
      <div>
        <TopNavigation />
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/explore" Component={ExplorePage} />
        </Routes>

        <AppFooter/>
      </div>
    </Router>
  );
};

export default AppNavigation;
