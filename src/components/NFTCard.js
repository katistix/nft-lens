import React, { useState, useEffect } from 'react';
import useFitText from "use-fit-text";

function NFTCard(props){
    const { fontSize, ref } = useFitText();
    const [ nftMeta, setNftMeta] = useState({})
    useEffect(() => {

        try {
            console.log(JSON.parse(props.nft.metadata).name || 'No Name');
            // if (!JSON.parse(props.nft.metadata).name) {
            //     console.log("No name");
            // }
            setNftMeta(JSON.parse(props.nft.metadata));
        }
        catch (e) {
            console.log("No metadata");
        }

    }
    , []);

    console.log(nftMeta);
    if (nftMeta.name) {
        return (
            <div style={styles.card}>
                <h1
                    ref={ref}
                    style={{fontSize, height: "40px"}}>
                    {nftMeta.name}
                </h1>
                <img
                    style={styles.img}
                    alt={nftMeta.name}
                    src={nftMeta.image}/>
            </div>
        )
    }
    else return null;
    // return (
    //     {nftMeta ? (
    //         <div style={styles.card}>
    //             <h1
    //                 ref={ref}
    //                 style={{fontSize, height: "40px"}}>
    //                 {nftMeta.name}
    //             </h1>
    //             <img
    //                 style={styles.img}
    //                 alt={nftMeta.name}
    //                 src={nftMeta.image}/>
    //         </div>
    //     ):null}
    // )
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
        borderBottomRightRadius: '10px',
        borderBottomLeftRadius: '10px',

    }
}