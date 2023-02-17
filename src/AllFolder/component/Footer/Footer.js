import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaFacebook, } from 'react-icons/fa';



const Footer = () => {
    return (
        <div>

            <div>
                <footer className='footer p-10 bg-black text-white'>


                    <div>
                        <span className='footer-title'>Services</span>

                        <Link to='/' className='hover:bg-slate-400 py-2 px-3 rounded-md'>Developer</Link>
                        <Link to='/' className='hover:bg-slate-400 py-2 px-3 rounded-md'>About Us</Link>
                        <Link to='/' className='hover:bg-slate-400 py-2 px-3 rounded-md'>Instructor</Link>

                    </div>
                    <div>
                        <span className='footer-title'>Company</span>

                        <Link to='/' className='hover:bg-slate-400 py-2 px-3 rounded-md'>Contact Us</Link>
                        <Link to='/' className='hover:bg-slate-400 py-2 px-3 rounded-md'>Our Blog</Link>


                    </div>
                    <div>
                        <span className='footer-title'>Legal</span>
                        <Link to='/' className='hover:bg-slate-400 py-2 px-3 rounded-md'>Terms & Condication</Link>
                        <Link to='/' className='hover:bg-slate-400 py-2 px-3 rounded-md'>Privacy & policy</Link>
                        <Link to='/' className='hover:bg-slate-400 py-2 px-3 rounded-md'>Cookie policy</Link>
                    </div>

                </footer>
                <div className='bg-black flex justify-end pr-64 gap-3 '>
                    <a href='/'><FaGithub className='text-3xl text-white' ></FaGithub></a>
                    <a href='/'><FaFacebook className='text-3xl text-white' ></FaFacebook></a>

                </div>
                <div className="footer footer-center p-4 bg-black text-white">
                    <p className='mb-4'>Copyright © 2023 - All right reserved by Coder-Work-Flow</p>
                </div>
            </div>

        </div>
    );
};

export default Footer;