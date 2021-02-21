import React from 'react';
import { SpecificList } from './List';
import ListHead from './ListHead';

function  Board(){
    return(
        <div>
            <ListHead boardName = "게시판"/>
            <SpecificList category = "albums"/>
        </div>
    );
}

export default Board;