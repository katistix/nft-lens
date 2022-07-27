import React, { useState } from 'react';
import NFTCard from './NFTCard';


function HomeScreen(props) {
    const [ walletAddress, setWalletAddress ] = useState('');
    const [ foundNFTs, setFoundNFTs ] = useState([]);


    const getNFTs = async () => {
        const options = {
            // chain: "polygon",
            // address: "0x75e3e9c92162e62000425c98769965a76c2e387a",
            address: walletAddress
        };
        const result = await props.Web3Api.account.getNFTs(options);

        



        setFoundNFTs(result.result);
        console.log(result.result);
    }

    return (
        <div>
            {/* Top Bar */}
            <div
                style={styles.topBar}>
                <img 
                    style={styles.logo}
                    src={require('../assets/logo.png')}/>
                <button
                    style={styles.logoutBtn}
                    onClick={props.logOut}
                    disabled={props.isAuthenticating}>Logout</button>
            
                
            </div>


            {/* Bottom bar */}
            <div style={styles.inputs}>
                <input
                    style={styles.input}
                    placeholder="Enter Wallet Address"
                    onChange={e => setWalletAddress(e.target.value)}
                    value={walletAddress} />
                <button 
                    style={styles.search}
                    onClick={getNFTs} 
                    disabled={!props.isAuthenticated}>Search</button>
            </div>



            

            {/* Grid */}
            <div style={styles.cardGrid}>
                {foundNFTs.map(nft => (
                    <NFTCard
                        key={nft.token_hash}
                        nft={nft}/>

                ))}
            </div>

            

        </div>
    )
}

export default HomeScreen;

const styles = {
    inputs:{
        position: 'fixed',
        bottom: '0',
        height: "80px",
        backgroundColor: '#fff',
        width: "100vw",
        borderTopRightRadius: "10px",
        borderTopLeftRadius: "10px",
        boxShadow: "0 -4px 15px -4px",
    },
    input: {
        bottom: '5px',
        marginLeft: '5px',
        position: 'absolute',
        width: 'calc(100% - 30px)',
        fontSize: '18px',
        height: '60px',
        borderRadius: '5px',
        paddingLeft: '20px',
    },
    search:{
        position: 'absolute',
        bottom: '7px',
        right: '20px',
        // width: '60px',
        height: '60px',
        // backgroundColor: '#fff',
        fontSize: '30px',
        border: 'none',


    },
    cardGrid:{
        marginTop: '60px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },




    topBar: {
        position: 'fixed',
        top: '0',
        height: '60px',
        width: '100vw',
        backgroundColor: '#fff',
        borderBottom: '1px solid #ccc',
        boxShadow: '0 0 15px -4px',
        zIndex: '100',
    },
    logo: {
        position: 'absolute',
        top: '25px',
        left: '20px',
        height: '20px',
    },
    logoutBtn: {
        position: 'absolute',
        right: '20px',
        top: '5px',
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#f00',
        cursor: 'pointer',
        border: 'none',
        borderRadius: '5px',
        height: '50px',
    }
}