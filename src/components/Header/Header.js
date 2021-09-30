import React, { useState } from 'react';
import { NavLink,useHistory  } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const[toggler,setToggler] = useState(false);
    const[itemname,setItemname] = useState('');
    const history = useHistory();
    const handleMenu = ()=>{
        toggler?setToggler(false):setToggler(true)
    }
    const handleInput = (e) =>{
        setItemname(e.target.value);
    } 
    const handleSearch = ()=>{
        history.push(`/meals/${itemname}`);
        setItemname('');
    }
    return (
        <header>
        <div className="containers">
            <nav className="nav-bar">
                <div className="logo">
                    <a href="/home">Meal <b style={{color: 'red'}}>d</b>b</a>
                </div>
                <div className="search-box">
                    <input type="search" value={itemname} onChange={handleInput} placeholder="Type Here" />
                    <span onClick={handleSearch}><i className="fas fa-search"></i></span>
                </div>
                <ul className={toggler?'menu mobile-menu':'menu'}>
                    <li><NavLink onClick={()=>setToggler(false)} exact to="/">Home</NavLink></li>
                    <li><NavLink onClick={()=>setToggler(false)} to='/meals/'>Meals</NavLink></li>
                </ul>
                <div className={toggler?'trigger mobile-bar':'trigger'} onClick={handleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </div>
    </header> 
    );
};

export default Header;