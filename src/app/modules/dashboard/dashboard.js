import React from "react";
import DataTable from "../../shared/components/Datatable/DataTable";
import Wrapper from "../../helpers/wrapper";

export const Dashboard = () => {



    const headers = [
        { name: "No", field: "id", sortable: false },
        { name: "Name", field: "name", sortable: true },
        { name: "Email", field: "email", sortable: true },
        { name: "Comment", field: "body", sortable: false }
    ]

    

    return (
        <Wrapper>
            <h1>Dashboard RUNNING</h1>
            <DataTable Headers={headers} TableSize={5}/>
        </Wrapper>
    )
}
