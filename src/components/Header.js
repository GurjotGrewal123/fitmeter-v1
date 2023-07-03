import '../styles/Header.css';
import { useState } from 'react'
import Cart from './Cart.js'

const Header = () => {

    return (
        <div className="navbar">
            <a class="navbar-logo" href="/">Logo</a>
            <div class="navbar-pages">
                <ul class="navbar-links">
                    <li><a href="/Progress">Progress</a></li>
                    <li><a href="/Nutrition">Nutrition</a></li>
                    <li><a href="Workout">Workout</a></li>
                </ul>
            </div>
        </div>

    )

}

export default Header