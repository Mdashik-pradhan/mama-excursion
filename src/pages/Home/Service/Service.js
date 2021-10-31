import React from 'react';
import { useHistory } from 'react-router';

const Service = ({service}) => {
    const { name, duration, photoUrl, price } = service?.data;
    const history = useHistory();
    const handleBooking = id => {
        history.push(`/orderReview/${id}`)
    }
    return (
        <div className=" border hover:bg-green-500 transition duration-500 ease-in-out hover:text-white text-center mt-3 rounded">
            <img className="rounded h-60 w-full" src={photoUrl} alt="" />
            <p className="text-xl font-semibold ">{name}</p>
            <p className="font-bold mt-2">{duration}</p>
            <p className="text-lg font-semibold mt-2 mb-2 text-pink-400">${price}</p>
            <button onClick={() => handleBooking(service._id)} className="border-2 bg-green-900 px-3 text-white py-1 text-lg font-semibold rounded-2xl mb-3 transition duration-500 ease-in-out hover:bg-yellow-500 transform hover:-translate-y-1 hover:scale-110">Book Now</button>
        </div>
    );
};

export default Service;