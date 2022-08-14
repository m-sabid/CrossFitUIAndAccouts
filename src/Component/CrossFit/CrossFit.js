import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import NavSection from '../Shared/NavSection/NavSection';
import TopSection from '../Shared/TopSection/TopSection';
import './CrossFit.css'
import img1 from '../../Image/CrossFit/pic1.png'
import img2 from '../../Image/CrossFit/pic2.png'
import Footer from '../Shared/Footer/Footer';

const CrossFit = () => {
    return (
        <div>
            <div className='top-banner'>
                <TopSection />
                <NavSection />
            </div>
            <Container>
                <section>
                    <div className='row d-flex justify-content-between'>
                        <div className=' col-md-6 col-12 pt-5 mt-5'>
                            <div className='cr-title'>
                                <h1 class="fw" style={{ color: 'rgb(240, 79, 35)', fontWeight: '900', textAlign: 'left', fontFamily: '"Roboto", sans-serif' }}>WHAT IS CROSSFIT?</h1>
                                <p class="mt-4" style={{ color: 'rgb(7, 27, 70)', textAlign: 'left', fontFamily: '"Roboto", sans-serif' }}>We believe fitness should be accessible to everyone, everywhere, regardless of income or access to a gym. With hundreds of professional workouts, healthy recipes and informative articles, as well as one of the most positive communities on the web, you’ll have everything you need to reach your personal fitness goals – for free!</p>
                                <Nav.Link className='cross-see-more' style={{ fontWeight: '900', color: 'rgb(240, 79, 35)', textAlign: 'left', fontFamily: '"Roboto", sans-serif' }}>SEE MORE</Nav.Link>
                            </div>
                        </div>
                        <div className=' col-md-6 col-12 pt-5 mt-5'>
                            <div>
                                <img className="cross-img" src={img1} alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="row d-flex justify-content-between">
                        <div className=" col-md-6 col-12 pt-5 mt-5">
                            <div >
                                <img className="cross-img" src={img2} alt="" />
                            </div>
                        </div>
                        <div className=" col-md-6 col-12 pt-5 mt-5">
                            <div className="cr-title">
                                <h1 style={{ color: 'rgb(240, 79, 35)', fontWeight: '900', textAlign: 'right', fontFamily: '"Roboto", sans-serif' }}>All SESSIONS ARE LED BY A FULLY QUALIFIED CROSSFIT COACH.</h1>
                                <p className="mt-4" style={{ color: 'rgb(7, 27, 70)', textAlign: 'right', fontFamily: '"Roboto", sans-serif' }}>We believe fitness should be accessible to everyone, everywhere, regardless of income or access to a gym. With hundreds of professional workouts, healthy recipes and informative articles, as well as one of the most positive communities on the web, you’ll have everything you need to reach your personal fitness goals – for free!</p>
                                <Nav.Link className='cross-see-more' style={{ fontWeight: '900', color: 'rgb(240, 79, 35)', textAlign: 'right', fontFamily: '"Roboto", sans-serif' }}>SEE MORE</Nav.Link>
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

export default CrossFit;