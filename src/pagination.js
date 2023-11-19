import React from "react";
import "./pagination.css";

const Paginations = ({
    totalPosts,
    postsPerPage,
    setCurrentPage,
    currentPage,
}) => {
    // pagination Logic
    let pages = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }
    return (
        <div className='pagination'>
            {pages.map((page, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(page)}
                        className={page === currentPage ? "active" : ""}>
                        {page}
                    </button>
                );
            })}
        </div>
    );
};

export default Paginations;