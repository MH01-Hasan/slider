import React, { useEffect, useState } from 'react';
import './Test.css'


const Text = () => {
    const [project ,setProject]=useState([])
    useEffect(()=>{
        fetch('/project.json')
        .then(res => res.json())
        .then(data =>setProject(data))


    },[])
    //     const project = [
    //     {
    //         id:1,
    //         titel:"Caugu Watch" ,
    //         project:'https://shop-f6c77.web.app/home',
    //         image:'https://unblast.com/wp-content/uploads/2018/07/Watch-Website-Template-5.jpg',
    //         img1:'https://i.ibb.co/02T94rC/Screenshot-29.png',
    //         img2:'https://i.ibb.co/KNWt3PT/Screenshot-30.png',
    //         img3:'https://i.ibb.co/rmvSY20/Screenshot-27.png',
    //         img4:'https://i.ibb.co/rQB9MSb/Screenshot-28.png',
    //         details:"1.Customers can order any product and delete it 2.The customer will be able to dashboard view his own orders and give reviews 3.Admin Can View All Orders Add New Products, make admin,4. Manage Orders And Products  5.this website Authentication use email and password before 6.user before rejester then login,",
    //         git:'https://github.com/MH01-Hasan/assessment-12',
    //         gitserver:'https://github.com/MH01-Hasan/asserment-12-server-site'
            

    //     },
    //     {
    //         id:2,
    //         titel:"Travel ." ,
    //         project:'https://travel-b6863.web.app/home',
    //         image:'https://travel-b6863.web.app/static/media/image-3.2aa2644d.jpg',
    //         details:"1.Users can be Booking any package and cancel it. and view his own Booking package 2.Google login Authentication. Users can log in to a google account.3. Add a new package and view all Users Booking packages. 4.user after login then book packegs 5.user can see his own order and all user order.",
    //         img1:'https://i.ibb.co/HdtVsPr/Screenshot-32.png',
    //         img2:'https://i.ibb.co/QrhYDdV/Screenshot-34.png',
    //         img3:'https://i.ibb.co/0C6GRW1/Screenshot-33.png',
    //         img4:'https://i.ibb.co/pdBTmw0/Screenshot-35.png',
    //         git:'https://github.com/MH01-Hasan/asserment-11-client-side',
    //         gitserver:'https://github.com/MH01-Hasan/-asserment-11-server-side'
    //     },
    //     {
    //         id:3,
    //         titel:"medecal center" ,
    //         project:'https://travel-guro-3d22c.web.app',
    //         image:'https://travel-guro-3d22c.web.app/static/media/banner.1.d8adc8a0.jpeg',
    //         details:"1.This site name MeDIZCO CENTER its medical service related website.2.MeDIZCO CENTER provide another service 3. HOW TO PROPERLY WASH HANDS 4. WHAT ARE THE SYMPTOMS OF COVID-19 5. Users login Authentication. Google account, Facebook, Email & password.",
    //         img1:'https://i.ibb.co/41Y73SH/Screenshot-37.png',
    //         img2:'https://i.ibb.co/KxywDr2/Screenshot-38.png',
    //         img3:'https://i.ibb.co/Jn7xrL8/Screenshot-39.png',
    //         img4:'https://i.ibb.co/wMjfd8Q/Screenshot-40.png',
    //         git:'https://github.com/MH01-Hasan/asserment-10'
            
    //     }, 
    //     {
    //         id:4,
    //         titel:"Football" ,
    //         project:'https://mh01-hasan.github.io/responsive-ball/',
    //         image:'https://mh01-hasan.github.io/responsive-ball/images/banner.png',
    //         details:'1.this is football relatied website 2.best plyer details 3. some Company sponser .4. next gaming chart',
    //         img1:'https://i.ibb.co/LtrLvmH/Screenshot-25.png',
    //         img2:'https://i.ibb.co/B3pWMD9/Screenshot-24.png',
    //         img3:'https://i.ibb.co/RzGrvLm/Screenshot-23.png',
    //         img4:'https://i.ibb.co/KKFCyzp/Screenshot-22.png',
    //         git:'https://github.com/MH01-Hasan/responsive-ball',
            
    //     },
    //     {
    //         id:5,
    //         titel:"Apple M1 chip" ,
    //         project:'https://focused-curie-3fba22.netlify.app/',
    //         image:'https://focused-curie-3fba22.netlify.app/images/mac.png',
    //         details:'1. this website mackbook customizes price calculation 2. user select parse and different value. 3. user uses the pro code to get a special discount. 4. user  can  selected options  delivery, Storage, Memory',
    //         git:'https://github.com/MH01-Hasan/Assignment-5',
    //     }, 
    // ]
    return (
        <div>

            {
                project.map(project => <div>
                    <img src={project.img1}></img>
                <p>{project.details}</p>


                </div>)


            }
            
            


            
        </div>
    );
};

export default Text;