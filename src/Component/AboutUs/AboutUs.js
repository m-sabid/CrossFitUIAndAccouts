import React from 'react';
import NavSection from '../Shared/NavSection/NavSection';
import TopSection from '../Shared/TopSection/TopSection';
import './AboutUs.css'
import abb from '../../Image/AboutUs/abb-bg.png'
import { Container } from 'react-bootstrap';
import Footer from '../Shared/Footer/Footer';

const AboutUs = () => {
    return (
        <div>
            <div className='top-banner'>
                <TopSection />
                <NavSection />
            </div>
            <div className='w-100'>
                <img className="w-100" src={abb} alt="" />
            </div>
            <Container>
                <div className='about-title mt-5'>
                    <h1 class="ab-t-h1" style={{ fontWeight: '700', margin: 'auto', fontFamily: '"Roboto", sans-serif' }}>Lorem Ipsum is simply dummy text of the printing</h1>
                    <p class="ab-t-p mt-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                </div>
                <section>
                    <div className='ab-why mt-5' style={{ borderLeft: '2px solid rgb(244, 132, 0)', paddingLeft: '20px' }}>
                        <div className="w-title  d-flex justify-content-start">
                            <h4 style={{ fontWeight: '700', fontFamily: '"Roboto", sans-serif', borderBottom: '1px solid rgb(244, 132, 0)', paddingBottom: '5px' }}>why us</h4>
                        </div>
                        <div>
                            <p style={{fontFamily: '"Roboto", sans-serif', textAlign: 'left', color: 'rgb(7, 27, 70)'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit ultrices volutpat eu pharetra tristique. Sed et magna rhoncus morbi facilisis diam ut. Quisque quam velit scelerisque ac faucibus auctor. Facilisis nunc, semper nisi aliquam dui venenatis viverra tincidunt. Vestibulum quis facilisi varius gravida scelerisque congue libero. Nascetur morbi odio mattis sed elit mollis suspendisse. Mattis in arcu, ut blandit libero pellentesque elit sed. Nunc cursus tristique nunc, nec. Cras mattis id tortor cursus sit sed. Vulputate euismod tincidunt massa accumsan in fames et egestas adipiscing. Risus at amet pretium, phasellus. Urna elementum semper condimentum nibh fermentum a. Aliquam parturient sagittis eu, eleifend maecenas proin volutpat. Vulputate nisl interdum tincidunt mi sit donec. Eu sed elementum magnis lobortis non, est. Sed mauris placerat varius vestibulum. Semper nulla risus faucibus vitae eget pellentesque.</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='ab-why mt-5' style={{ borderRight: '2px solid rgb(63, 1, 236)', paddingRight: '20px' }}>
                        <div className="w-title  d-flex justify-content-end">
                            <h4 style={{ fontWeight: '700', fontFamily: '"Roboto", sans-serif', borderBottom: '1px solid rgb(244, 132, 0)', paddingBottom: '5px' }}>Mission & Vision</h4>
                        </div>
                        <div>
                            <p style={{fontFamily: '"Roboto", sans-serif', textAlign: 'right', color: 'rgb(7, 27, 70)'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit ultrices volutpat eu pharetra tristique. Sed et magna rhoncus morbi facilisis diam ut. Quisque quam velit scelerisque ac faucibus auctor. Facilisis nunc, semper nisi aliquam dui venenatis viverra tincidunt. Vestibulum quis facilisi varius gravida scelerisque congue libero. Nascetur morbi odio mattis sed elit mollis suspendisse. Mattis in arcu, ut blandit libero pellentesque elit sed. Nunc cursus tristique nunc, nec. Cras mattis id tortor cursus sit sed. Vulputate euismod tincidunt massa accumsan in fames et egestas adipiscing. Risus at amet pretium, phasellus. Urna elementum semper condimentum nibh fermentum a. Aliquam parturient sagittis eu, eleifend maecenas proin volutpat. Vulputate nisl interdum tincidunt mi sit donec. Eu sed elementum magnis lobortis non, est. Sed mauris placerat varius vestibulum. Semper nulla risus faucibus vitae eget pellentesque.</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='ab-why mt-5 mb-5' style={{ borderLeft: '2px solid rgb(244, 132, 0)', paddingLeft: '20px' }}>
                        <div className="w-title  d-flex justify-content-start">
                            <h4 style={{ fontWeight: '700', fontFamily: '"Roboto", sans-serif', borderBottom: '1px solid rgb(244, 132, 0)', paddingBottom: '5px' }}>Core Valus</h4>
                        </div>
                        <div>
                            <p style={{fontFamily: '"Roboto", sans-serif', textAlign: 'left', color: 'rgb(7, 27, 70)'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit ultrices volutpat eu pharetra tristique. Sed et magna rhoncus morbi facilisis diam ut. Quisque quam velit scelerisque ac faucibus auctor. Facilisis nunc, semper nisi aliquam dui venenatis viverra tincidunt. Vestibulum quis facilisi varius gravida scelerisque congue libero. Nascetur morbi odio mattis sed elit mollis suspendisse. Mattis in arcu, ut blandit libero pellentesque elit sed. Nunc cursus tristique nunc, nec. Cras mattis id tortor cursus sit sed. Vulputate euismod tincidunt massa accumsan in fames et egestas adipiscing. Risus at amet pretium, phasellus. Urna elementum semper condimentum nibh fermentum a. Aliquam parturient sagittis eu, eleifend maecenas proin volutpat. Vulputate nisl interdum tincidunt mi sit donec. Eu sed elementum magnis lobortis non, est. Sed mauris placerat varius vestibulum. Semper nulla risus faucibus vitae eget pellentesque.</p>
                        </div>
                    </div>
                </section>
            </Container>
            <Footer/>
        </div>
    );
};

export default AboutUs;