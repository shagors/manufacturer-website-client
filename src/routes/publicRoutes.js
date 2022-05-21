import Blogs from "../pages/Blogs";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import MyPortfolio from "../pages/MyPortfolio";
import Purchase from "../pages/Purchase";

export const publicRoute = [
  {path: "/home", name: "Home", Component: Home },
  {path: "/purchase", name: "Purchase", Component: Purchase },
  // {path: "/dashboard", name: "Dashboard", Component:  },
  {path: "/blogs", name: "Blogs", Component: Blogs },
  {path: "/portfolio", name: "Portfolio", Component: MyPortfolio },
  {path: "/login", name: "Login", Component: Login },
]