import React, { useState } from 'react';
import { Card,Button, Modal } from 'react-bootstrap';
import './Weather.css'


const Weather = ({result}) => {  
    const [show, setShow] = useState(false);

    const [data, setData] = useState({});
    const handleClose = () => setShow(false);
    const API_KEY = "5b879a238eb3467baa883111222903"

    const handleShow = () => {
        fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${result?.capital[0].toLowerCase()}&aqi=yes`)
      .then(res => res.json())
      .then(result =>setData(result))
      setShow(true)
    };
    return (
        <div>
            <Card style={{ width: '25rem' }}>
              <Card.Img variant="top" src={result.flags?.png} />
              <Card.Body>
                <Card.Title>Capital : {result?.capital[0]}</Card.Title>
                <Card.Text>
                population : {result?.population}
                </Card.Text>
                <Card.Text>
                latlng : {result?.latlng[0]}
                </Card.Text>
                <Button variant="primary" onClick={handleShow}>
        Capital Weather
      </Button>

      <Modal show={show} onHide={handleClose} className='model-fild'  size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered  >
      <Modal.Body className='model-body'>
        <span> Temperature :{data?.current?.temp_c}&#8451; </span>
          <p>Wind:{data?.current?.wind_mph}mph</p>
          <p>Precip:{data?.current?.precip_in}in</p>
          <p>Pressure:{data?.current?.pressure_in}in</p>
        </Modal.Body>
  
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
      
      </Modal>
              </Card.Body>
            </Card>
            
        </div>
    );
};

export default Weather;