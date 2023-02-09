
import African_food_1_Achu from "../assets/Images/African_food_1_Achu.jpeg";
import African_food_2_Eru_and_garri from "../assets/Images/African_food_2_Eru_and_garri.jpeg";
import African_food_3_Cornchaf from "../assets/Images/African_food_3_Cornchaf.png";
import React from "react";


const images = [African_food_1_Achu, 
  African_food_2_Eru_and_garri, 
  African_food_3_Cornchaf
];
const delay = 2500;

function HomeSliderImages() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map((image, index) => (
          <div
            className="slide"
            key={index}
            style={{ image }}
          ></div>
        ))}
      </div>

      <div className="slideshowDots">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
export default HomeSliderImages;