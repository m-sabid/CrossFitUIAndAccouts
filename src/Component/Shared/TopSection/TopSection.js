import React from 'react';
import './TopSection.css'
import { BsBell } from "react-icons/bs";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegUser, FaBox } from "react-icons/fa";
import { Container } from 'react-bootstrap';
import AuthUser from '../../Dashboard/LoginLogOut/AuthUser/AuthUser';


const TopSection = () => {
  const { userRole } = AuthUser();
//   const role = setUserRole();
  console.log(userRole);
    return (
        <div>
            <div className='top-section'>
                <Container>

                    <div className='row d-flex justify-content-between'>
                        <div className='col-md-10 col-12'>
                        </div>
                        <div className='col-md-2 col-12'>
                            <div className='d-flex'>
                                <a className='top-ico' href="/" ><BsBell /></a>
                                <a className='top-ico' href="/"><MdOutlineShoppingCart /></a>
                                <a className='top-ico' href="/"><FaRegUser /></a>
                                <a className='top-ico' href={userRole === "admin" ? "dashboard/dashboard/" : "/login"}><FaBox /></a>
                            </div>
                        </div>
                    </div>
                </Container>

            </div>
        </div>
    );
};

export default TopSection;