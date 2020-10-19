import React from "react";
import {NavLink} from "react-router-dom";

const Tr = (props)=>{
    return <tr>
        <th scope="row">{props.index}</th>
        <td><NavLink to={"user/"+props.userId}>{props.name} {props.lastname}</NavLink></td>
        <td>{props.email}</td>
    </tr>
}


export class Users extends React.Component{
    constructor() {
        super();
        this.state = {
            usersTable: []
        }
    }

    componentDidMount() {
        fetch("http://o9150210.beget.tech/getUsers")
            .then(response=>response.json())
            .then(users=>{
                let usersArray;
                usersArray = users.map((user,index)=>{
                    return <Tr userId={user.id} name={user.name} lastname={user.lastname} index={index+1} email={user.email}/>;
                })
                this.setState({
                    usersTable:usersArray
                });
            })
    }

    render(){
        return <div>
            <h1>Пользователи</h1>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">Имя Фамилия</th>
                    <th scope="col">Email</th>
                </tr>
                </thead>
                <tbody>
                {this.state.usersTable}

                </tbody>
            </table>
        </div>
    }
}