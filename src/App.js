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


function App() {
  return (
    <div className="bg-slate-200">
      <Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}>Home</Route>
          <Route path="/home" element={<Home></Home>}>Home</Route>
          <Route path="/purchase" element={<RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>}>Purchase</Route>
          <Route path="/blogs" element={<Blogs></Blogs>}>Blogs</Route>
          <Route path="/portfolio" element={<MyPortfolio></MyPortfolio>}>Portfolio</Route>
          <Route path="/Login" element={<Login></Login>}>Login</Route>
          <Route path="/register" element={<Register></Register>}>Login</Route>
          <Route path="/footer" element={<Footer></Footer>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
        <ToastContainer></ToastContainer>
      </Navbar>
    </div>
  );
}

export default App;
