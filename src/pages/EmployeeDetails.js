import React from "react";
import { MDBDataTable } from "mdbreact";

function EmployeeDetails(props) {
    return (
        <tr key={props.key}>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.gender}</td>
            <td>{props.email}</td>
            <td>{props.cell}</td>
            <td><img src={props.picture.medium} /></td>


        </tr>


    )

}

export default EmployeeDetails;