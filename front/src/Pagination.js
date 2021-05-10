import React from 'react';
import './List.css';

function  Pagination({ postsPerPage, totalPosts, paginate }){
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
      }
    return(
        <div className = "pagination">
            <ul>
            {pageNumbers.map(number => (
              <li key={number} className='page-item'>
                <a onClick={() => paginate(number)} href='#' className='page-link'>
                  {number}
                </a>
              </li>
            ))}
            </ul>
        </div>
    );
}

export default Pagination;