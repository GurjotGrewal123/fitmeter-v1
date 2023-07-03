import '../styles/Header.css';
import { useState } from 'react'
import Cart from './Cart.js'

const Header = () => {

    return (
        <div className="navbar">
            <a class="navbar-logo" href="/">Logo</a>
            <div class="navbar-pages">
                <ul class="navbar-links">
                    <li><a href="/fitmeter-v1/Progress">Progress</a></li>
                    <li><a href="/fitmeter-v1/Nutrition">Nutrition</a></li>
                    <li><a href="/fitmeter-v1/Workout">Workout</a></li>
                </ul>
            </div>
        </div>

    )

}

export default Header