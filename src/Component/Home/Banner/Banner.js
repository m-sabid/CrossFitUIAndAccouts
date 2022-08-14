
import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import NavSection from '../../Shared/NavSection/NavSection';
import TopSection from '../../Shared/TopSection/TopSection';
import './Banner.css'
import img from '../../../Image/Banner/img1.jpg'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <section>
                <div className='banner'>
                    <TopSection />
                    <NavSection />

                    <Container>
                        <section>
                            <div className='row d-flex justify-content-center'>
                                <div className='header-info col-md-9 col-12 pt-5'>
                                    <div className='banner-title'>
                                        <h1 style={{ color: 'white', fontSize: '3rem', marginTop: '5rem', fontFamily: '"Roboto",sans-serif', fontWeight: '700' }}>EVERY STEPS IS PROGRESS<br />
                                            START TODAY</h1>
                                        <div className='d-flex justify-content-center'>
                                            <Nav.Link as={Link} to='/login'>  <button className='banner-btn'>JOIN GYM</button> </Nav.Link>
                                            <Nav.Link><button className='banner-btn2'>PACKAGES</button></Nav.Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </Container>

                </div>
                <Container>
                    <section>
                        <div className='row d-flex justify-content-between'>
                            <div className='col-md-6 col-12 pt-5 mt-5'>
                                <img class="w-100 h-img" src={img} alt="" style={{ height: '500px', borderRadius: '20px' }} />
                            </div>
                            <div className='col-md-6 col-12 pt-5 mt-5'>
                                <Nav.Link className='ab-btn'>ABOUT US</Nav.Link>
                                <h1 style={{ fontWeight: "800", fontSize: '3rem', textAlign: 'left', marginTop: '10px', fontFamily: '"Roboto",sans-serif' }}>All progress takes place outside the comfort zone</h1>
                                <p style={{ textAlign: 'left', marginTop: '10px', color: 'rgb(142, 142, 142)', fontSize: '18px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book.</p>
                                <p style={{ fontWeight: '600', textAlign: 'left', marginTop: '10px', color: 'rgb(142, 142, 142)', fontSize: '18px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                            </div>
                        </div>
                    </section>
                </Container>
            </section>
        </div>
    );
};

export default Banner;