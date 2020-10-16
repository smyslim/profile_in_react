import React from 'react';
import {NavLink} from "react-router-dom";

export const Menu = ()=>{
    return <ul>
        <li><NavLink className="nav-link" to="/profile">Профиль</NavLink></li>
        <li><NavLink className="nav-link" to="/settings">Настройки</NavLink></li>
        <li><NavLink className="nav-link" to="/users">Пользователи</NavLink></li>
    </ul>
}