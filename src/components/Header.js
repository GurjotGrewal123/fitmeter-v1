import '../styles/Header.css';
import { useState } from 'react'
import Cart from './Cart.js'
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <div className="navbar">
            <a class="navbar-logo" href="/">Logo</a>
            <div class="navbar-pages">
                <ul class="navbar-links">
                    <li><Link to="/fitmeter-v1/Progress">Progress</Link></li>
                    <li><Link to="/fitmeter-v1/Nutrition">Nutrition</Link></li>
                    <li><Link to="/fitmeter-v1/Workout">Workout</Link></li>
                </ul>
            </div>
        </div>

    )

}

export default Header