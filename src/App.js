import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import Blogs from "./pages/Blogs";
import Home from "./pages/Home/Home";
import Login from "./pages/Login";
import MyPortfolio from "./pages/MyPortfolio";
import Purchase from "./pages/Purchase";
import Register from "./pages/Register";
import RequireAuth from "./pages/RequireAuth";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Dashboard from "./pages/Dashboard/Dashboard";
import MyOrders from "./pages/Dashboard/MyOrders";
import Reviews from "./pages/Dashboard/Reviews";
import MyProfile from "./pages/Dashboard/MyProfile";
import Users from "./pages/Dashboard/Users";
import AddProduct from "./pages/Dashboard/AddProduct";
import ManageProducts from "./pages/Dashboard/ManageProducts";
import ManageOrders from "./pages/Dashboard/ManageOrders";
import Payment from "./pages/Dashboard/Payment";


function App() {
  return (
    <div className="bg-slate-200">
      <Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/purchase" element={<RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>}>Purchase</Route>
          <Route path="/dashboard" element={<RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>}>
            <Route index element={<MyProfile></MyProfile>}></Route>
            <Route path="orders" element={<MyOrders></MyOrders>}></Route>
            <Route path="review" element={<Reviews></Reviews>}></Route>
            <Route path="payment/:id" element={<Payment></Payment>}></Route>
            <Route path="users" element={<Users></Users>}></Route>
            <Route path="addproduct" element={<AddProduct></AddProduct>}></Route>
            <Route path="manageproducts" element={<ManageProducts></ManageProducts>}></Route>
            <Route path="manageorders" element={<ManageOrders></ManageOrders>}></Route>
          </Route>
          <Route path="/blogs" element={<Blogs></Blogs>}></Route>
          <Route path="/portfolio" element={<MyPortfolio></MyPortfolio>}></Route>
          <Route path="/Login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/footer" element={<Footer></Footer>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
        <ToastContainer></ToastContainer>
      </Navbar>
    </div>
  );
}

export default App;
