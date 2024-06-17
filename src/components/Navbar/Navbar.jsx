import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Flex } from 'antd';
import './Navbar.css'
import Cartwidget from '../CartWiget/CartWidget';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <Link to='/' className='logo'><h1>Padel Shop</h1></Link>
            <ul className='menu'>
                <li><Button type="primary"><Link to='/'>Inicio</Link></Button></li>
                <li><Button type="primary"><Link to='/productos/nox'>Nox</Link></Button></li>
                <li><Button type="primary"><Link to='/productos/bullpadel'>Bull Padel</Link></Button></li>
                <li><Button type="primary"><Link to='/productos/varlion'>Varlion</Link></Button></li>
                <li><Button type="primary"><Link to='/productos/adidas'>Adidas</Link></Button></li>
                <li><Button type="primary"><Link to='/productos/starvie'>Star Vie</Link></Button></li>                
                <li><Button type="primary"><Link to='/productos/babolat'>Babolat</Link></Button></li>
                <Cartwidget />
            </ul>
        </nav>
    )
}

export default Navbar