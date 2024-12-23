import Carousel from 'react-bootstrap/Carousel';

function Hero() {

  return (
    <div className='container-flued size'>
    <Carousel data-bs-theme="dark">
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="/images/img.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h5>sofa </h5>
        <p>A lavish sofa for your hall</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="/images/main.jpg"
        alt="Second slide"
      />
      <Carousel.Caption>
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="/images/img3.jpg"
        alt="Third slide"
      />
      <Carousel.Caption>
        <h5>Third slide label</h5>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>    
  // <div className="container-md">
    // <div
    //   id="carouselExampleIndicators"
    //   className="carousel slide"
    //   data-bs-ride="carousel"
    // >
    //   <div className="carousel-indicators">
    //     <button
    //       type="button"
    //       data-bs-target="#carouselExampleIndicators"
    //       data-bs-slide-to="0"
    //       className="active"
    //       aria-current="true"
    //       aria-label="Slide 1"
    //     ></button>
    //     <button
    //       type="button"
    //       data-bs-target="#carouselExampleIndicators"
    //       data-bs-slide-to="1"
    //       aria-label="Slide 2"
    //     ></button>
    //     <button
    //       type="button"
    //       data-bs-target="#carouselExampleIndicators"
    //       data-bs-slide-to="2"
    //       aria-label="Slide 3"
    //     ></button>
    //   </div>
    //   <div className="carousel-inner ">
    //     <div className="carousel-item active">
    //       <img src="/images/img.jpg" className="d-block w-100 " alt="..." />
    //     </div>
    //     <div className="carousel-item">
    //       <img src="/images/img2.jpg" className="d-block w-100" alt="..." />
    //     </div>
    //     <div className="carousel-item">
    //       <img src="/images/img3.jpg" className="d-block w-100" alt="..." />
    //     </div>
    //   </div>
    //   <button
    //     className="carousel-control-prev"
    //     type="button"
    //     data-bs-target="#carouselExampleIndicators"
    //     data-bs-slide="prev"
    //   >
    //     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    //     <span class="visually-hidden">Previous</span>
    //   </button>
    //   <button
    //     className="carousel-control-next"
    //     type="button"
    //     data-bs-target="#carouselExampleIndicators"
    //     data-bs-slide="next"
    //   >
    //     <span className="carousel-control-next-icon" aria-hidden="true"></span>
    //     <span className="visually-hidden">Next</span>
    //   </button>
    // </div>
    // </div>s
  );
}

export default Hero;
