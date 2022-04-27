import './App.css';
import { Route, Routes } from "react-router-dom";

// pages
import HomePage from './pages/homepage/homepage.component';
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUp from './pages/sign-in-sign-up/sign-in-and-sign-up.component';

// components
import Header from './components/header/header.component';

//utils
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { useEffect, useState } from 'react';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    let unsubscribe = null;
    unsubscribe = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = createUserProfileDocument(userAuth);

        (await userRef).onSnapshot(snapShot => {
          setCurrentUser({ id: snapShot.id, ...snapShot.data() })
        });
      };
      setCurrentUser(userAuth);
    })
    return () => unsubscribe;
  }, [])

  console.log(currentUser);

  return (
    <div>
      <Header currentUser={currentUser} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="singin" element={<SignInAndSignUp />} />
      </Routes>
    </div>
  );
}

export default App;
