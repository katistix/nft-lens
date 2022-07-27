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
            {nftMeta.name}
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
        width: '250px',
        height: '250px',
        backgroundColor: '#f0f0f0',
        borderRadius: '10px',
        boxShadow: '1px 1px 15px -8px'
    },
    img:{
        width: '200px',
        height: '200px',
    }
}