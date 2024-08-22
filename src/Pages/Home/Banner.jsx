//import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Banner = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
            <section className=" bg-gray-50 lg:h-[550px] h-[350px] overflow-hidden w-full">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1">
                        <div className="col-span-1">
                            <div className="w-full flex items-center lg:h-[550px] h-[350px]">
                                <div className="text-center w-full">
                                    <div className="relative text-left info">
                                        <Slider {...settings}>
                                            <div>
                                                <h1 className="text-7xl font-semibold">Digital</h1>
                                                </div>
                                            <div>
                                                <h1 className="text-7xl font-semibold">Support</h1>
                                                </div>
                                            <div>
                                                <h1 className="text-7xl font-semibold">Marketing</h1>
                                                 </div>
                                        </Slider>
                                        <h1 className="text-7xl font-semibold"> Via WhatsApp</h1>
                                        <div className="circle"></div>
                                    </div>
                                    <p className="text-2xl text-black mt-10 mb-3">Use WhatsApp for sales, personalized marketing, real-time support, and customer satisfaction</p>
                                    <button className="bg-orange-600 text-white text-lg px-5 py-2">Start Free Trial</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner