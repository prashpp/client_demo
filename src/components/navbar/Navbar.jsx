import React,{useState} from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from "../assests/images/logo.png"
import searchicon from "../assests/images/search.png"
import usericon from "../assests/images/user.png"
import carticon from "../assests/images/cart.png"




const Navbar = () => {

  const [toggleMenu, setToogleMenu] = useState(false);


  return (
    <div className='header'>
        <div className='upper_navbar'>
            <p>FREE SHIPPING ON ALL ORDERS OVER $75</p>          
        </div>
        <div className='navbar'>
            <div className='container'>
                <div className='navbar_sections'>
                    <div className='logo_Sec'>
                        <a href="#">
                            <img src={logo} alt="" />
                        </a>
                    </div>
                    <div className='navbar_content'>                        
                        <ul>
                            <li><a href="#">MEN"S</a></li>
                            <li><a href="#">WOMEN'S</a></li>
                            <li><a href="#">ACCESSORIES</a></li>
                            <li><a href="#">SALE!</a></li>
                        </ul>
                    </div>
                    <div className='nav_icons'>
                        <ul>
                            <li>
                                <a href="#">
                                    <img src={searchicon} alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={usericon} alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={carticon} alt="" />
                                </a>
                            </li>
                        </ul>
                    
                    </div>
                </div>
                <div className='navbar_sections navbar_sections_menu'>
                    { toggleMenu  
                        ? <RiCloseLine color='#fff' size={27}  onClick={() => setToogleMenu(false)} /> 
                        : <RiMenu3Line color='#fff' size={27}  onClick={() => setToogleMenu(true)} /> 
                    } {
                        toggleMenu && (
                            <div className='navbar_content_container scale-up-center'>
                                <div className='navbar_content navbar_content_menu'>
                                    <ul>
                                        <li><a href="#">MEN"S</a></li>
                                        <li><a href="#">WOMEN'S</a></li>
                                        <li><a href="#">ACCESSORIES</a></li>
                                        <li><a href="#">SALE!</a></li>
                                    </ul>
                                </div>
                            </div>                            
                        )
                    }
                    <div className='logo_Sec'>
                        <a href="#">
                            <img src={logo} alt="" />
                        </a>
                    </div>
                    <div className='nav_icons'>
                        <ul>
                            <li>
                                <a href="#">
                                    <img src={searchicon} alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={usericon} alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={carticon} alt="" />
                                </a>
                            </li>
                        </ul>
                    
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Navbar