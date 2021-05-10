import React from 'react';

function  Footer(){
    const style = {
        backgroundColor: '#E0AFD5',
        padding: '0%',
        width: '100%',
        height: '7rem',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'white',
        fontSize: '1em',
    }
    const textStyle = {
        marginBottom: '10px'
    }
    return(
        <footer>
            <div style={style}>
                <span style={textStyle}>
                    Copyright 2021. JOA club all rights reserved.
                </span>
                <span>
                    대표 이메일:  ~~~~@~~~~~~~~~~
                </span>
            </div>
        </footer>
    );
}

export default Footer;