import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import aiImg from './../../../../assets/images/ai.png';
import bgLogoImg from './../../../../assets/images/bglogo.png';
import { Link } from "react-router-dom";

const RegisterView: FC<any> = () => {
    return (
        <section>
            <div className="container-fluid">
                <div className="row d-flex justify-content-center align-items-center min-vw-100">
                    <div className="col-lg-6">
                        <div className="login-area">
                            <div className="row">
                                <div className="col-lg-5">
                                    <div className="login-img d-flex justify-content-center align-items-center">
                                        <div className="img-data text-center ">
                                            <img src={aiImg} alt="AI Image" className="img-fluid" />
                                            <Link to="/auth/login">Log In Now</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="logo-area">
                                        <div className="logo">
                                            <Link to="/">
                                                <img src={bgLogoImg} height={60} width={80} alt="Logo" />
                                            </Link>
                                        </div>
                                        <div className="logo-data">
                                            <h4>Role Management System</h4>
                                            <p>A Product by Assemble Code System Ltd.</p>
                                        </div>
                                    </div>
                                    <div className="login-info">
                                        <h3 className="fw-bold mb-2">Register</h3>
                                        <hr className="separator-mini mb-4" />
                                    </div>
                                    <div className="login-form">
                                        <form action="" method="" className="form">

                                            <div className="input-data">
                                                <label htmlFor="phone">Mobile Number <span>*</span> </label>
                                                <input type="phone" placeholder="enter your eamil" id="phone" className="form-control form-input" required />
                                                <i className="fa-solid fa-user icon">
                                                    <FontAwesomeIcon icon={faPhone} />
                                                </i>
                                            </div>

                                            <div className="input-data">
                                                <label htmlFor="email">Email <span>*</span> </label>
                                                <input type="email" placeholder="enter your eamil" id="eamil" className="form-control form-input" required />
                                                <i className="fa-solid fa-user icon">
                                                    <FontAwesomeIcon icon={faUser} />
                                                </i>
                                            </div>

                                            <div className="input-data">
                                                <label htmlFor="password">Password <span>*</span></label>
                                                <input type="password" placeholder="enter your password" id="password" className="form-control form-input" required />
                                                <i className="fa-solid fa-lock icon">
                                                    <FontAwesomeIcon icon={faLock} />
                                                </i>
                                            </div>

                                            <div className="input-data">
                                                <label htmlFor="confirm_password">Confirm Password <span>*</span></label>
                                                <input type="password" placeholder="enter your password" id="confirm_password" className="form-control form-input" required />
                                                <i className="fa-solid fa-lock icon">
                                                    <FontAwesomeIcon icon={faLock} />
                                                </i>
                                            </div>

                                            <div className="input-data mb-2">
                                                <div className="form-check">
                                                    <div className="checkbox">
                                                        <input className="form-check-input" type="checkbox" value="" id="" checked required />
                                                        <label className="form-check-label" htmlFor="">
                                                            Default checkbox
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="d-flex justify-content-between">
                                                <div className="forgot">
                                                    <a href="">Forgot password?</a>
                                                </div>

                                                <button className="btn btn-success float-end">Register</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default RegisterView;