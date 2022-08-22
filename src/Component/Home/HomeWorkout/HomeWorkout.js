import React from 'react';
import { Container, Table } from 'react-bootstrap';
import './HomeWorkout.css'

const HomeWorkout = () => {
    return (
        <div>
            <Container>
                <div className='mt-5 h-w'>
                    <h1 class="h-s-title">Workout Schedule</h1>
                </div>
                <section>
                    <div className='row d-flex justify-content-between'>
                        <div className='col-md-12 col-12 mt-5'>
                                    <Table style={{ border: '1px solid rgb(251, 248, 246)' }} responsive="sm">
                                        <tbody>
                                            <tr>
                                                <td style={{ fontWeight: '700', fontSize: '24px', color: 'rgb(240, 79, 35)', border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)' }}>Time</td>
                                                <td class="t-m" style={{ fontWeight: '700', fontSize: '24px', border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)' }}>Saturday</td>
                                                <td class="t-m" style={{ fontWeight: '700', fontSize: '24px', border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)' }}>Sunday</td>
                                                <td class="t-m" style={{ fontWeight: '700', fontSize: '24px', border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)' }}>Monday</td>
                                                <td class="t-m" style={{ fontWeight: '700', fontSize: '24px', border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)' }}>Tuesday</td>
                                                <td class="t-m" style={{ fontWeight: '700', fontSize: '24px', border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)' }}>Wednesday</td>
                                                <td class="t-m" style={{ fontWeight: '700', fontSize: '24px', border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)' }}>Thursday</td>
                                                <td class="t-m" style={{ fontWeight: '700', fontSize: '24px', border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)' }}>Friday</td>
                                            </tr>
                                            <tr>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', color: 'rgb(240, 79, 35)', height: '50px', paddingTop: '12px' }}>07:00</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>CrossFit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>CrossFit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>CrossFit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>CrossFit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>CrossFit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}></td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}></td>

                                            </tr>
                                            <tr>

                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', color: 'rgb(240, 79, 35)', height: '50px', paddingTop: '12px' }}>08:00</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}></td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}></td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Mobilizer</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Mobilizer</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Mobilizer</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Mobilizer</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Mobilizer</td>
                                            </tr>
                                            <tr>

                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', color: 'rgb(240, 79, 35)', height: '50px', paddingTop: '12px' }}>09:00</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>CrossFit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>CrossFit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>CrossFit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>CrossFit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>CrossFit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}></td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}></td>
                                            </tr>
                                            <tr>

                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', color: 'rgb(240, 79, 35)', height: '50px', paddingTop: '12px' }}>11:00</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>CrossFit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>CrossFit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>CrossFit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>CrossFit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>CrossFit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}></td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}></td>
                                            </tr>
                                            <tr>

                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', color: 'rgb(240, 79, 35)', height: '50px', paddingTop: '12px' }}>12:00</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}></td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}></td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Mobilizer</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Mobilizer</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Mobilizer</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Mobilizer</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Mobilizer</td>
                                            </tr>
                                            <tr>

                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', color: 'rgb(240, 79, 35)', height: '50px', paddingTop: '12px' }}>15:00</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}></td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>HIIT</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}></td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}></td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>HIIT</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}></td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}></td>
                                            </tr>
                                            <tr>

                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', color: 'rgb(240, 79, 35)', height: '50px', paddingTop: '12px' }}>16:00</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}></td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>CrossFit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>CrossFit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>CrossFit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>CrossFit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>CrossFit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}></td>
                                            </tr>
                                            <tr>

                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', color: 'rgb(240, 79, 35)', height: '50px', paddingTop: '12px' }}>17:00</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Mobilizer</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Mobilizer</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Mobilizer</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Mobilizer</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Mobilizer</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}></td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}></td>
                                            </tr>
                                            <tr>

                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', color: 'rgb(240, 79, 35)', height: '50px', paddingTop: '12px' }}>18:00</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}></td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>CrossFit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>CrossFit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>CrossFit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>CrossFit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>CrossFit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}></td>
                                            </tr>
                                            <tr>

                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', color: 'rgb(240, 79, 35)', height: '50px', paddingTop: '12px' }}>19:00</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Power Hour</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Power Hour</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Mobilizer</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Mobilizer</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Power Hour</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Power Hour</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Power Hour</td>
                                            </tr>
                                            <tr>

                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', color: 'rgb(240, 79, 35)', height: '50px', paddingTop: '12px' }}>20:00</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}></td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>CrossFit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>CrossFit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>CrossFit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>CrossFit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>CrossFit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}></td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <small style={{"margin":"auto"}}>Class Schedule</small>
                                        </tfoot>
                                    </Table>
                                </div>
                            </div>
                </section>
                <div className='mt-5 h-w'>
                    <h1 class="h-s-title">OUR PROGRAMS</h1>
                </div>
                <section>
                    <div className='row d-flex justify-content-between'>
                        <div className='col-md-2 col-12 mt-5 pt-5'>
                            <h4 style={{ textAlign: 'center', borderBottom: '1px solid', fontWeight: '700', fontFamily: '"Roboto", sans-serif' }}>CROSSFIT</h4>
                        </div>
                        <div className='col-md-10 col-12 mt-5'>
                            <div>
                                <div>
                                    <p className='p_left'>CrossFit group classes are offered throughout the day. You can
                                        participate in upto twenty classes a month. Duration of the class
                                        is an hour. Every part of the class is coach led 
                                    </p>
                                    <Table style={{ border: '1px solid rgb(251, 248, 246)' }} responsive="sm">
                                        <tbody>
                                            <tr>
                                                {/* <td style={{ fontWeight: '700', fontSize: '24px', color: 'rgb(240, 79, 35)', border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)' }}>Time</td> */}
                                                <td class="t-m" style={{ fontWeight: '700', fontSize: '24px', border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)' }}>1 month</td>
                                                <td class="t-m" style={{ fontWeight: '700', fontSize: '24px', border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)' }}>3 month</td>
                                                <td class="t-m" style={{ fontWeight: '700', fontSize: '24px', border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)' }}>6 month</td>
                                                <td class="t-m" style={{ fontWeight: '700', fontSize: '24px', border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)' }}>12 month</td>
                                            </tr>
                                            <tr>
                                                {/* <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', color: 'rgb(240, 79, 35)', height: '50px', paddingTop: '12px' }}>Cross Fit</td> */}
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>20,000 bdt</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>57,000 bdt</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>1,08,000 bdt</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>2,40,000 bdt</td>

                                            </tr>
                                            <tr>

                                                {/* <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', color: 'rgb(240, 79, 35)', height: '50px', paddingTop: '12px' }}>Cross Fit</td> */}
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}></td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Save 5%</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Save 10%</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Save 15%</td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <small style={{"margin":"auto"}}>Classes: Max 20 classes per month</small>
                                        </tfoot>
                                    </Table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='row d-flex justify-content-between'>
                        <div className=' col-md-2 col-12 mt-5 pt-5'>
                            <h4 style={{ textAlign: 'center', borderBottom: '1px solid', fontWeight: '700', fontFamily: '"Roboto", sans-serif' }}>On Ramp</h4>
                        </div>
                        <div className=' col-md-10 col-12 mt-5'>
                            <div>
                                <p className='p_left'>For those looking to ease their way into CrossFit, we offer an On
                                    Ramp Program. This program is designed to ramp up your
                                    fitness and give you more exposure to the movements involved in
                                    CrossFit before CrossFit general classes. This is a four classes
                                    package.
                                </p>
                                <Table style={{ border: '1px solid rgb(251, 248, 246)' }} responsive="sm">

                                    <tbody>
                                      
                                        <tr>
                                            {/* <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', color: 'rgb(240, 79, 35)', height: '50px', paddingTop: '12px' }}>Cross Fit</td> */}
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', fontSize: '24px', height: '50px', fontWeight: '700', paddingTop: '12px' }}>Cost</td>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', fontSize: '24px', height: '50px', fontWeight: '700', paddingTop: '12px' }}>Validity</td>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', fontSize: '24px', height: '50px', fontWeight: '700', paddingTop: '12px' }}>Notes</td>
                                        </tr>
                                        <tr>
                                            {/* <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', color: 'rgb(240, 79, 35)', height: '50px', paddingTop: '12px' }}>Cross Fit</td> */}
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>8000 bdt</td>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>60 days from purchase</td>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>For CrossFit/Legion</td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                            <small style={{"margin":"auto"}}>Classes: Max 20 classes per month</small>
                                        </tfoot>
                                </Table>
                            </div>
                        </div>

                    </div>
                </section>

                <section>
                    <div className='row d-flex justify-content-between'>
                        <div className='col-md-2 col-12 mt-5 pt-5'>
                        <h4 style={{ textAlign: 'center', borderBottom: '1px solid', fontWeight: '700', fontFamily: '"Roboto", sans-serif' }}>ASSEMBLE</h4>
                        </div>
                        <div className='col-md-10 col-12 mt-5'>
                            <div>
                                <div>
                                <p className='p_left'>For those who want the best of both worlds. This is a
                                        combination of CrossFit and Legion. Which means you unlock all
                                        the classes offered in our facility.
                                    </p>
                                     <p className='p_left'>Class Type: <span style={{color: '#FBB848'}} > Combination of CrossFit and Legion </span></p>
                                    <Table style={{ border: '1px solid rgb(251, 248, 246)' }} responsive="sm">
                                        <tbody>
                                            <tr>
                                                {/* <td style={{ fontWeight: '700', fontSize: '24px', color: 'rgb(240, 79, 35)', border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)' }}>Time</td> */}
                                                <td class="t-m" style={{ fontWeight: '700', fontSize: '24px', border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)' }}>1 month</td>
                                                <td class="t-m" style={{ fontWeight: '700', fontSize: '24px', border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)' }}>3 month</td>
                                                <td class="t-m" style={{ fontWeight: '700', fontSize: '24px', border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)' }}>6 month</td>
                                                <td class="t-m" style={{ fontWeight: '700', fontSize: '24px', border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)' }}>12 month</td>
                                            </tr>
                                            <tr>
                                                {/* <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', color: 'rgb(240, 79, 35)', height: '50px', paddingTop: '12px' }}>Cross Fit</td> */}
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>22,000 bdt</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>62,700 bdt</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>1,18,800 bdt</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>2,24,400 bdt</td>

                                            </tr>
                                            <tr>

                                                {/* <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', color: 'rgb(240, 79, 35)', height: '50px', paddingTop: '12px' }}>Cross Fit</td> */}
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}></td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Save 5%</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Save 10%</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Save 15%</td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <small style={{"margin":"auto"}}>Classes: Max 20 classes per month</small>
                                        </tfoot>
                                    </Table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
        </div>
    );
};

export default HomeWorkout;