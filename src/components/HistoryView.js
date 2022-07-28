import React, { useState, useEffect } from "react";

function HistoryView(props) {
    const [ history, setHistory ] = useState([]);
    useEffect(() => {
        let historyArray = JSON.parse(localStorage.getItem('history'));
        if (historyArray) {
            setHistory(historyArray);
        }

    }, []);

    const recentPressed = (address) => {
        props.setWalletAddress(address);
        props.getNFTs(address);
        props.setShowHistory(false);

    }


    return (
        <div style={styles.container}>
            {history.slice(0).reverse().map(address => 
            (
                <div
                    style={styles.item}
                    onClick={() => recentPressed(address)}>
                    <div style={styles.itemTitle}>
                        {address}
                    </div>
                </div>
            )
            )}
        </div>
    );

    
}

export default HistoryView;

const styles = {
    container: {
        position: 'absolute',
        width: '350px',
        // height: '5px',
        backgroundColor: '#fff',
        left: '50%',
        transform: 'translateX(-50%)',
        top: "60px",
        borderBottomLeftRadius: '10px',
        borderBottomRightRadius: '10px',
        borderBottom: '1px solid #ccc',
        boxShadow: '0 15px 15px -8px',
    },
    item: {
        height: '30px',
        fontSize: '14px',
        textAlign: 'center',
        width: '100%',
        borderBottom: '1px solid #ccc',
        cursor: 'pointer'

    }
}

