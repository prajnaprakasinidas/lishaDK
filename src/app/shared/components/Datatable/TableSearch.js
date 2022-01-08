import React, { useState } from "react";

const TableSearch = ({onSearch}) =>{
    const [search, setSearch] = useState('');

    const onInputChange = (value) => {
        setSearch(value);
        onSearch(value);
    }

    return(
        <input 
            type="text"
            className="form-control"
            style={{width: "240px"}}
            placeholder="search"
            value={search}
            onChange={(e) => onInputChange(e.target.value)}
        />
    )
}

export default TableSearch;