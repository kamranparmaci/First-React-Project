import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <h1 to="/" className="brand">
            KPCooking
          </h1>
          <div className="row">
            <div className="col-4">
              <h6>LINKS</h6>
              <Link to="/kpCookingRecipes" className="footer-links">
                KPCookingRecipes
              </Link>
              <Link to="/articles" className="footer-links">
                Articles
              </Link>
              <Link to="/join" className="footer-links">
                Join
              </Link>
            </div>
            <div className="col-4">
              <h6>ABOUT US</h6>
              <span>
                <b>Address: </b>
              </span>
              <div className="text-muted">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta,
                nam.
              </div>
              <span>
                <b>Phone: </b>
              </span>
              <div className="text-muted">(5555)-5555-555</div>
            </div>
            <div className="col-4">
              <div className="social">
                <form>
                  <h6>GET FRESH NEWS FROM KPCooking</h6>
                  <input type="text" placeholder="Enter Email" />
                  <input type="button" value="Subscribe" />
                </form>
                <Link to="/www.instagram.com">
                  <i className="fab fa-instagram fa-2x"></i>
                </Link>
                <Link to="/www.facebook.com">
                  <i className="fab fa-facebook fa-2x"></i>
                </Link>
                <Link to="/www.whatsapp.com">
                  <i className="fab fa-whatsapp fa-2x"></i>
                </Link>
                <Link to="/www.twitter.com">
                  <i className="fab fa-twitter fa-2x"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
