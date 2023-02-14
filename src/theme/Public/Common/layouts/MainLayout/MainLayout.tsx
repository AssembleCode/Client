import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import programmingImg from './../../../../../assets/images/programming.svg';

export const MainLayout: React.FC = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent sticky-top border-bottom">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">AssembleCode</a>

                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 py-3">
                            <li className="nav-item" key={'home'}>
                                <NavLink to={'/'} className="nav-link active">Home</NavLink>
                            </li>
                            <li className="nav-item" key={'service'}>
                                <NavLink to={'/service'} className="nav-link">Service</NavLink>
                            </li>
                            <li className="nav-item" key={'team'}>
                                <NavLink to={'/team'} className="nav-link">Team</NavLink>
                            </li>
                            <li className="nav-item" key={'contact'}>
                                <NavLink to={'/contact-us'} className="nav-link">Contact Us</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="row align-items-center container container-fluid mt-5">
                <div className="col-lg-6 p-4">
                    <h1 className="fw-bolder">Build your next project faster with</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate alias molestiae odio nulla repellat pariatur laborum dolor.</p>
                </div>
                <div className="col-lg-6">

                    <img src={programmingImg} alt="banner-image" className="img-fluid" />
                </div>
            </div>

            <Outlet />
            <div className="footer-layout">
                <footer className="footer pt-10 pb-5 mt-auto bg-light footer-light">
                    <div className="row gx-5">
                        <div className="col-lg-3">
                            <h2>AssembleCode</h2>
                            <p>Build better websites</p>
                            <div className="social-link">
                                <ul className="d-flex justify-content-lg-start py-3">
                                    <li>f</li>
                                    <li>T</li>
                                    <li>L</li>
                                    <li>A</li>
                                </ul>
                            </div>
                            {/* <div className="p-3 border bg-light">Custom column padding</div> */}
                        </div>
                        <div className="col-lg-9">
                            <div className="row">
                                <div className="col-lg-4">
                                    <h3>Products</h3>
                                    <ul>
                                        <li>Project-1</li>
                                        <li>Project-1</li>
                                        <li>Project-1</li>
                                    </ul>
                                </div>
                                <div className="col-lg-4">
                                    <h3>Products</h3>
                                    <ul>
                                        <li>Project-1</li>
                                        <li>Project-1</li>
                                        <li>Project-1</li>
                                    </ul>
                                </div>
                                <div className="col-lg-4">
                                    <h3>Products</h3>
                                    <ul>
                                        <li>Project-1</li>
                                        <li>Project-1</li>
                                        <li>Project-1</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>

            </div>
        </div>
    )
}
