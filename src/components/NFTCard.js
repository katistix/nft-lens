import React, { useState, useEffect } from 'react';
import useFitText from "use-fit-text";

function NFTCard(props){
    const { fontSize, ref } = useFitText();
    const [ nftMeta, setNftMeta] = useState({})
    useEffect(() => {
        if (JSON.parse(props.nft.metadata)) {
            setNftMeta(JSON.parse(props.nft.metadata));
        }
    }
    , []);

    const handleClick = (url) => {
        window.open(url, '_blank').focus();
    }

    if (nftMeta.name) {
        return (
            <div style={styles.card}>
                <h1
                    ref={ref}
                    style={{fontSize, height: "38px", textAlign:"center"}}>
                    {nftMeta.name}
                </h1>
                <img
                    style={styles.img}
                    alt={nftMeta.name}
                    src={nftMeta.image}
                    onClick={() => handleClick(nftMeta.image)}/>
            </div>
        )
    }
    else return null;
}

export default NFTCard;


const styles = {
    card:{
        position: 'relative',
        width: '200px',
        height: '250px',
        backgroundColor: '#f0f0f0',
        borderRadius: '10px',
        boxShadow: '0px 0px 15px -4px',
        marginBottom: '20px',
        
    },
    img:{
        // position: 'absolute',
        width: '200px',
        height: '200px',
        bottom: '0',
        borderBottomRightRadius: '10px',
        borderBottomLeftRadius: '10px',
        zIndex: '10',
        display: 'block',
        cursor: 'pointer'
    },
    button:{
        position: 'absolute',
        width: '200px',
        height: '30px',
        bottom: '0',
        borderBottomRightRadius: '10px',
        borderBottomLeftRadius: '10px',
        zIndex: '10',
        display: 'block',
        backgroundColor: '#fff',
    }

}