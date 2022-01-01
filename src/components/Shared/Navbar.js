import React, { useContext } from 'react';
import logo from '../../images/logo/logo.png'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Navbar = () => {
    const { loggedInUser, loggedInUserDispatch } = useContext(UserContext);
    const handleLogOut = () => {
        localStorage.removeItem("userInfo");
        loggedInUserDispatch({ type: 'REMOVE_USER' }); 
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light p-0">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/home">
                    <img src={logo} className="image-responsive" alt="" />
                </Link>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav align-items-center  ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link mr-5" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mr-5" aria-current="page" to="/destinationList">Travel Destinations</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mr-5" aria-current="page" to="/travelGroupList">Travel Groups</Link>
                        </li>
                        {
                            loggedInUser.info.isAdmin &&
                            <li className="nav-item">
                                <Link className="nav-link mr-5" aria-current="page" to="/admin">Admin Panel</Link>
                            </li>
                        }
                        <li className="nav-item">
                            {
                                loggedInUser.info.email 
                                ?
                                <div className="dropdown show">
                                    <div className="nav-link text-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <img className="w-25 mr-2 rounded-circle" src={loggedInUser.info.photo} alt=""/>
                                        {loggedInUser.info.name}
                                    </div>

                                    <ul className="dropdown-menu w-75 green-background" aria-labelledby="dropdownMenuLink">
                                        <li className="dropdown-item text-secondary">
                                            <Link to="/bookmarks">Bookmarks</Link>
                                        </li>
                                        <li onClick={handleLogOut} className="dropdown-item text-secondary font-weight-bold">Logout</li>
                                    </ul>
                                </div>
                                :
                                <Link className="nav-link mr-5 text-black" to="/login">
                                    <FontAwesomeIcon style={{fontSize: '1.3em'}} icon={faUser} /> Login
                                </Link>
                            }
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;