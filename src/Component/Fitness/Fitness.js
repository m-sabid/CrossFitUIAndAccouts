import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import NavSection from '../Shared/NavSection/NavSection';
import TopSection from '../Shared/TopSection/TopSection';
import './Fitness.css'
import kik from '../../Image/Fitness/kik.png'
import nu from '../../Image/Fitness/nu.png'
import Footer from '../Shared/Footer/Footer';

const Fitness = () => {
    return (
        <div>
            <div className='top-banner'>
                <TopSection />
                <NavSection />
            </div>

            <Container>
                <section>
                    <div className='kik-flex'>
                        <div className='mt-5 pt-5'>
                            <h1 className='kik-h1'>KICK BOXING</h1>
                            <p className='k-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className='d-flex justify-content-left'>
                                <Nav.Link><button className='kik-btn'>Get Started</button> </Nav.Link>
                                <Nav.Link> <button className='kik-btn2'>Preview</button></Nav.Link>
                            </div>
                        </div>
                        <div className=' mt-5'>
                            <div className='kik-img-bg'>
                                <img className='kik-img' src={kik} alt='' />
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='nu-flex'>
                        <div className=' mt-5'>
                            <div className='nu-img-bg'>
                                <img className='kik-img' src={nu} alt='' />
                            </div>
                        </div>
                        <div className='mt-5 pt-5'>
                            <h1 className='nu-h1'>NUTRIT<br />ION</h1>
                            <p className='nu-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className='d-flex justify-content-right n-b'>
                                <Nav.Link><button className='nu-btn'>Get Started</button> </Nav.Link>
                                <Nav.Link> <button className='nu-btn2'>Preview</button></Nav.Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="row d-flex justify-content-between">
                        <div className=" col-md-6 col-12 pt-5 mt-5">
                            <div className="">
                                <h1 className="" style={{ color: 'rgb(240, 79, 35)', fontWeight: '900', textAlign: 'left', fontFamily: '"Roboto", sans-serif' }}>RECOMENDED PACKAGES FOR YOU</h1>
                            </div>
                        </div>
                    </div>
                    <div className="cross-packages mb-5">
                        <div className="packages-cart mt-5">
                            <div className="pack-cart-title">
                                <h5 style={{ color: 'rgb(255, 255, 255)', fontFamily: '"Roboto", sans-serif', fontWeight: '900', backgroundColor: 'rgb(250, 166, 26)', padding: '20px 0px' }}>PACKAGE 01</h5>
                            </div>
                            <div className="p-3">
                                <p className="mt-2" style={{ fontSize: '10.875px' }}>STARTS AT*</p>
                                <h1 style={{ fontSize: '3.5rem', marginTop: '-20px' }}>$200<sub style={{ fontSize: '1.5rem' }}>/yr</sub></h1>
                                <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et, vel mattis elit id eget habitant turpis.</p>
                            </div>
                            <div className="px-5">
                                <h5 style={{ textAlign: 'left' }}>Facilities</h5>
                                <li style={{ fontWeight: '600', textAlign: 'left', marginLeft: '5px' }}>~600 Full-Length Workout Videos </li>
                                <li style={{ fontWeight: '600', textAlign: 'left', marginLeft: '5px' }}>Customizable Calendar</li>
                                <li style={{ fontWeight: '600', textAlign: 'left', marginLeft: '5px' }}>Healthy Recipes</li>
                                <li style={{ fontWeight: '600', textAlign: 'left', marginLeft: '5px' }}>Health and Fitness articles</li>
                                <li style={{ fontWeight: '600', textAlign: 'left', marginLeft: '5px' }}>Positive and Supportive Online Community</li>
                                <li style={{ fontWeight: '600', textAlign: 'left', marginLeft: '5px' }}>No Credit Card Needed</li>
                            </div>
                            <p className="mt-4 px-5" style={{ fontSize: '11px' }}>* First time members must join a chapter, council or community for their first year of membership</p>
                            <div className="py-2" style={{ borderTop: '1px solid rgb(166, 148, 144)' }}>
                                <Nav.Link className=''>  <button class="get-start-btn">Get Started</button></Nav.Link>

                            </div>
                        </div>
                        <div className="packages-cart mt-5">
                            <div className="pack-cart-title">
                                <h5 style={{ color: 'rgb(255, 255, 255)', fontFamily: '"Roboto", sans-serif', fontWeight: '900', backgroundColor: 'rgb(250, 166, 26)', padding: '20px 0px' }}>PACKAGE 01</h5>
                            </div>
                            <div className="p-3">
                                <p className="mt-2" style={{ fontSize: '10.875px' }}>STARTS AT*</p>
                                <h1 style={{ fontSize: '3.5rem', marginTop: '-20px' }}>$200<sub style={{ fontSize: '1.5rem' }}>/yr</sub></h1>
                                <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et, vel mattis elit id eget habitant turpis.</p>
                            </div>
                            <div className="px-5">
                                <h5 style={{ textAlign: 'left' }}>Facilities</h5>
                                <li style={{ fontWeight: '600', textAlign: 'left', marginLeft: '5px' }}>~600 Full-Length Workout Videos </li>
                                <li style={{ fontWeight: '600', textAlign: 'left', marginLeft: '5px' }}>Customizable Calendar</li>
                                <li style={{ fontWeight: '600', textAlign: 'left', marginLeft: '5px' }}>Healthy Recipes</li>
                                <li style={{ fontWeight: '600', textAlign: 'left', marginLeft: '5px' }}>Health and Fitness articles</li>
                                <li style={{ fontWeight: '600', textAlign: 'left', marginLeft: '5px' }}>Positive and Supportive Online Community</li>
                                <li style={{ fontWeight: '600', textAlign: 'left', marginLeft: '5px' }}>No Credit Card Needed</li>
                            </div>
                            <p className="mt-4 px-5" style={{ fontSize: '11px' }}>* First time members must join a chapter, council or community for their first year of membership</p>
                            <div className="py-2" style={{ borderTop: '1px solid rgb(166, 148, 144)' }}>
                                <Nav.Link className=''>  <button class="get-start-btn">Get Started</button></Nav.Link>

                            </div>
                        </div>
                        <div className="packages-cart mt-5">
                            <div className="pack-cart-title">
                                <h5 style={{ color: 'rgb(255, 255, 255)', fontFamily: '"Roboto", sans-serif', fontWeight: '900', backgroundColor: 'rgb(250, 166, 26)', padding: '20px 0px' }}>PACKAGE 01</h5>
                            </div>
                            <div className="p-3">
                                <p className="mt-2" style={{ fontSize: '10.875px' }}>STARTS AT*</p>
                                <h1 style={{ fontSize: '3.5rem', marginTop: '-20px' }}>$200<sub style={{ fontSize: '1.5rem' }}>/yr</sub></h1>
                                <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et, vel mattis elit id eget habitant turpis.</p>
                            </div>
                            <div className="px-5">
                                <h5 style={{ textAlign: 'left' }}>Facilities</h5>
                                <li style={{ fontWeight: '600', textAlign: 'left', marginLeft: '5px' }}>~600 Full-Length Workout Videos </li>
                                <li style={{ fontWeight: '600', textAlign: 'left', marginLeft: '5px' }}>Customizable Calendar</li>
                                <li style={{ fontWeight: '600', textAlign: 'left', marginLeft: '5px' }}>Healthy Recipes</li>
                                <li style={{ fontWeight: '600', textAlign: 'left', marginLeft: '5px' }}>Health and Fitness articles</li>
                                <li style={{ fontWeight: '600', textAlign: 'left', marginLeft: '5px' }}>Positive and Supportive Online Community</li>
                                <li style={{ fontWeight: '600', textAlign: 'left', marginLeft: '5px' }}>No Credit Card Needed</li>
                            </div>
                            <p className="mt-4 px-5" style={{ fontSize: '11px' }}>* First time members must join a chapter, council or community for their first year of membership</p>
                            <div className="py-2" style={{ borderTop: '1px solid rgb(166, 148, 144)' }}>
                                <Nav.Link className=''>  <button class="get-start-btn">Get Started</button></Nav.Link>

                            </div>
                        </div>

                    </div>
                </section>
            </Container>
            <Footer/>
        </div>
    );
};

export default Fitness;