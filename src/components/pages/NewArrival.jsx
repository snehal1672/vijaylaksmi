import "./NewArrival.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function NewArrival() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="container dark">
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-duration="2000"
        >
          <div className="card width">
            <img
              className="card-img-top"
              src="/images/img2.jpg"
              alt="Card image"
            />
            <div className="card-body">
              <h4 className="card-title">John Doe</h4>
              <p className="card-text">Some example text.</p>
            </div>
          </div>
        </div>
        <div data-aos="zoom-out-down">
          <div className="card width">
            <img
              className="card-img-top"
              src="/images/img.jpg"
              alt="Card image"
            />
            <div className="card-body">
              <h4 className="card-title">John Doe</h4>
              <p className="card-text">Some example text.</p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-duration="2000"
        >
          <div className="card width">
            <img
              className="card-img-top"
              src="/images/img.jpg"
              alt="Card image"
            />
            <div className="card-body">
              {/* <h4 className="card-title">John Doe</h4> */}
              {/* <p className="card-text">Some example text.</p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewArrival;
