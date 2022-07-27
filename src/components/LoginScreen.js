function LoginScreen(props) {
    return (
        <div style={styles.container}>
            <img
                src={require("../assets/loginBg.png")}
                style={styles.bgImg}/>
            <h1>Welcome to NFT Lens</h1>
            <h2>A minimalist NFT Visualizer</h2>
            <button
                style={styles.loginButton}
                onClick={props.login}>Metamask Login</button>
        </div>
    )
}

export default LoginScreen;

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
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
        marginTop: '20px',
        width: '200px',
        height: '50px',
        backgroundColor: '#00bcd4',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        fontSize: '20px',
        fontWeight: 'bold',
        cursor: 'pointer'

    }
}