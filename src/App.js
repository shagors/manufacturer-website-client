import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import { publicRoute } from "./routes/publicRoutes";


function App() {
  return (
    <div className="bg-slate-200">
      <Navbar>
        <Routes>
          {
            publicRoute.map(({path, Component}, index) => <Route key={index} path={path} element={<Component />}></Route>)
          }
          <Route path="/footer" element={<Footer></Footer>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
