import './App.css';
import { Route, Routes } from "react-router-dom";

// redux
import { connect } from 'react-redux';
import { setCurrentUser } from "./redux/user/user.actions";

// pages
import HomePage from './pages/homepage/homepage.component';
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUp from './pages/sign-in-sign-up/sign-in-and-sign-up.component';

// components
import Header from './components/header/header.component';

//utils
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { useEffect } from 'react';

function App(props) {

  useEffect(() => {
    const {setCurrentUser} = props;

    let unsubscribe = null;
    unsubscribe = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({ id: snapShot.id, ...snapShot.data() })
        });
      };
      setCurrentUser(userAuth);
    })
    return () => unsubscribe;
  }, [props])

  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="singin" element={<SignInAndSignUp />} />
      </Routes>
    </div>
  );
}

const mapToDispatchProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapToDispatchProps)(App);
