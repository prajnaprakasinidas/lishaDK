import React, { useState } from "react";
import Image from "react-bootstrap/esm/Image";
import descIcon from "../../../../assets/images/avatars/avatar1.png"
import ascIcon from "../../../../assets/images/avatars/avatar2.png"

const TableHeader = ({headers, onSorting}) => {

    const[sortingField, setSortingField] = useState("");
    const[sortingOrder, setSortingOrder] = useState("asc");

    const onSortingChange = (field) => {
        const order = 
            field === sortingField && sortingOrder === "asc" ? "desc" : "asc";
        
        setSortingField(field);
        setSortingOrder(order);
        onSorting(field, order);
    }
 
    return (
        <thead>
            <tr>
                {headers.map(({name, field, sortable}) =>(
                    <th key={name}
                        onClick={() => sortable ? onSortingChange(field) : null}
                    >{name}

                    {
                        sortingField && sortingField === field && (
                            <Image className="icz-navbarProfileImg" src={sortingOrder === "asc" ? descIcon : ascIcon} />
                        )
                    }
                    </th>
                ) )}
            </tr>
        </thead>
    )
}

export default TableHeader;