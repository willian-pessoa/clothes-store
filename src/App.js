import './App.css';
import { Route, Routes, Navigate } from "react-router-dom";

// redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

// pages
import HomePage from './pages/homepage/homepage.component';
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUp from './pages/sign-in-sign-up/sign-in-and-sign-up.component';
import CheckOutPage from './pages/checkout/checkout.component';

// components
import Header from './components/header/header.component';

//utils
import { useEffect } from 'react';

function App({ checkUserSession, ...props }) {

  const unsubscribe = null;

  useEffect(() => {
    checkUserSession();
    
    return () => unsubscribe;
  }, [])

  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/shop/*" element={<ShopPage />} />
        <Route exact path="/checkout" element={<CheckOutPage />} />
        <Route exact path="singin" element={props.currentUser ? <Navigate to="/" /> : <SignInAndSignUp />} />
      </Routes>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
