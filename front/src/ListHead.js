import React from 'react';
import './Header.css'

function  ListHead({boardName}){
    const styleOfhead = {
        minWidth: 'fit-content',
        width: '80%',
        minHeight: '60px',
        marginLeft: 'auto',
        marginRight: 'auto',
    
        display: 'flex',
        alignItems: 'flex-end',
    
        borderBottom: '1px solid #462456',
    }
    const styleOfcategory = {
        marginLeft: '3%',
        marginBottom: '0.1em',
        fontSize: '1.9em',
        fontFamily: 'Nanum Pen Script, cursive',
        color: '#1c0e22',
    }
    return(
        <div style = {styleOfhead}>
            <span style = {styleOfcategory}>
                {boardName}
            </span>
        </div>
    );
}

export default ListHead;