import { useState } from "react";
import { sliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { GrClose } from "react-icons/gr";

function ImageSlider() {
    const [current, setCurrent] = useState(0);
    const [isOpenSlider, setIsOpenSlider] = useState(false);
    const length = sliderData.length;

    function openSlider(index) {
        setCurrent(index);
        setIsOpenSlider(true);
    }

    function closeSlider() {
        setIsOpenSlider(false);
    }

    function prevSlide() {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    function nextSlide() {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    if (sliderData.length <= 0) return null;

    return (
        <div className="flex justify-start items-start p-[90px]">
            
                <div className="flex flex-col space-y-[110px] ">
                    
                    <div className="w-full h-80 "> 
                        <img
                            className="w-[500px] h-[full] object-cover cursor-pointer rounded-[10px]  border-orange-400"
                            src={sliderData[current].image}
                            alt={sliderData[current].alt}
                            onClick={() => openSlider(current)}
                        />
                    </div>
                    
                    <div className="flex space-x-4 "> 
                        {sliderData.map((slide, index) => (
                            <img
                                className=" hover:filter hover:blur-sm hover:brightness-90  rounded-[10px] w-28 h-28 object-cover cursor-pointer border-2 border-orange-400  transition duration-300 ease-in-out" 
                                src={slide.image}
                                alt={slide.alt}
                                onClick={() => openSlider(index)}
                                key={slide.id}
                            />
                        ))}
                    </div>
                </div>
         
               { isOpenSlider ? (
                <section className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50 backdrop-blur-sm">
                <div className="relative">
                  
                    <FaArrowAltCircleLeft
                        onClick={prevSlide}
                        className="absolute left-0 text-4xl text-white cursor-pointer z-10 hover:text-orange-500 transition-colors duration-300"
                        style={{ transform: 'translateX(-50%)', top: '50%' }}
                    />
                   
                    <img
                        src={sliderData[current].image}
                        alt={sliderData[current].alt}
                        className="w-[500px] h-[500px] object-cover rounded-lg"
                    />
                   
                    <FaArrowAltCircleRight
                        onClick={nextSlide}
                        className="absolute right-0 text-4xl text-white cursor-pointer z-10 hover:text-orange-500 transition-colors duration-300"
                        style={{ transform: 'translateX(50%)', top: '50%' }}
                    />
                    
                    <GrClose
                        onClick={closeSlider}
                        className="absolute top-2 right-2 text-4xl text-white cursor-pointer z-10 hover:text-orange-500 transition-colors duration-300"
                    />
                </div>
            </section>
               ): null
                }
            
        </div>
    );
}

export default ImageSlider;


