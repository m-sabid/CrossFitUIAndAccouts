import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import Footer from '../Shared/Footer/Footer';
import NavSection from '../Shared/NavSection/NavSection';
import TopSection from '../Shared/TopSection/TopSection';
import './Trainers.css'
import img from '../../Image/Trainers/tbg.png'

const Trainers = () => {
    return (
        <div>
            <div className='top-banner'>
                <TopSection />
                <NavSection />
            </div>
            <Container>
                <section>
                    <div class="row d-flex justify-content-between">
                        <div className=" col-md-6 col-12 pt-5 mt-5">
                            <h1 className="trainers-t-h1" style={{ color: 'rgb(240, 79, 35)', fontWeight: '900', textAlign: 'left', fontFamily: '"Roboto", sans-serif' }}>BEST PROFESSIONAL TRAINERS FOR YOU</h1>
                            <img className="w-100" src={img} alt="" />
                        </div>
                        <div className=" col-md-5 col-12 mt-5">
                            <p className="trainers-t-p" style={{ color: 'rgb(7, 27, 70)', textAlign: 'left', fontFamily: '"Roboto", sans-serif', lineHeight: '40px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing.</p>
                            <Nav.Link><button className="get-start-btn trainers-g-b">Get Started</button></Nav.Link>
                        </div>
                    </div>
                </section>
            </Container>
            <Footer />
        </div>
    );
};

export default Trainers;