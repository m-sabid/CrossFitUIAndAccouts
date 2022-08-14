import React from 'react';
import { Container } from 'react-bootstrap';
import NavSection from '../Shared/NavSection/NavSection';
import TopSection from '../Shared/TopSection/TopSection';
import './Contact.css'
import logo2 from '../../Image/Logo/logo2.png'
import Map from '../Map/Map'
import Footer from '../Shared/Footer/Footer';

const Contact = () => {
    return (
        <div>
            <div className='top-banner'>
                <TopSection />
                <NavSection />
            </div>
            <Container>
                <section>
                    <div className='row d-flex justify-content-between'>
                        <div className='col-md-5 col-12 pt-5 mt-5'>
                            <div>
                                <img className='c-img' src={logo2} alt='' />
                            </div>
                            <h2 className='c-h1 mt-4' style={{ textAlign: 'left' }}>CONTACT US</h2>
                            <p className='mt-3' style={{ textAlign: 'left', fontSize: '18px' }}>Flick is here to help you;
                                Our experts are available to answer any questions you might have. We’ve got the answers.</p>
                            <h3 className='c-h3 mt-5'>VISIT US</h3>
                            <p style={{ textAlign: 'left', fontSize: '18px', fontWeight: '700' }}>Office no. G-02. Building 1, Ground Floor. Dubai Media City – Dubai</p>
                            <p style={{ textAlign: 'left', fontSize: '18px' }}>Feel free to get in touch with us through our channels:
                            </p>
                            <h3 className='c-h3 mt-5'>EMAIL US</h3>
                            <p style={{ textAlign: 'left', fontSize: '18px', fontWeight: '700' }}>mail@mailserver.com</p>
                            <h3 className='c-h3 mt-5'>CALL US</h3>
                            <p style={{ textAlign: 'left', fontSize: '18px' }}>+000-0-000-0000<br />+000-0-000-0000</p>
                        </div>
                        <div className='col-md-6 col-12 pt-5 mt-5'>

                        </div>
                    </div>
                </section>
            </Container>
            <section>
                <div className='c-join-bg mt-5'>
                    <Container>
                        <div className='row d-flex justify-content-between'>
                            <div className='col-md-4 col-12 pt-5 mt-5'>
                                <div>
                                    <h1 className='c-f-h1'>Want to join us?Let’s diascuss </h1>
                                    <p className='c-f-p'>Thank you for getting in touch!Kindly. Fill the form, have a great day!</p>
                                </div>
                            </div>
                            <div className='col-md-6 col-12 pt-3 mt-5'>
                                <from>
                                    <div className='row d-flex justify-content-between'>
                                        <div className='col-md-6 col-12'>
                                            <input className='cf-input' placeholder='Your Name'></input>
                                        </div>
                                        <div className='col-md-6 col-12'>
                                            <input className='cf-input' placeholder='Your Email'></input>
                                        </div>
                                    </div>
                                    <div className='row d-flex justify-content-between mt-3'>
                                        <div className='col-md-6 col-12'>
                                            <input className='cf-input' placeholder='Phone Number'></input>
                                        </div>
                                        <div className='col-md-6 col-12'>
                                            <select className=" cf-input" aria-label="Country" name="commodities" required="">

                                                <option style={{ color: 'black' }}>Country</option>
                                                <option style={{ color: 'black' }}>Andorra</option>
                                                <option style={{ color: 'black' }}>United Arab Emirates</option>
                                                <option style={{ color: 'black' }}>Afghanistan</option>
                                                <option style={{ color: 'black' }}>Antigua and Barbuda</option>
                                                <option style={{ color: 'black' }}>Anguilla</option>
                                                <option style={{ color: 'black' }}>Albania</option>
                                                <option style={{ color: 'black' }}>Armenia</option>
                                                <option style={{ color: 'black' }}>Angola</option>
                                                <option style={{ color: 'black' }}>Antarctica</option>
                                                <option style={{ color: 'black' }}>Argentina</option>
                                                <option style={{ color: 'black' }}>American Samoa</option>
                                                <option style={{ color: 'black' }}>Austria</option>
                                                <option style={{ color: 'black' }}>Australia</option>
                                                <option style={{ color: 'black' }}>Aruba</option>
                                                <option style={{ color: 'black' }}>Alland Islands</option>
                                                <option style={{ color: 'black' }}>Azerbaijan</option>
                                                <option style={{ color: 'black' }}>Bosnia and Herzegovina</option>
                                                <option style={{ color: 'black' }}>Barbados</option>
                                                <option style={{ color: 'black' }}>Bangladesh</option>
                                                <option style={{ color: 'black' }}>Belgium</option>
                                                <option style={{ color: 'black' }}>Burkina Faso</option>
                                                <option style={{ color: 'black' }}>Bulgaria</option>
                                                <option style={{ color: 'black' }}>Bahrain</option>
                                                <option style={{ color: 'black' }}>Burundi</option>
                                                <option style={{ color: 'black' }}>Benin</option>
                                                <option style={{ color: 'black' }}>Saint Barthelemy</option>
                                                <option style={{ color: 'black' }}>Bermuda</option>
                                                <option style={{ color: 'black' }}>Brunei Darussalam</option>
                                                <option style={{ color: 'black' }}>Bolivia</option>
                                                <option style={{ color: 'black' }}>Brazil</option>
                                                <option style={{ color: 'black' }}>Bahamas</option>
                                                <option style={{ color: 'black' }}>Bhutan</option>
                                                <option style={{ color: 'black' }}>Bouvet Island</option>
                                                <option style={{ color: 'black' }}>Botswana</option>
                                                <option style={{ color: 'black' }}>Belarus</option>
                                                <option style={{ color: 'black' }}>Belize</option>
                                                <option style={{ color: 'black' }}>Canada</option>
                                                <option style={{ color: 'black' }}>Cocos (Keeling) Islands</option>
                                                <option style={{ color: 'black' }}>Congo</option>
                                                <option style={{ color: 'black' }}>Central African Republic</option>
                                                <option style={{ color: 'black' }}>Switzerland</option>
                                                <option style={{ color: 'black' }}>Cote d'Ivoire</option>
                                                <option style={{ color: 'black' }}>Cook Islands</option>
                                                <option style={{ color: 'black' }}>Chile</option>
                                                <option style={{ color: 'black' }}>Cameroon</option>
                                                <option style={{ color: 'black' }}>China</option>
                                                <option style={{ color: 'black' }}>Colombia</option>
                                                <option style={{ color: 'black' }}>Costa Rica</option>
                                                <option style={{ color: 'black' }}>Cuba</option>
                                                <option style={{ color: 'black' }}>Cape Verde</option>
                                                <option style={{ color: 'black' }}>Curacao</option>
                                                <option style={{ color: 'black' }}>Christmas Island</option>
                                                <option style={{ color: 'black' }}>Cyprus</option>
                                                <option style={{ color: 'black' }}>Czech Republic</option>
                                                <option style={{ color: 'black' }}>Germany</option>
                                                <option style={{ color: 'black' }}>Djibouti</option>
                                                <option style={{ color: 'black' }}>Denmark</option>
                                                <option style={{ color: 'black' }}>Dominica</option>
                                                <option style={{ color: 'black' }}>Dominican Republic</option>
                                                <option style={{ color: 'black' }}>Algeria</option>
                                                <option style={{ color: 'black' }}>Ecuador</option>
                                                <option style={{ color: 'black' }}>Estonia</option>
                                                <option style={{ color: 'black' }}>Egypt</option>
                                                <option style={{ color: 'black' }}>Western Sahara</option>
                                                <option style={{ color: 'black' }}>Eritrea</option>
                                                <option style={{ color: 'black' }}>Spain</option>
                                                <option style={{ color: 'black' }}>Ethiopia</option>
                                                <option style={{ color: 'black' }}>Finland</option>
                                                <option style={{ color: 'black' }}>Fiji</option>
                                                <option style={{ color: 'black' }}>Falkland Islands (Malvinas)</option>
                                                <option style={{ color: 'black' }}>Micronesia</option>
                                                <option style={{ color: 'black' }}>Faroe Islands</option>
                                                <option style={{ color: 'black' }}>France</option>
                                                <option style={{ color: 'black' }}>Gabon</option>
                                                <option style={{ color: 'black' }}>United Kingdom</option>
                                                <option style={{ color: 'black' }}>Grenada</option>
                                                <option style={{ color: 'black' }}>Georgia</option>
                                                <option style={{ color: 'black' }}>French Guiana</option>
                                                <option style={{ color: 'black' }}>Guernsey</option>
                                                <option style={{ color: 'black' }}>Ghana</option>
                                                <option style={{ color: 'black' }}>Gibraltar</option>
                                                <option style={{ color: 'black' }}>Greenland</option>
                                                <option style={{ color: 'black' }}>Gambia</option>
                                                <option style={{ color: 'black' }}>Guinea</option>
                                                <option style={{ color: 'black' }}>Guadeloupe</option>
                                                <option style={{ color: 'black' }}>Equatorial Guinea</option>
                                                <option style={{ color: 'black' }}>Greece</option>
                                                <option style={{ color: 'black' }}>Guatemala</option>
                                                <option style={{ color: 'black' }}>Guam</option>
                                                <option style={{ color: 'black' }}>Guinea-Bissau</option>
                                                <option style={{ color: 'black' }}>Guyana</option>
                                                <option style={{ color: 'black' }}>Hong Kong</option>
                                                <option style={{ color: 'black' }}>Honduras</option>
                                                <option style={{ color: 'black' }}>Croatia</option>
                                                <option style={{ color: 'black' }}>Haiti</option>
                                                <option style={{ color: 'black' }}>Hungary</option>
                                                <option style={{ color: 'black' }}>Indonesia</option>
                                                <option style={{ color: 'black' }}>Ireland</option>
                                                <option style={{ color: 'black' }}>Israel</option>
                                                <option style={{ color: 'black' }}>India</option>
                                                <option style={{ color: 'black' }}>Iraq</option>
                                                <option style={{ color: 'black' }}>Iran</option>
                                                <option style={{ color: 'black' }}>Iceland</option>
                                                <option style={{ color: 'black' }}>Italy</option>
                                                <option style={{ color: 'black' }}>Jersey</option>
                                                <option style={{ color: 'black' }}>Jamaica</option>
                                                <option style={{ color: 'black' }}>Jordan</option>
                                                <option style={{ color: 'black' }}>Japan</option>
                                                <option style={{ color: 'black' }}>Kenya</option>
                                                <option style={{ color: 'black' }}>Kyrgyzstan</option>
                                                <option style={{ color: 'black' }}>Cambodia</option>
                                                <option style={{ color: 'black' }}>Kiribati</option>
                                                <option style={{ color: 'black' }}>Comoros</option>
                                                <option style={{ color: 'black' }}>Saint Kitts and Nevis</option>
                                                <option style={{ color: 'black' }}>Korea</option>
                                                <option style={{ color: 'black' }}>Kuwait</option>
                                                <option style={{ color: 'black' }}>Cayman Islands</option>
                                                <option style={{ color: 'black' }}>Kazakhstan</option>
                                                <option style={{ color: 'black' }}>Lebanon</option>
                                                <option style={{ color: 'black' }}>Saint Lucia</option>
                                                <option style={{ color: 'black' }}>Liechtenstein</option>
                                                <option style={{ color: 'black' }}>Sri Lanka</option>
                                                <option style={{ color: 'black' }}>Liberia</option>
                                                <option style={{ color: 'black' }}>Lesotho</option>
                                                <option style={{ color: 'black' }}>Lithuania</option>
                                                <option style={{ color: 'black' }}>Luxembourg</option>
                                                <option style={{ color: 'black' }}>Latvia</option>
                                                <option style={{ color: 'black' }}>Libya</option>
                                                <option style={{ color: 'black' }}>Morocco</option>
                                                <option style={{ color: 'black' }}>Monaco</option>
                                                <option style={{ color: 'black' }}>Moldova</option>
                                                <option style={{ color: 'black' }}>Montenegro</option>
                                                <option style={{ color: 'black' }}>Saint Martin (French part)</option>
                                                <option style={{ color: 'black' }}>Madagascar</option>
                                                <option style={{ color: 'black' }}>Marshall Islands</option>
                                                <option style={{ color: 'black' }}>Macedonia</option>
                                                <option style={{ color: 'black' }}>Mali</option>
                                                <option style={{ color: 'black' }}>Myanmar</option>
                                                <option style={{ color: 'black' }}>Mongolia</option>
                                                <option style={{ color: 'black' }}>Macao</option>
                                                <option style={{ color: 'black' }}>Northern Mariana Islands</option>
                                                <option style={{ color: 'black' }}>Martinique</option>
                                                <option style={{ color: 'black' }}>Mauritania</option>
                                                <option style={{ color: 'black' }}>Montserrat</option>
                                                <option style={{ color: 'black' }}>Malta</option>
                                                <option style={{ color: 'black' }}>Mauritius</option>
                                                <option style={{ color: 'black' }}>Maldives</option>
                                                <option style={{ color: 'black' }}>Malawi</option>
                                                <option style={{ color: 'black' }}>Mexico</option>
                                                <option style={{ color: 'black' }}>Malaysia</option>
                                                <option style={{ color: 'black' }}>Mozambique</option>
                                                <option style={{ color: 'black' }}>Namibia</option>
                                                <option style={{ color: 'black' }}>New Caledonia</option>
                                                <option style={{ color: 'black' }}>Niger</option>
                                                <option style={{ color: 'black' }}>Norfolk Island</option>
                                                <option style={{ color: 'black' }}>Nigeria</option>
                                                <option style={{ color: 'black' }}>Nicaragua</option>
                                                <option style={{ color: 'black' }}>Netherlands</option>
                                                <option style={{ color: 'black' }}>Norway</option>
                                                <option style={{ color: 'black' }}>Nepal</option>
                                                <option style={{ color: 'black' }}>Nauru</option>
                                                <option style={{ color: 'black' }}>Niue</option>
                                                <option style={{ color: 'black' }}>New Zealand</option>
                                                <option style={{ color: 'black' }}>Oman</option>
                                                <option style={{ color: 'black' }}>Panama</option>
                                                <option style={{ color: 'black' }}>Peru</option>
                                                <option style={{ color: 'black' }}>French Polynesia</option>
                                                <option style={{ color: 'black' }}>Papua New Guinea</option>
                                                <option style={{ color: 'black' }}>Philippines</option>
                                                <option style={{ color: 'black' }}>Pakistan</option>
                                                <option style={{ color: 'black' }}>Poland</option>
                                                <option style={{ color: 'black' }}>Saint Pierre and Miquelon</option>
                                                <option style={{ color: 'black' }}>Pitcairn</option>
                                                <option style={{ color: 'black' }}>Puerto Rico</option>
                                                <option style={{ color: 'black' }}>Portugal</option>
                                                <option style={{ color: 'black' }}>Palau</option>
                                                <option style={{ color: 'black' }}>Palestine</option>
                                                <option style={{ color: 'black' }}>Paraguay</option>
                                                <option style={{ color: 'black' }}>Qatar</option>
                                                <option style={{ color: 'black' }}>Reunion</option>
                                                <option style={{ color: 'black' }}>Romania</option>
                                                <option style={{ color: 'black' }}>Serbia</option>
                                                <option style={{ color: 'black' }}>Russian Federation</option>
                                                <option style={{ color: 'black' }}>Rwanda</option>
                                                <option style={{ color: 'black' }}>Saudi Arabia</option>
                                                <option style={{ color: 'black' }}>Solomon Islands</option>
                                                <option style={{ color: 'black' }}>Seychelles</option>
                                                <option style={{ color: 'black' }}>Sudan</option>
                                                <option style={{ color: 'black' }}>Sweden</option>
                                                <option style={{ color: 'black' }}>Singapore</option>
                                                <option style={{ color: 'black' }}>Saint Helena</option>
                                                <option style={{ color: 'black' }}>Slovenia</option>
                                                <option style={{ color: 'black' }}>Svalbard and Jan Mayen</option>
                                                <option style={{ color: 'black' }}>Slovakia</option>
                                                <option style={{ color: 'black' }}>Sierra Leone</option>
                                                <option style={{ color: 'black' }}>San Marino</option>
                                                <option style={{ color: 'black' }}>Senegal</option>
                                                <option style={{ color: 'black' }}>Somalia</option>
                                                <option style={{ color: 'black' }}>Suriname</option>
                                                <option style={{ color: 'black' }}>South Sudan</option>
                                                <option style={{ color: 'black' }}>Sao Tome and Principe</option>
                                                <option style={{ color: 'black' }}>Swaziland</option>
                                                <option style={{ color: 'black' }}>Togo</option>
                                                <option style={{ color: 'black' }}>Thailand</option>
                                                <option style={{ color: 'black' }}>Tajikistan</option>
                                                <option style={{ color: 'black' }}>Tokelau</option>
                                                <option style={{ color: 'black' }}>Timor-Leste</option>
                                                <option style={{ color: 'black' }}>Turkmenistan</option>
                                                <option style={{ color: 'black' }}>Tunisia</option>
                                                <option style={{ color: 'black' }}>Tonga</option>
                                                <option style={{ color: 'black' }}>Turkey</option>
                                                <option style={{ color: 'black' }}>Trinidad and Tobago</option>
                                                <option style={{ color: 'black' }}>Tuvalu</option>
                                                <option style={{ color: 'black' }}>Taiwan</option>
                                                <option style={{ color: 'black' }}>United Republic of Tanzania</option>
                                                <option style={{ color: 'black' }}>Ukraine</option>
                                                <option style={{ color: 'black' }}>Uganda</option>
                                                <option style={{ color: 'black' }}>United States</option>
                                                <option style={{ color: 'black' }}>Uruguay</option>
                                                <option style={{ color: 'black' }}>Uzbekistan</option>
                                                <option style={{ color: 'black' }}>Holy See (Vatican City State)</option>
                                                <option style={{ color: 'black' }}>Venezuela</option>
                                                <option style={{ color: 'black' }}>British Virgin Islands</option>
                                                <option style={{ color: 'black' }}>US Virgin Islands</option>
                                                <option style={{ color: 'black' }}>Vietnam</option>
                                                <option style={{ color: 'black' }}>Vanuatu</option>
                                                <option style={{ color: 'black' }}>Wallis and Futuna</option>
                                                <option style={{ color: 'black' }}>Samoa</option>
                                                <option style={{ color: 'black' }}>Kosovo</option>
                                                <option style={{ color: 'black' }}>Yemen</option>
                                                <option style={{ color: 'black' }}>Mayotte</option>
                                                <option style={{ color: 'black' }}>South Africa</option>
                                                <option style={{ color: 'black' }}>Zambia</option>
                                                <option style={{ color: 'black' }}>Zimbabwe</option>




                                            </select>
                                        </div>
                                    </div>
                                    <div className='row d-flex justify-content-between mt-3'>
                                        <div className='col-md-6 col-12'>
                                            <input className='cf-input' placeholder='Company Name'></input>
                                        </div>
                                        <div className='col-md-6 col-12'>
                                            <select className=" cf-input" aria-label="Interested in" name="commodities" required="">
                                                <option style={{ color: 'black' }}>Interested in</option>
                                                <option style={{ color: 'black' }}>Paid Scrim</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='col-md-12 col-12'>
                                        <input className='cf-input' placeholder='Message'></input>
                                    </div>
                                    <button className='cf-s-btn'>SUBMIT</button>
                                </from>
                            </div>
                        </div>
                    </Container>
                </div>
            </section>
            <section className='c-map'>
                <Map />
            </section>
            <Footer />
        </div>
    );
};

export default Contact;