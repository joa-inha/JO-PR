import React from 'react';
import JOAimg from './JOA.png';
import instagram from './instagram.png';
import LoginHeader from './LoginHeader';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';

function  Header(){
    // 로고 이미지
    // 인스타그램 

    // 테스트를 위한 임의 주소 변경 notice -> posts
    // 테스트를 위한 임의 주소 변경 board -> albums
    const ActiveStyle = {
        background: '#ffffff',
        color: '#E0AFD5',
    }
    return(
        <header className = "header">
            <div className = "container">
                <Link className = "logo" to = "/">
                    <img src = {JOAimg} alt = "JOA"/>
                </Link>
                <LoginHeader />
                <a className = "insta" href = "https://www.instagram.com/nmnm_joa/">
                    <img src = {instagram} alt = "instagram"/>
                </a>
            </div>
            <div className = "menu">
                <ul>
                    <li>
                        <NavLink to = "/about" activeStyle={ActiveStyle}>About Us</NavLink>
                    </li>
                    <li>
                        <NavLink to = "/notice" activeStyle={ActiveStyle}>공지사항</NavLink>
                    </li>
                    <li>
                        <NavLink to = "/board" activeStyle={ActiveStyle}>게시판</NavLink>
                    </li>
                    <li>
                        <NavLink to = "/schedule" activeStyle={ActiveStyle}>일정</NavLink>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;