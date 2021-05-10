import React from 'react';
import {Route} from "react-router-dom";
import { SpecificList } from './List';
import ListHead from './ListHead';
import Post from './Post';

function  Board(){
    // 테스트를 위한 임의 주소 변경 notice -> posts
    // 테스트를 위한 임의 주소 변경 board -> albums
    return(
        <div>
            <ListHead boardName = "게시판"/>
            {/* <SpecificList category = "albums"/> */}
            <Route path = "/board" exact render = {() => <SpecificList category = "albums"/>} />
            <Route path = "/board/:id" component = {Post}/>
        </div>
    );
}

export default Board;