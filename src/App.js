import './App.css';
import { Route, Routes, Navigate} from "react-router-dom";

// redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from './redux/user/user.selectors';

// pages
import HomePage from './pages/homepage/homepage.component';
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUp from './pages/sign-in-sign-up/sign-in-and-sign-up.component';
import CheckOutPage from './pages/checkout/checkout.component';

// components
import Header from './components/header/header.component';

//utils
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { useEffect } from 'react';

function App(props) {

  useEffect(() => {
    const { setCurrentUser } = props;

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
  }, [])

  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/shop/*" element={<ShopPage />} />
        <Route exact path="/checkout" element={<CheckOutPage />} />
        <Route exact path="singin" element={props.currentUser ? <Navigate to="/"/> : <SignInAndSignUp />} />
      </Routes>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapToDispatchProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapToDispatchProps)(App);
