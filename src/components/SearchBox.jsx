import React from 'react';

const SearchBox = ({ searchChange }) => {
    return (
        <div className="search-box">
            <input
                className="input"
                type="search"
                placeholder="search robots"
                onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox;