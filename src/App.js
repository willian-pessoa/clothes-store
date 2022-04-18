import './App.css';
import { Route, Routes } from "react-router-dom";

// pages
import HomePage from './pages/homepage/homepage.component';
import ShopPage from "./pages/shop/shop.component";
import SingInAndSingUp from './pages/sing-in-sing-up/sing-in-sing-up.component';

// components
import Header from './components/header/header.component';

//utils
import { auth } from "./firebase/firebase.utils";
import { useEffect, useState } from 'react';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(()=>{
    let unsubscribe = null;
    unsubscribe = auth.onAuthStateChanged(user => {setCurrentUser(user);console.log(user)})
    return () => unsubscribe;
  },[])

  return (
    <div>
      <Header currentUser={currentUser}/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/shop" element={<ShopPage/>} />
        <Route path="singin" element={<SingInAndSingUp/>}/>
      </Routes>
    </div>
  );
}

export default App;
