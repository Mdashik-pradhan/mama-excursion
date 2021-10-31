import React from 'react';
import { Nav } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-gray-800 mx-auto text-center">
            <div className="grid grid-rows-1 md:grid-cols-3 text-white p-5 justify-center">
                <div className="">
                    <p className="text-3xl">Contact Info</p>
                    <div className="mt-5 text-lg mb-3">
                        <p>7/C, #1 6th floor, Mirpur-1, Dhaka-1216 </p>
                        <p>Phone & Whatssapp: +8801738308375</p>
                        <p>Email: travele.bangladesh@gmail.com</p>
                    </div>
                </div>
                <div className="leading-3 mb-3">
                    <p  className="mb-4 text-3xl">Quick Links</p>
                    <Nav.Link className="text-white hover:bg-gray-700 md:w-2/5 mx-auto">Tour In Bangladesh</Nav.Link>
                    <Nav.Link className="text-white hover:bg-gray-700 md:w-2/5 mx-auto">Popular Tour</Nav.Link>
                    <Nav.Link className="text-white hover:bg-gray-700 md:w-2/5 mx-auto">Top Attractions</Nav.Link>
                    <Nav.Link className="text-white hover:bg-gray-700 md:w-2/5 mx-auto">About Bangladesh</Nav.Link>
                </div>
                <div className="">
                    <p className="text-center text-3xl">Latest News</p>
                    <div className="mt-3">
                        <input  className="w-2/3 py-2 pl-2"  type="text" name="email" placeholder="Enter Your Email"/>
                        <input  className="bg-green-500 px-2 font-bold py-2 border-r-2 border-white"  type="button" value="Subscribe" />
                    </div>
                </div>
            </div>
                <div className="mx-auto">
                    <p className="text-3xl text-white">Payment Method</p>
                    <img className="w-80 mx-auto mb-2" src="https://www.nicepng.com/png/detail/395-3955693_paypal-payment-method-logo.png" alt="" />
                </div>
            <div className="bg-gray-600 h-8">
                <p className="text-white pt-1">All Copy Rights by: mamaexcursion.com</p>
            </div>
        </footer>
    );
};

export default Footer;