import React, { useEffect, useState } from 'react';

function LoginScreen(props) {
    useEffect(() => {
        document.title = "NFT Lens - Login";
    });


    return (
        <div style={styles.container}>
            <img
                src={require("../assets/loginBg.png")}
                style={styles.bgImg}/>
            <img
                src={require("../assets/logo.png")}
                style={styles.logo}/>
            <h1 style={styles.title}>A minimal NFT Visualizer</h1>


            {/* Connect with MetaMask Button */}
            <div
                style={styles.loginButton}
                onClick={props.login}>
                <img
                    alt="metamask"
                    src={require("../assets/MetaMask.png")}
                    style={styles.metamask}/>
                <h1 style={styles.loginText}>Connect with MetaMask</h1>
            </div>

        </div>
    )
}

export default LoginScreen;

const styles = {
    container: {
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
    },
    logo: {
        width: '200px',
        marginBottom: '20px',

    },
    bgImg: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
    },
    loginButton: {
        position: 'relative',
        marginTop: '20px',
        width: '250px',
        height: '45px',
        backgroundColor: '#000',
        color: '#fff',
        lineHeight: '45px',
        border: 'none',
        borderRadius: '5px',
        fontSize: '18px',
        // fontWeight: 'bold',
        cursor: 'pointer'

    },
    loginText: {
        position: 'absolute',
        bottom: '-11px',
        right: '12px',
        color: "white",
        fontSize: "16px",
        fontWeight: "regular",
        backgroundColor: '#000',
    },
    title: {
        fontSize: '30px',
        fontWeight: 'bold',
        color: '#212121',
        marginBottom: '20px',
    },
    metamask: {
        width: '30px',
        marginTop: '8px',
        marginLeft: '8px'

    }
}