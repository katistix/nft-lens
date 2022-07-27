import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useMoralis, useMoralisWeb3Api } from "react-moralis";

import NFT from './components/NFT';


function App() {
    const Web3Api = useMoralisWeb3Api();
    const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();
    const [ walletAddress, setWalletAddress ] = useState('');
    const [ foundNFTs, setFoundNFTs ] = useState([]);

    useEffect(() => {
    if (isAuthenticated) {
      // add your logic here
      
    }
  }, [isAuthenticated]);

    const login = async () => {
      if (!isAuthenticated) {

        await authenticate({signingMessage: "Log in using Moralis" })
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

    const getNFTs = async () => {
      const options = {
        // chain: "polygon",
        // address: "0x75e3e9c92162e62000425c98769965a76c2e387a",
        address: walletAddress
      };
      const polygonNFTs = await Web3Api.account.getNFTs(options);
      setFoundNFTs(polygonNFTs.result);
      console.log(polygonNFTs);
    }

    if(!isAuthenticated){
      return (
        <div>
          <h1>Welcome to NFT Lens</h1>
          <h2>A minimalist NFT Visualizer</h2>
          <button onClick={login}>Metamask Login</button>
        </div>
      );
    }
    else{
      return (
        <div>
          <button onClick={logOut} disabled={isAuthenticating}>Logout</button>
          
          <input
            placeholder="Enter Wallet Address"
            onChange={e => setWalletAddress(e.target.value)}
            value={walletAddress}/>
          <button onClick={getNFTs} disabled={!isAuthenticated}>Search</button>
          {foundNFTs.map(nft => (
                        <div className="tr" key={nft.id}>
                            {/* {nft.name} */}
                        </div>
                    ))}

        </div>
      );
    }
}

export default App;