import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-fild'>
            <div className='row mx-5'>

                <div className='col-lg-4 col-sm-12'>
                <h4 className='flow'>Gneral </h4>
                <ul className='general'>
                    <li>Home</li>
                    <li>Blog</li>
                    <li>FAQ</li>
                    <li>Portfolio</li>
                    <li>Contact Us</li>
                </ul>

              
        

                </div>

                <div className='col-lg-4 col-sm-12'>
                <h4 className='flow'>Address</h4>
                <p className='address'>631/1 Willson Road <br/>
                    Bandar, Narayanganj.
                </p>
               
                  

                </div>

                <div className='col-lg-4 col-sm-12 '>
                    <h4 className='flow'>Contact </h4>
                    <div className='footer-icon-fiild'>
                        <a href="https://www.facebook.com/mehedi.0802" target='_blank'  className='footer-anchore'><i class="fab fa-facebook-square"></i></a>
                        <a href="https://www.linkedin.com/in/mehedi-hasan-a640b2227/" target='_blank' className='footer-anchore'> <i class="fab fa-linkedin"></i> </a>
                        <a href="https://github.com/MH01-Hasan" target='_blank' className='footer-anchore'><i class="fab fa-github-square"></i></a>
                    </div>

                </div>
            </div>
            
        </div>
    );
};

export default Footer;