import React, { useState } from 'react';


function HomeScreen(props) {
    const [ walletAddress, setWalletAddress ] = useState('');
    const [ foundNFTs, setFoundNFTs ] = useState([]);


    const getNFTs = async () => {
        const options = {
            // chain: "polygon",
            // address: "0x75e3e9c92162e62000425c98769965a76c2e387a",
            address: walletAddress
        };
        const polygonNFTs = await props.Web3Api.account.getNFTs(options);
        setFoundNFTs(polygonNFTs.result);
        console.log(polygonNFTs);
    }

    return (
        <div>
            <button onClick={props.logOut} disabled={props.isAuthenticating}>Logout</button>

            <input
                placeholder="Enter Wallet Address"
                onChange={e => setWalletAddress(e.target.value)}
                value={walletAddress} />
            <button onClick={getNFTs} disabled={!props.isAuthenticated}>Search</button>
            {foundNFTs.map(nft => (
                <div className="tr" key={nft.id}>
                </div>
            ))}

        </div>
    )
}

export default HomeScreen;