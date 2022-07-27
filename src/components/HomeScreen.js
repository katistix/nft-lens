import React, { useState, useEffect } from 'react';
import NFTCard from './NFTCard';
import HistoryView from './HistoryView';

import '../App.css';


function HomeScreen(props) {
    useEffect(() => {
        document.title = "NFT Lens - Home";
    });


    const [ walletAddress, setWalletAddress ] = useState('');
    const [ foundNFTs, setFoundNFTs ] = useState([]);
    const [ showHistory, setShowHistory ] = useState(false);


    const getNFTs = async (address) => {
        const options = {
            address: address || walletAddress ,
        };
        let result;
        try{
           result = await props.Web3Api.account.getNFTs(options);
        } 
        catch(error){
            alert(error);
            return;
        }

        // Update history
        let historyArray = JSON.parse(localStorage.getItem('history'));
        if (historyArray.length<5) {
            historyArray.push(address || walletAddress);
        }
        else {
            historyArray.shift();
            historyArray.push(address || walletAddress);
        }
        setShowHistory(false);
        localStorage.setItem('history', JSON.stringify(historyArray));

        let filtered = [];
        result.result.forEach(el => {
            if (el) {
                filtered.push(el);
            }        
        });
        setFoundNFTs(filtered);
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          getNFTs();
        }
    }

    return (
        <div>
            {/* Top Bar */}
            <div
                style={styles.topBar}>
                <img 
                    alt='NFT Lens Logo'
                    style={styles.logo}
                    src={require('../assets/logo_horizontal.png')}/>
                <input
                    style={styles.input}
                    placeholder="Enter Wallet Address"
                    onChange={e => setWalletAddress(e.target.value)}
                    value={walletAddress}
                    onKeyDown={handleKeyDown}
                    />
                <img
                    alt="Logout button"
                    style={styles.logoutBtn}
                    src={require('../assets/Logout.png')}
                    onClick={props.logOut}/>
                <img
                    alt="Search button"
                    style={styles.searchButton}
                    src={require('../assets/Search.png')}
                    onClick={() => getNFTs()}/>   
                <img
                    alt='History button'
                    style={styles.historyButton}
                    src={require('../assets/History.png')}
                    onClick={() => setShowHistory(!showHistory)}/> 
                
                {showHistory ? (
                    <HistoryView
                        getNFTs={getNFTs}
                        setWalletAddress={setWalletAddress}
                        setShowHistory={setShowHistory}/>
                ):null}
            </div>



            

            {/* Grid */}
            <div style={styles.cardGrid}>
                {foundNFTs.map(nft => (
                    <NFTCard
                        key={nft.token_hash}
                        nft={nft}/>

                ))}
            </div>

            {/* Nothing here for now */}
            {foundNFTs.length === 0 ? (
                <h2 style={styles.nothingHere}>
                    {"Nothing here yet😅 Try searching for something else"}
                </h2>
            ):null}


        </div>
    )
}

export default HomeScreen;



const styles = {
    nothingHere: {
        textAlign: 'center',
        fontSize: '25px',
        color: '#979797',
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        position: 'absolute',
        width: '100%',
        top: '50%',
        transform: 'translateY(-50%)',
    },
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
        bottom: '15px',
        position: 'absolute',
        width: '350px',
        fontSize: '14px',
        height: '30px',
        borderRadius: '5px',
        textAlign: 'center',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: '#ddd',
        border: 'none',
        outline: 'none',
    },
    search:{
        position: 'absolute',
        bottom: '7px',
        right: '20px',
        height: '60px',
        fontSize: '30px',
        border: 'none',
    },
    cardGrid:{
        marginTop: '80px',
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
        top: '15px',
        left: '15px',
        height: '30px',
    },
    logoutBtn: {
        position: 'absolute',
        top: '15px',
        right: '20px',
        height: '35px',
        width: '35px',
        backgroundColor: '#fff',
        cursor: 'pointer',
    },
    searchButton: {
        position: 'absolute',
        bottom: '15px',
        left: 'calc(50% + 180px)',
        height: '30px',
        width: '30px',
        cursor: 'pointer',
    },
    historyButton: {
        position: 'absolute',
        bottom: '15px',
        right: 'calc(50% + 180px)',
        height: '30px',
        width: '30px',
        cursor: 'pointer',
    }
}