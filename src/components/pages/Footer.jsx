import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="container-fluid darkcontainer">
        <div className="ulcontainer">
          <h6>CONNECT WITH US</h6>
          <ul>
            <li>Disclaimer</li>
            <li>Our story</li>
            <li>About us</li>
            <li>blogs and news</li>
          </ul>
        </div>
        <div className="ulcontainer">
          <h6>INFORMATION</h6>
          <ul>
            <li>FAQs</li>
            <li>Shipping policy</li>
            <li>customise order policy</li>
            <li>return or rufund policy</li>
            <li>Maintain your furniture</li>
          </ul>
        </div>
        <div className="ulcontainer">
          <h6>NAVIGATION</h6>
          <ul>
            <li>Policy & privacy</li>
            <li>Care & Information </li>
            <li>Franchises</li>
            <li>Gift & card</li>
          </ul>
        </div>
      </div>
      <div className="container-fluid darkcontainertwo">
        <div className="icondiv">

        </div>
        <hr />
        &#169; by Vijay Lakshmi Home Furniture
        <div className="logobunch">
              <FaFacebook />
              <FaTwitterSquare />
              <FaInstagramSquare />
        </div>
      </div>
    </>
  );
}

export default Footer;
