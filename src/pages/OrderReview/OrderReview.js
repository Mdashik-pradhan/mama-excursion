import React, { useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import Booking from '../Booking/Booking';

const OrderReview = () => {
    const [service, setService] = useState();
    const { id } = useParams();
      useEffect(() => {
          const url = `https://spooky-catacombs-20536.herokuapp.com/services/${id}`
          fetch(url)
              .then(res => res.json())
              .then(data => setService(data))
      }, [])

    return (
        <div className="container mt-5 mb-5">
                <p className="text-center mb-4 text-3xl font-semibold">You are going to <span className="text-green-600">BOOKING</span> this service!!!</p>
            <div className="md:flex justify-between items-center">
                <div className="text-center w-1/2 bg-green-600 hover:shadow-2xl  transition duration-500 rounded text-white pb-3">
                    <img className=" mb-3 rounded" src={service?.data.photoUrl} alt="" />
                    <p className="text- font-semibold">{service?.data.name}</p>
                    <p className="text-lg">{service?.data.duration}</p>
                    <p className="text- font-semibold">${service?.data.price}</p>
                    <p className="text-medium font-semibold">${service?.data.description}</p>
                </div>
                <div>
                    <Booking service={service} />
                </div>
            </div>
        </div>
    )
}

export default OrderReview;