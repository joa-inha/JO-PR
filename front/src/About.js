import React from 'react';
import {Route} from 'react-router-dom'
import ListHead from './ListHead';
import Post from './Post';

function  About(){
    return(
        <div>
            <div className = "banner">
                <ListHead boardName = "About Us"/>
            </div>
            <Route path = "/about" component = {Post}/>
        </div>
    );
}

export default About;