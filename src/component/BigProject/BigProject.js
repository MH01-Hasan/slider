import React from 'react';
import './BigProject.css'


const BigProject = () => {
    
    return (
        <div className='mx-3 mt-3'>
            <div className='row'>
                <div className='col-lg-6 col-sm-12 mb-5'>
                <img src="https://thumbs.dreamstime.com/b/hospital-building-modern-parking-lot-59693686.jpg" class="img-fluid  image" alt="..."/>

                </div>
                <div className='col-lg-6 col-sm-12'>
                    <h1>Our Big Project</h1>
                    <h1>Insure A MAKING  HOSPITAL & <br/>
                         Save the Futures World </h1>
                         <p>consectetur adipiscing elit. Nulla convallis egestas rhoncus. Doacil sis fermentum sem, ac vivera ante luctus vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas</p>
                         <div className='goal'>
                             <p>RAISED   <small>$4500</small></p>
                             <p>GOAL  <small>$150000</small></p>
                         </div>
                         <div class="progress">
                        <div class="progress-bar" role="progressbar"  aria-valuenow="15000" aria-valuemin="0" aria-valuemax="5000">
                      30%</div>
                        </div>
                        <button className='donate-naw'>Donate Now</button>
                </div>

            </div>
            
        </div>
    );
};

export default BigProject;