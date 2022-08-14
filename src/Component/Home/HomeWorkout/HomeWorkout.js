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
                        <div className='col-md-2 col-12 mt-5 pt-5'>
                            <h4 style={{ textAlign: 'left', fontWeight: '700', fontFamily: '"Roboto", sans-serif' }}>Morning <br />Schedule</h4>
                        </div>
                        <div className='col-md-10 col-12 mt-5'>
                            <div>
                                <div>
                                    <Table style={{ border: '1px solid rgb(251, 248, 246)' }} responsive="sm">

                                        <tbody>
                                            <tr>
                                                <td style={{ fontWeight: '700', fontSize: '24px', color: 'rgb(240, 79, 35)', border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)' }}>Time</td>
                                                <td class="t-m" style={{ fontWeight: '700', fontSize: '24px', border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)' }}>mon</td>
                                                <td class="t-m" style={{ fontWeight: '700', fontSize: '24px', border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)' }}>tue</td>
                                                <td class="t-m" style={{ fontWeight: '700', fontSize: '24px', border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)' }}>wed</td>
                                                <td class="t-m" style={{ fontWeight: '700', fontSize: '24px', border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)' }}>thu</td>
                                                <td class="t-m" style={{ fontWeight: '700', fontSize: '24px', border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)' }}>fri</td>
                                                <td class="t-m" style={{ fontWeight: '700', fontSize: '24px', border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)' }}>sat</td>
                                                <td class="t-m" style={{ fontWeight: '700', fontSize: '24px', border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)' }}>sun</td>
                                            </tr>
                                            <tr>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', color: 'rgb(240, 79, 35)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>

                                            </tr>
                                            <tr>

                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', color: 'rgb(240, 79, 35)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>

                                            </tr>
                                            <tr>

                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', color: 'rgb(240, 79, 35)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>

                                            </tr>
                                            <tr>

                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', color: 'rgb(240, 79, 35)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>

                                            </tr>
                                            <tr>

                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', color: 'rgb(240, 79, 35)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>

                                            </tr>
                                            <tr>

                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', color: 'rgb(240, 79, 35)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>

                                            </tr>
                                            <tr>

                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', color: 'rgb(240, 79, 35)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>

                                            </tr>
                                            <tr>

                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', color: 'rgb(240, 79, 35)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>

                                            </tr>
                                            <tr>

                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', color: 'rgb(240, 79, 35)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>

                                            </tr>
                                            <tr>

                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', color: 'rgb(240, 79, 35)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>

                                            </tr>
                                            <tr>

                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', color: 'rgb(240, 79, 35)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                                <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>

                                            </tr>
                                        </tbody>
                                    </Table>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='row d-flex justify-content-between'>
                        <div className=' col-md-2 col-12 mt-5 pt-5'>
                            <h4 style={{ textAlign: 'left', fontWeight: '700', fontFamily: '"Roboto", sans-serif' }}>Afternoon <br />Schedule</h4>
                        </div>
                        <div className=' col-md-10 col-12 mt-5'>
                            <div>
                                <Table style={{ border: '1px solid rgb(251, 248, 246)' }} responsive="sm">

                                    <tbody>
                                      
                                        <tr>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', color: 'rgb(240, 79, 35)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>

                                        </tr>
                                        <tr>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', color: 'rgb(240, 79, 35)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>

                                        </tr>
                                        <tr>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', color: 'rgb(240, 79, 35)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>

                                        </tr>
                                      
                                    </tbody>
                                </Table>
                            </div>
                        </div>

                    </div>
                </section>
                <section>
                    <div className='row d-flex justify-content-between'>
                        <div className=' col-md-2 col-12 mt-5 pt-5'>
                            <h4 style={{ textAlign: 'left', fontWeight: '700', fontFamily: '"Roboto", sans-serif' }}>Afternoon <br />Schedule</h4>
                        </div>
                        <div className=' col-md-10 col-12 mt-5'>
                            <div>
                                <Table style={{ border: '1px solid rgb(251, 248, 246)' }} responsive="sm">

                                    <tbody>
                                     
                                        <tr>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', color: 'rgb(240, 79, 35)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>

                                        </tr>
                                        <tr>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', color: 'rgb(240, 79, 35)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>

                                        </tr>
                                        <tr>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', color: 'rgb(240, 79, 35)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>

                                        </tr>
                                        <tr>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', color: 'rgb(240, 79, 35)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>

                                        </tr>
                                        <tr>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', color: 'rgb(240, 79, 35)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>

                                        </tr>
                                        <tr>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', color: 'rgb(240, 79, 35)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>

                                        </tr>
                                        <tr>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', color: 'rgb(240, 79, 35)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>
                                            <td style={{ border: '1px solid rgb(229, 229, 229)', backgroundColor: 'rgb(251, 248, 246)', height: '50px', paddingTop: '12px' }}>Cross Fit</td>

                                        </tr>
                                      
                                    </tbody>
                                </Table>
                            </div>
                        </div>

                    </div>
                </section>
            </Container>


        </div>
    );
};

export default HomeWorkout;