import "./ImgContainer.css";
import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

function ImgContainer() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="imgcontainer">
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <img src="/images/main.jpg" alt="image" />
      </div>
      <div className="box">
        <div className="boxtext">
          <div data-aos="fade-up" data-aos-duration="3000">
            <h3>
              SPECIAL PIECES OF FURNITURE DESIGNED AND BUILT FROM SCRATCH.
            </h3>
          </div>
          <div data-aos="fade-down" data-aos-duration="3000">
            <p className="pdull">
              We're champions of good old fashioned woodworking and superior
              craftsmanship.
            </p>
          </div>
          <button>View Product</button>
        </div>
      </div>
    </div>
  );
}

export default ImgContainer;
