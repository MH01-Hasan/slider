import React from 'react';
import { Card } from 'react-bootstrap';
import './Ourteam.css'

const Ourteam = () => {
    return (
        <div className='row mt-5 mx-3 team-fild'>
            <h1 className='team-leader'>The leader of our team</h1>
            <div className='col-lg-4 col-sm-12 mb-2'>
            <div>     
            <Card  className='team'> 
            <div>
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Ot2SwCU7VDFhomMHBYbRNJwUn-4mUMf_XQ&usqp=CAU" className="image-tem" alt="..." />
         </div>       
           <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">Nilima Akter</Card.Subtitle>
            <Card.Text className='card-text'>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
              </Card.Body>
             </Card> 
            </div>
    
        </div>
            <div className='col-lg-4 col-sm-12 mb-2'>
            <div>     
            <Card  className='team'> 
            <div>
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVy_WoCjDW9J2BXp-3yqmUSJ0RgjflXSB6tQ&usqp=CAU" className="image-tem" alt="..." />
         </div>       
           <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">Nilima Akter</Card.Subtitle>
            <Card.Text className='card-text'>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
              </Card.Body>
             </Card> 
            </div>
    
        </div>
            <div className='col-lg-4 col-sm-12 mb-2'>
            <div>     
            <Card  className='team'> 
            <div>
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHNO4ubMPvtsvZgWT27OOy2Y6E6487KoTLRQ&usqp=CAU" className="image-tem" alt="..." />
         </div>       
           <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">Nilima Akter</Card.Subtitle>
            <Card.Text className='card-text'>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
              </Card.Body>
             </Card> 
            </div>
    
        </div>
        </div>
    );
};

export default Ourteam;