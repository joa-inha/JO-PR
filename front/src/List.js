import React,{useState, useEffect} from 'react';
import axios from 'axios';
import './List.css';
import {Table} from './Table';
import Pagination from './Pagination';

function  MainPageList({category}){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    const getData = async (category) => {
        try{
            setData(null);
            setError(null);
            setLoading(true);
            const response = await axios.get('https://jsonplaceholder.typicode.com/' + category);
            setData(response.data);
        }catch (e) {
            setError(e);
        }
        setLoading(false);
    }
    useEffect(() => {
        getData(category);
    }, [category])

    if(loading) 
        return <div style={{width: '80%'}}>로딩중...</div>
    if(error)
        return <div>에러 발생: {error}</div>
    if(!data)
        return null;

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return(
        <div style={{width: '100%'}}>
            <div className = "list-container">
                <div className = "total-count">
                    <span>
                        전체 {data.length}개
                    </span>
                </div>
                <Table data = {currentPosts} indexOfFirstPost = {indexOfFirstPost}/>
            </div>
        </div>
    );
}

export function  SpecificList({category}){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(20);

    const getData = async (category) => {
        try{
            setData(null);
            setError(null);
            setLoading(true);
            const response = await axios.get('https://jsonplaceholder.typicode.com/' + category);
            setData(response.data);
        }catch (e) {
            setError(e);
        }
        setLoading(false);
    }
    useEffect(() => {
        getData(category);
    }, [category])

    if(loading) 
        return <div style={{width: '80%'}}>로딩중...</div>
    if(error)
        return <div>에러 발생: {error}</div>
    if(!data)
        return null;

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return(
        <div style={{width: '100%'}}>
            <div className = "list-container">
                <div className = "total-count">
                    <span>
                        전체 {data.length}개
                    </span>
                </div>
                <Table category = {category} data = {currentPosts} indexOfFirstPost = {indexOfFirstPost}/>

                <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={data.length}
                    paginate={paginate}
                />
            </div>
        </div>
    );
}

export default MainPageList;