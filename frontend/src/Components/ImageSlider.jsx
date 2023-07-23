import { Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slider1 from "../Images/slider1.jpg"
import slider2 from "../Images/slider2.jpg"
import slider3 from "../Images/slider3.jpg"
import slider4 from "../Images/slider4.jpg"
import slider5 from "../Images/slider5.jpg"
import { useState, useEffect } from "react";

// If you want to use your own Selectors look up the Advancaed Story book examples
const ImageSlider = () => {

  const [currentSlide, setCurrentSlide] = useState(0);



    const slides = [
        {
            image: `${slider1}`
          },
          {
            image:
            `${slider2}`
          },
          {
            image:
            `${slider3}`
          },
          {
            image:
            `${slider4}`
          },
          {
            image:
            `${slider5}`
          }
        ];
    

        useEffect(() => {
          const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
          }, 3000);
      
          return () => clearInterval(interval);
        }, [slides.length]);

  return (
    <Carousel infiniteLoop autoPlay showThumbs={false} selectedItem={currentSlide}>
      {slides.map((slide) => {
        return <Image key={slide.image} src={slide.image} padding = "10px" marginBottom = "70px" boxShadow = " rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;" objectFit={"cover"} height="85vh" />;
      })}
    </Carousel>
  );
};

export default ImageSlider;