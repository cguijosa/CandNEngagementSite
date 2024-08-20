import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faXmark, faPlus } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <div className='headercindy'>
                    <Link to='/' className='navbar-logo'>
                        <i class={click ? 'fa-typo3-active' : 'fa-typo3'}>C<i className={click ? 'fa-typo3-active' : 'fa-typo3'}>INDY</i></i>
                    </Link>
                </div>
                <div className='headermenu'>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'icon-active' : 'icon'}><FontAwesomeIcon icon={click ? faXmark : faPlus} /></i>
                    </div>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'} FontAwesomeIcon icon={click ? faPlus : faXmark}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/story' className='nav-links' onClick={closeMobileMenu}>
                        Our Story
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/engagement' className='nav-links' onClick={closeMobileMenu}>
                        Engagement Party
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/reception' className='nav-links' onClick={closeMobileMenu}>
                        Reception
                        </Link>    
                    </li>   
                    <li className='nav-item'>
                        <Link to='/registry' className='nav-links' onClick={closeMobileMenu}>
                        Registry
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/photos' className='nav-links' onClick={closeMobileMenu}>
                        Photos
                        </Link>
                    </li>  
                </ul>
            </div>  
            <div className='footer'>
                <i className = {click ? 'fnic-active fn' : 'fnic fn'}>{click ? 'N' : 'NIC'}</i>
            </div>  
        </nav> 
        
    </>
  )
}

export default Navbar
