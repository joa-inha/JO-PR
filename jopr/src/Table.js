import React from 'react';
import { Link } from 'react-router-dom';


export function MainPageTable({data}){
    return(
        <table>
            <thead>
                <tr>
                    <th key='2'>제목</th> 
                </tr>
            </thead>
            <tbody>
                {data.map((datum) => (
                    <tr key={datum.id}>
                        <td className="title-list">
                            {datum.title}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export function  Table({category, data, indexOfFirstPost}){
    var categories;
    if(category === "posts")
        categories = "notice";
    else if(category === "albums")
        categories = "board";
    else
        categories = category;
    return(
        <table>
            <thead>
                <tr>
                    <th key='1'>No.</th>
                    <th key='2'>제목</th> 
                    <th key='3'>작성자</th>
                    <th key='4'>작성일</th>
                    <th key='5'>조회수</th>
                </tr>
            </thead>
            <tbody>
                {data.map((datum, index) => (
                    <tr key={datum.id}>
                        <td>
                            {indexOfFirstPost + index + 1}
                        </td>
                        <td className="title-list">
                            <Link to = {`${categories}/${datum.id}`}>
                                {datum.title}
                            </Link>
                        </td>
                        <td>
                            {datum.userId}
                        </td>
                        <td>
                            2021-02-00
                        </td>
                        <td>
                            0
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default MainPageTable;