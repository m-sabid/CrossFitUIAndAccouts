import React from 'react';
import './HomeReview.css'
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import com1 from '../../../Image/HomeReview/coma.png'
import user from '../../../Image/HomeReview/user.jpg'

const HomeReview = () => {
    return (
        <div>
            <div className='home-review mt-5'>
                <div className='container pt-2'>
                    <Splide aria-label=""
                        options={{
                            rewind: true,
                            gap: '1rem',
                        }}
                    >
                        <SplideSlide>
                            <div className='row d-flex justify-content-between'>
                                <div className='col-md-8 col-12'>
                                    <img className="comma1" src={com1} alt="" />
                                    <div>
                                        <p class="review-text" style={{ color: 'white' }}><i>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book. when an unknown printer took a gallery of type and scrambled it to make a type specimen book. when an unknown printer took a gallery of type and scrambled it to make a type specimen book.when an unknown printer took a gallery of type and scrambled it to make a type specimen book.</i></p>
                                    </div>
                                    <img className="comma2" src={com1} alt="" />
                                </div>
                                <div className='col-md-3 col-12'>
                                    <img className="review-man" src={user} alt="" />
                                    <h4 className="review-name">JOHN DOE</h4>
                                    <p style={{color: 'white', fontSize: '18px', paddingBottom: '30px'}}>Gym User</p>
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className='row d-flex justify-content-between'>
                                <div className='col-md-8 col-12'>
                                    <img className="comma1" src={com1} alt="" />
                                    <div>
                                        <p class="review-text" style={{ color: 'white' }}><i>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book. when an unknown printer took a gallery of type and scrambled it to make a type specimen book. when an unknown printer took a gallery of type and scrambled it to make a type specimen book.when an unknown printer took a gallery of type and scrambled it to make a type specimen book.</i></p>
                                    </div>
                                    <img className="comma2" src={com1} alt="" />
                                </div>
                                <div className='col-md-3 col-12'>
                                    <img className="review-man" src={user} alt="" />
                                    <h4 className="review-name">JOHN DOE</h4>
                                    <p style={{color: 'white', fontSize: '18px', paddingBottom: '30px'}}>Gym User</p>
                                </div>
                            </div>
                        </SplideSlide>
                        <SplideSlide>
                            <div className='row d-flex justify-content-between'>
                                <div className='col-md-8 col-12'>
                                    <img className="comma1" src={com1} alt="" />
                                    <div>
                                        <p class="review-text" style={{ color: 'white' }}><i>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book. when an unknown printer took a gallery of type and scrambled it to make a type specimen book. when an unknown printer took a gallery of type and scrambled it to make a type specimen book.when an unknown printer took a gallery of type and scrambled it to make a type specimen book.</i></p>
                                    </div>
                                    <img className="comma2" src={com1} alt="" />
                                </div>
                                <div className='col-md-3 col-12'>
                                    <img className="review-man" src={user} alt="" />
                                    <h4 className="review-name">JOHN DOE</h4>
                                    <p style={{color: 'white', fontSize: '18px', paddingBottom: '30px'}}>Gym User</p>
                                </div>
                            </div>
                        </SplideSlide>
                      
                    </Splide>
                </div>
            </div>
        </div>
    );
};

export default HomeReview;