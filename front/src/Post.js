import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Post.css';

function Post({match}){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const temp = match.url;
    const separation = temp.split('/');
    const category = separation[1];
    const id = (separation[2] ? separation[2] : null);

    // json 결정되면 바꿔야 할 것들
    var categories;
    if(category === "notice")
        categories = "posts";
    else if(category === "board")
        categories = "albums";
    else if(category === "about")
        categories = "albums";
    else
        categories = category;
    /// 여기까지

    const url = categories + (id ? '/' + id : '' );

    const getData = async (url) => {
        try{
            var getUrl = 'https://jsonplaceholder.typicode.com/' + url;
            setData(null);
            setError(null);
            setLoading(true);
            const response = await axios.get(getUrl);
            setData(response.data);
        }catch (e) {
            setError(e);
        }
        setLoading(false);
    }
    useEffect(() => {
        getData(url);
    }, [url])

    if(loading) 
        return <div><div style={{width: '80%'}}>로딩중...</div></div>
    if(error)
        return <div>에러 발생: {error}</div>
    if(!data)
        return null;

    return(
        <div className = "post-container">
            {/*내용 채우기*/}
            <div className="post-title"><span>{data.title}</span></div>
            <div className="post-subInfo">
                <ul>
                <li>
                        작성자  <span>{data.userId}</span>
                    </li>
                    <li>
                        작성일  <span>2021-02-00</span>
                    </li>
                    <li>
                        조회수  <span>0</span>
                    </li>
                </ul>
            </div>
            <div className="post-content">
                <p>
                    {data.body}
                </p>
            </div>
            <div className="goList">
                <a href = {`/${category}`}>목록</a>
            </div>
        </div>
    );
}

export default Post;