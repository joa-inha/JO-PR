import React from 'react';
import {Route} from 'react-router-dom';
import './List.css';
import ListHead from './ListHead';
import {SpecificList} from './List';
import Post from './Post';

function  Notice(){
    // 테스트를 위한 임의 주소 변경 notice -> posts
    // 테스트를 위한 임의 주소 변경 board -> albums
    return(
        <div>
            <ListHead boardName = "공지사항"/>
            <Route path = "/notice" exact render = {() => <SpecificList category = "posts"/>} />
            <Route path = "/notice/:id" component = {Post}/>
            {/* <Route path = "/notice/:id" render = {() => <Post category = "posts"/>}/> */}
            {/* <SpecificList category = "posts"/> */}
        </div>
    );
}

export default Notice;