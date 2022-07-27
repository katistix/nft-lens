import React, { useState, useEffect } from 'react';

function NFTCard(props){
    const [ nftMeta, setNftMeta] = useState({})
    // console.log(JSON.parse(props.nft.metadata).name);
    useEffect(() => {
        try {
            console.log(JSON.parse(props.nft.metadata).name || '');
            setNftMeta(JSON.parse(props.nft.metadata));
        }
        catch (e) {
            console.log('');
        }

    }
    , [props.nft.metadata]);

    return (
        <div style={styles.card}>
            <h1
                className="underline"
                style={styles.cardHeader}>
                {nftMeta.name}
            </h1>
            <img
                style={styles.img}
                alt={nftMeta.name}
                src={nftMeta.image}/>
        </div>
    )
}

export default NFTCard;


const styles = {
    card:{
        zIndex: '-20',
        position: 'relative',
        width: '200px',
        height: '250px',
        backgroundColor: '#f0f0f0',
        borderRadius: '10px',
        boxShadow: '0px 0px 15px -4px',
        marginBottom: '20px',
        
    },
    cardHeader:{
        position: 'absolute',
        width: '100%',
        height: '50px',
        fontSize: '14px',
        // textOverflow: 'ellipsis',
        whiteSpace: "nowrap",
        fontWeight: 'bold',
        
    },
    img:{
        position: 'absolute',
        width: '200px',
        height: '200px',
        bottom: '0px',
        borderRadius: '10px',
    }
}