import React, { useContext } from 'react';
import logo from '../../images/logo/logo.png';
import './Login.css';
import { AiFillFacebook } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { handleFbSignIn, handleGoogleSignIn, initializeLoginFramework } from './LoginManager';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    initializeLoginFramework();
    const {loggedInUser, loggedInUserDispatch} = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    const handleResponse = (res) => {
        if (res.success) {
            fetch('http://localhost:5000/checkUser', { 
                method: 'POST',
                headers : { 
                    'Content-Type': 'application/json'
                   },
                body: JSON.stringify({email: res.email, name: res.name, photo: res.photo})
            })
                .then(result => result.json())
                .then(userInfo => {
                    loggedInUserDispatch({ type: 'SET_USER', userInfo: userInfo });
                    localStorage.setItem("userInfo", JSON.stringify(userInfo));
                });

            history.replace(from);
        }
    };

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res);
            });
    };

    const fbSignIn = () => {
        handleFbSignIn()
          .then(res => {
            handleResponse(res);
          })
    };

    return (
        <div className="login-container">
            <div style={{marginTop: '70px'}} className="text-center">
                <img className="image-header" src={logo} alt="" />
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <h2 className="text text-center">Join All The Users From Different Regions</h2>
                        <p className="text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dicta corrupti, molestiae necessitatibus error exercitationem, pariatur quae, in saepe soluta officia? Fugit quia inventore eaque reiciendis esse ipsam quisquam sequi.
                        </p>


                        <h5 className="continue-text my-5"> Continue with</h5>

                        <div className="login-buttons text-center row justify-content-center">
                            <div onClick={fbSignIn} className="facebook row justify-content-center">
                                <h5 className="social-icon mt-1 mr-2"><AiFillFacebook /></h5>
                                <h5 className="align-self-center">Facebook</h5>
                            </div>
                            <div onClick={googleSignIn} className="gmail row justify-content-center">
                                <h5 className="social-icon mt-1 mr-2"><SiGmail /></h5>
                                <h5 className="align-self-center">Gmail</h5>
                            </div>
                        </div>

                        {
                            loggedInUser.info.error && <p className="text-center text-danger mt-5">{loggedInUser.info.error}</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;