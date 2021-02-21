import React, {useState, useEffect} from 'react';
import axios from 'react-dom';

function Post({match}){
    const url = match.url;

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getData = async (url) => {
        try{
            setData(null);
            setError(null);
            setLoading(true);
            const response = await axios.get('https://jsonplaceholder.typicode.com/' + url);
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
        return <div style={{width: '80%'}}>로딩중...</div>
    if(error)
        return <div>에러 발생: {error}</div>
    if(!data)
        return null;

    return(
        <div>
            Hellow  World! (MyTest)
            <p>{data}</p>
        </div>
    );
}

export default Post;