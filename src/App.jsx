import { Routes, Route,BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Register1 from "./pages/Register1";
import Headerdtl from "./components/Headerdtl";
import Footerdtl from "./components/Footerdtl";
import Login from "./pages/Login";
import Add_product from "./pages/Add_product";


function App() {

  return (
    <> 
<BrowserRouter>
<Headerdtl/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register1 />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/add_product" element={<Add_product/>} />



 
    </Routes>
  <Footerdtl/>
</BrowserRouter>
    </>
  )
}

export default App

