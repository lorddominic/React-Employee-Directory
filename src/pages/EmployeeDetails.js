import React from "react";
import { MDBDataTable } from "mdbreact";

function EmployeeDetails(props) {

    return (
        <React.Fragment>
            <h1>{props.employee.name.first}</h1>
            <h1>{props.employee.name.last}</h1>
            <p>{props.employee.gender}</p>
        </React.Fragment>

    )

}

export default EmployeeDetails;