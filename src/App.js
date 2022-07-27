import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useMoralis, useMoralisWeb3Api } from "react-moralis";

import LoginScreen from './components/LoginScreen';
import HomeScreen from './components/HomeScreen';



function App() {
    const Web3Api = useMoralisWeb3Api();
    const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();

    useEffect(() => {
    if (isAuthenticated) {
      // add your logic here
      
    }
  }, [isAuthenticated]);

    const login = async () => {
      if (!isAuthenticated) {

        await authenticate({signingMessage: "Log in to NFT Lens" })
          .then(function (user) {
            console.log("logged in user:", user);
            console.log(user.get("ethAddress"));
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }

    const logOut = async () => {
      await logout();
      console.log("logged out");
    }

    if(!isAuthenticated){
      return (
        <LoginScreen login={login}/>
      );
    }
    else{
      return (
        <HomeScreen
          logOut={logOut}
          isAuthenticated={isAuthenticated}
          isAuthenticating={isAuthenticating}
          user={user}
          account={account}
          Web3Api={Web3Api}
        />
      );
    }
}

export default App;