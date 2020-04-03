import React from "react";
import axios from "axios";
import EmployeeDetails from "./EmployeeDetails";
class Employee extends React.Component {
    state = {
        allRecords: [],
        displayRecords: []
    }
    componentDidMount = () => {
        axios.get("https://randomuser.me/api/?results=200&nat=us")
            .then(records => {
                console.log(records);
         
                this.setState({ allRecords: records.data.results, displayRecords: records.data.results }, () => console.log(this.state))
            }
            )
    }

    alphabetize = () => {
        let dontMessWithState = new Array(...this.state.allRecords)//deep copy
        console.log(dontMessWithState)
        dontMessWithState.sort((firs,seco) => {
            console.log(firs.name.first - seco.name.first)
            return seco.name.first - firs.name.first
        })
        console.log(dontMessWithState)
        this.setState({ displayRecords: dontMessWithState })
    }
    getLadies = () => {
        let dontMessWithState = new Array(...this.state.allRecords)//deep copy
        console.log(dontMessWithState)
        dontMessWithState.filter(element => {
           
            return element.gender==="female"
        })
        console.log(dontMessWithState)
        this.setState({ displayRecords: dontMessWithState })
    }

    render() {
        return (<div>
            <h1 onClick={this.alphabetize}>
                Employee Management System
            </h1>
            {this.state.displayRecords.map((employee, index) => {
                return (
                    <EmployeeDetails
                     employee={employee}
                     key={index}
                     gender={this.gender}
                    //  firstName = {this.name.first}
                    //  lastName = {this.name.last}
                     location = {this.location.city}
                     email = {this.email}
                     cell = {this.cell} 
                     />
                )
            })}
        </div>)
    }
}

export default Employee;
