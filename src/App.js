import logo from './logo.svg';
import './App.css';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import Slider from './componetn/Slidre/Slider';


function App() {
  return (
    <div className="App mt-5 bg-secondary">
      <Swiper
      spaceBetween={50}
      slidesPerView={3}
      centeredSlides
      onSlideChange={() => console.log("slide change")}
      onSwiper={swiper => console.log(swiper)}
    >
      <SwiperSlide>
          <div class="card mt-5 mb-5">
      <div class="card-body">
        <h1> hello Mehedi </h1>
        <p class="card-text">Some quick example text to build on the card title and make
        up the bulk of the card's content.</p>
      </div>
    </div>
    </SwiperSlide>
      <SwiperSlide>
          <div class="card mt-5 mb-5">
      <div class="card-body">
        <h1> hello Mehedi </h1>
        <p class="card-text">Some quick example text to build on the card title and make
        up the bulk of the card's content.</p>
      </div>
    </div>
    </SwiperSlide>
      <SwiperSlide>
          <div class="card mt-5 mb-5">
      <div class="card-body">
        <h1> hello Mehedi </h1>
        <p class="card-text">Some quick example text to build on the card title and make
        up the bulk of the card's content.</p>
      </div>
    </div>
    </SwiperSlide>
      <SwiperSlide>
          <div class="card mt-5 mb-5">
      <div class="card-body">
        <h1> hello Mehedi </h1>
        <p class="card-text">Some quick example text to build on the card title and make
        up the bulk of the card's content.</p>
      </div>
    </div>
    </SwiperSlide>
      <SwiperSlide>
          <div class="card mt-5 mb-5">
      <div class="card-body">
        <h1> hello Mehedi </h1>
        <p class="card-text">Some quick example text to build on the card title and make
        up the bulk of the card's content.</p>
      </div>
    </div>
    </SwiperSlide>

      
    </Swiper>
     
     <Slider></Slider>
    </div>
  );
}

export default App;
