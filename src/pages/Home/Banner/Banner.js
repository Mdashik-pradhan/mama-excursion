import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <Carousel variant="dark">
              <Carousel.Item>
                <img
                  className="d-block carousel-img  w-full"
                  src="https://bdembassymexico.org/wp-content/uploads/2019/07/Nilgiri-Bandarban.jpg"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <p className="text-5xl font-bold text-white ">Khagrachari Bandarban</p>
                  <p className="text-lg font-semibold text-gray-200">Bandarban is the pious hub of Theravada Buddhism practiced by tribal communities like Marma or Mogh. Here you will find Buddha Dhatu Jadi, the largest Theravada Buddhist Temple of Bangladesh and the second biggest Buddha sculpture in the country.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block carousel-img  w-full"
                  src = "https://www.travelguru.com/holiday-packages/images/goa.jpg"
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <p className="text-5xl font-bold text-white ">Cox's Bazar Beach</p>
                  <p className="text-lg text-gray-500 font-semibold " > It is famous mostly
                  for its long natural sandy beach.It is located 150 km(93 mi) south of the city of Chittagong.Cox 's Bazar is also known by the name Panowa, which translates literally as "yellow flower".</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block carousel-img  w-full"
                  src = "https://www.travelmate.com.bd/wp-content/uploads/2020/08/kuakata-patuakhai.jpg"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <p className="text-5xl font-bold text-white ">Kuakata Beach</p>
                  <p className="text-gray-200 text-lg font-semibold" > Kuakata is one of the rarest places which has the unique beauty of offering the full view of the rising and setting of crimson sun in the water of the Bay of Bengal in a calm environment.That perhaps makes Kuakata one of the world 's unique beaches</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;