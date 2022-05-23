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
            <Route index element={<MyOrders></MyOrders>}></Route>
            <Route path="review" element={<Reviews></Reviews>}></Route>
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
