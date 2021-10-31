import React from 'react';
import { Nav } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-black mx-auto text-center">
            <div className="grid grid-rows-1 md:grid-cols-3 text-white p-5 justify-center">
                <div className="">
                    <h4>Contact Info</h4>
                    <div className="leading-3 mt-5 mb-3">
                        <p>7/C, #1 6th floor, Mirpur-1, Dhaka-1216 </p>
                        <p>Phone & Whatssapp: +8801738308375</p>
                        <p>Email: travele.bangladesh@gmail.com</p>
                    </div>
                </div>
                <div className="leading-3 mb-5">
                    <h4  className="mb-4">Quick Links</h4>
                    <Nav.Link className="text-white hover:bg-gray-700 md:w-2/5 mx-auto">Tour In Bangladesh</Nav.Link>
                    <Nav.Link className="text-white hover:bg-gray-700 md:w-2/5 mx-auto">Popular Tour</Nav.Link>
                    <Nav.Link className="text-white hover:bg-gray-700 md:w-2/5 mx-auto">Top Attractions</Nav.Link>
                    <Nav.Link className="text-white hover:bg-gray-700 md:w-2/5 mx-auto">About Bangladesh</Nav.Link>
                </div>
                <div className="">
                    <h4 className="text-center">Latest News</h4>
                    <div className="mt-3">
                        <input  className="w-2/3 py-2 pl-2"  type="text" name="email" placeholder="Enter Your Email"/>
                        <input  className="bg-green-500 px-2 font-bold py-2 border-r-2 border-white"  type="button" value="Subscribe" />
                    </div>
                </div>
            </div>
            <div className="bg-gray-600 h-8">
                <p className="text-white pt-1">All Copy Rights by: mamaexcursion.com</p>
            </div>
        </footer>
    );
};

export default Footer;