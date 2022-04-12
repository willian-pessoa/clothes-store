import './App.css';
import { Route, Routes } from "react-router-dom";

// pages
import HomePage from './pages/homepage/homepage.component';
import ShopPage from "./pages/shop/shop.component";
import SingInAndSingUp from './pages/sing-in-sing-up/sing-in-sing-up.component';

// components
import Header from './components/header/header.component';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/shop" element={<ShopPage/>} />
        <Route path="singin" element={<SingInAndSingUp/>}/>
      </Routes>
    </div>
  );
}

export default App;
