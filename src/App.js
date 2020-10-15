import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, NavLink,Route} from "react-router-dom";

const Menu = ()=>{
    return <ul>
        <li><NavLink className="nav-link" to="/profile">Профиль</NavLink></li>
        <li><NavLink className="nav-link" to="/settings">Настройки</NavLink></li>
        <li><NavLink className="nav-link" to="/users">Пользователи</NavLink></li>
    </ul>
}
const Profile = ()=>{
    return <div className="row">
        <div className="col-2">
            <img src="https://i2.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1" width="100%" alt=""/>
        </div>
        <div className="col-10">
            <h1>Иван Иванов</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet aut cum dicta ea explicabo fugiat fugit hic, iure maiores modi nemo non omnis perferendis perspiciatis porro quam reprehenderit totam! Amet ex id, ipsam minus nemo non odit perspiciatis quisquam. Animi beatae consequatur explicabo hic, illo ipsam reiciendis vel! Quos?</p>
        </div>

    </div>
}
const Settings = ()=>{
    return <div>
        <h1>Настройки</h1>
        <p>
            <span>Имя:</span><span className="ml-2">Иван</span>
        </p>
        <p>
            <span>Фамилия:</span><span className="ml-2">Иванов</span>
        </p>
        <p>
            <span>Email:</span><span className="ml-2">ivanov@mail.ru</span>
        </p>
        <p>
            <span>ID:</span><span className="ml-2">1</span>
        </p>
    </div>
}
const Users = ()=>{
    return <div>
        <h1>Пользователи</h1>
        <table className="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Имя</th>
                <th scope="col">Фамилия</th>
                <th scope="col">Username</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
            </tr>
            </tbody>
        </table>
    </div>
}

function App() {
  return (
    <div className="container-fluid">
        <BrowserRouter>
            <div className="row">
                <div className="col-3">
                    <Menu/>
                </div>
                <div className="col-9">
                    <Route path="/profile" render={()=>{return <Profile/>}}/>
                    <Route path="/settings" render={()=>{return <Settings/>}}/>
                    <Route path="/users" render={()=>{return <Users/>}}/>
                </div>
            </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
