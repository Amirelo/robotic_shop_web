import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ExplorePage, HomePage } from "./main";
import TopNavigation from "../features/navigation/TopNavigation";

const AppNavigation = () => {
  return (
    <Router>
      <div>
        <TopNavigation />
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/explore" Component={ExplorePage} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppNavigation;
