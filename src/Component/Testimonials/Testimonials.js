import React from 'react';
import { Container } from 'react-bootstrap';
import NavSection from '../Shared/NavSection/NavSection';
import TopSection from '../Shared/TopSection/TopSection';
import './Testimonials.css'
import mem from '../../Image/Testimonials/member.webp'
import coco from '../../Image/Testimonials/ccco.png'
import Footer from '../Shared/Footer/Footer';

const Testimonials = () => {
    return (
        <div>
            <div className='top-banner'>
                <TopSection />
                <NavSection />
            </div>
            <Container>
                <section>
                    <div className="testimonials-title mt-5">
                        <h1 style={{ color: 'rgb(240, 79, 35)', fontWeight: '900', fontFamily: '"Roboto", sans-serif' }}>WHAT OUR MEMBERS SAY</h1>
                        <p className="test-t-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, enim risus mattis nisl, laoreet. Viverra vel tempor massa nibh diam quam sit enim. Amet lectus tellus vitae nec, eget. Dolor, eros non non eu praesent sollicitudin bibendum et metus. Tristique tellus fames ipsum ac. </p>
                    </div>
                </section>
                <section>
                    <div className="test-grid mb-5"><div class="test-cart mt-5">
                        <div className="card-flex ">
                            <div>
                                <img className="t-clint-img" src={mem} alt="" />
                                <div className="black">
                                    <h6 style={{ color: 'rgb(255, 255, 255)' }}>first &amp; last name</h6>
                                </div>
                            </div>
                            <div>
                                <img className="comma-img" src={coco} alt="" />
                                <p style={{ textAlign: 'left', marginLeft: '20px' }}><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum elementum et id diam quis nunc mi volutpat sem. Ut odio dictum netus consectetur aliquam ligula. Vehicula non non quis dui aliquam vulputate eget fusce. Pellentesque amet, facilisis rhoncus, pharetra, ac convallis.</i></p>
                            </div>
                        </div>
                    </div>
                        <div className="test-cart mt-5">
                            <div className="card-flex ">
                                <div>
                                    <img className="t-clint-img" src={mem} alt="" />
                                    <div className="black">
                                        <h6 style={{ color: 'rgb(255, 255, 255)' }}>first &amp; last name</h6>
                                    </div>
                                </div>
                                <div>
                                    <img className="comma-img" src={coco} alt="" />
                                    <p style={{ textAlign: 'left', marginLeft: '20px' }}>
                                        <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum elementum et id diam quis nunc mi volutpat sem. Ut odio dictum netus consectetur aliquam ligula. Vehicula non non quis dui aliquam vulputate eget fusce. Pellentesque amet, facilisis rhoncus, pharetra, ac convallis.</i>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="test-cart mt-5">
                            <div className="card-flex ">
                                <div>
                                    <img className="t-clint-img" src={mem} alt="" />
                                    <div className="black">
                                        <h6 style={{ color: 'rgb(255, 255, 255)' }}>first &amp; last name</h6>
                                    </div>
                                </div>
                                <div>
                                    <img className="comma-img" src={coco} alt="" />
                                    <p style={{ textAlign: 'left', marginLeft: '20px' }}>
                                        <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum elementum et id diam quis nunc mi volutpat sem. Ut odio dictum netus consectetur aliquam ligula. Vehicula non non quis dui aliquam vulputate eget fusce. Pellentesque amet, facilisis rhoncus, pharetra, ac convallis.</i>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="test-cart mt-5">
                            <div className="card-flex ">
                                <div>
                                    <img className="t-clint-img" src={mem} alt="" />
                                    <div className="black">
                                        <h6 style={{ color: 'rgb(255, 255, 255)' }}>first &amp; last name</h6>
                                    </div>
                                </div>
                                <div>
                                    <img className="comma-img" src={coco} alt="" />
                                    <p style={{ textAlign: 'left', marginLeft: '20px' }}>
                                        <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum elementum et id diam quis nunc mi volutpat sem. Ut odio dictum netus consectetur aliquam ligula. Vehicula non non quis dui aliquam vulputate eget fusce. Pellentesque amet, facilisis rhoncus, pharetra, ac convallis.</i>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="test-cart mt-5">
                            <div className="card-flex ">
                                <div>
                                    <img className="t-clint-img" src={mem} alt="" />
                                    <div className="black">
                                        <h6 style={{ color: 'rgb(255, 255, 255)' }}>first &amp; last name</h6>
                                    </div>
                                </div>
                                <div>
                                    <img className="comma-img" src={coco} alt="" />
                                    <p style={{ textAlign: 'left', marginLeft: '20px' }}>
                                        <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum elementum et id diam quis nunc mi volutpat sem. Ut odio dictum netus consectetur aliquam ligula. Vehicula non non quis dui aliquam vulputate eget fusce. Pellentesque amet, facilisis rhoncus, pharetra, ac convallis.</i>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="test-cart mt-5">
                            <div className="card-flex ">
                                <div>
                                    <img className="t-clint-img" src={mem} alt="" />
                                    <div className="black">
                                        <h6 style={{ color: 'rgb(255, 255, 255)' }}>first &amp; last name</h6>
                                    </div>
                                </div>
                                <div>
                                    <img className="comma-img" src={coco} alt="" />
                                    <p style={{ textAlign: 'left', marginLeft: '20px' }}>
                                        <i>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum elementum et id diam quis nunc mi volutpat sem. Ut odio dictum netus consectetur aliquam ligula. Vehicula non non quis dui aliquam vulputate eget fusce. Pellentesque amet, facilisis rhoncus, pharetra, ac convallis.</i>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </Container>
            <Footer/>
        </div>
    );
};

export default Testimonials;