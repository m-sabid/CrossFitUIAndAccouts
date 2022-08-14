import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import './HomeShop.css'
import sp from '../../../Image/HomeShop/single-p-img.png'
import gpi from '../../../Image/HomeShop/glo-p-img.png'

const HomeShop = () => {
    return (
        <div>
            <Container>
                <div className='h-shop mt-5'>
                    <h1 class="h-s-title">Special Offers</h1>
                </div>
                <section>
                    <div className='h-s-main'>
                        <div className='row d-flex justify-content-between'>
                            <div className='col-md-6 col-12 mt-5'>
                                <Nav.Link className='ab-btn'>SALE</Nav.Link>
                                <div className='simple-p-img'>
                                    <img className='pot-i' src={sp} alt='' />
                                </div>
                                <div className='single-p-info'>
                                    <h2 class="mt-4" style={{ textAlign: 'left', fontWeight: '700' }}>Product Name</h2>
                                    <p style={{ textAlign: 'left', marginTop: '10px', color: 'rgb(142, 142, 142)', fontSize: '18px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently. </p>
                                </div>
                                <div className='justify-content-between mt-5 single-f'>
                                    <h1 className='s-p-p' style={{ fontWeight: '900', fontSize: '3rem' }}>$100</h1>
                                    <Nav.Link><button class="h-s-add-btn">ADD TO CART</button></Nav.Link>
                                </div>
                            </div>
                            <div className='col-md-6 col-12 mt-5 pt-5 card-m'>
                                <div className='h-s-cart'>
                                    <div className='h-s-cart-grid'>
                                        <div className='cart'>
                                            <div className='h-s-p-i'>
                                                <img class="p-img" src={gpi} alt="" />
                                            </div>
                                            <h4 className='mt-5' style={{ fontWeight: '700', fontFamily: '"Roboto", sans-serif' }}>Product Name goes here</h4>
                                            <h5 class="mt-5" style={{color: 'rgb(255, 255, 255)', backgroundColor: 'rgb(240, 79, 35)', width: '100px', margin:' auto', padding: '10px 0px', borderRadius: '30px', fontWeight: '700'}}>$20</h5>
                                            <h6 class="mt-5">+Add to cart</h6>
                                        </div>
                                        <div className='cart'>
                                            <div className='h-s-p-i'>
                                                <img class="p-img" src={gpi} alt="" />
                                            </div>
                                            <h4 className='mt-5' style={{ fontWeight: '700', fontFamily: '"Roboto", sans-serif' }}>Product Name goes here</h4>
                                            <h5 class="mt-5" style={{color: 'rgb(255, 255, 255)', backgroundColor: 'rgb(240, 79, 35)', width: '100px', margin:' auto', padding: '10px 0px', borderRadius: '30px', fontWeight: '700'}}>$20</h5>
                                            <h6 class="mt-5">+Add to cart</h6>
                                        </div>
                                        <div className='cart'>
                                            <div className='h-s-p-i'>
                                                <img class="p-img" src={gpi} alt="" />
                                            </div>
                                            <h4 className='mt-5' style={{ fontWeight: '700', fontFamily: '"Roboto", sans-serif' }}>Product Name goes here</h4>
                                            <h5 class="mt-5" style={{color: 'rgb(255, 255, 255)', backgroundColor: 'rgb(240, 79, 35)', width: '100px', margin:' auto', padding: '10px 0px', borderRadius: '30px', fontWeight: '700'}}>$20</h5>
                                            <h6 class="mt-5">+Add to cart</h6>
                                        </div>
                                        <div className='cart'>
                                            <div className='h-s-p-i'>
                                                <img class="p-img" src={gpi} alt="" />
                                            </div>
                                            <h4 className='mt-5' style={{ fontWeight: '700', fontFamily: '"Roboto", sans-serif' }}>Product Name goes here</h4>
                                            <h5 class="mt-5" style={{color: 'rgb(255, 255, 255)', backgroundColor: 'rgb(240, 79, 35)', width: '100px', margin:' auto', padding: '10px 0px', borderRadius: '30px', fontWeight: '700'}}>$20</h5>
                                            <h6 class="mt-5">+Add to cart</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
        </div>
    );
};

export default HomeShop;