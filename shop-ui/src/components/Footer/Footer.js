import React from "react";
import { Component } from "react"
class Footer extends Component {
    render() {
        return (    
          <div>
            <section/>
            <footer className="footer-distributed">
              <div className="footer-left">
                <h3><span>Shoe Selling</span></h3>
                <p className="footer-links">
                  <a href="#">Home</a> ·
                  <a href="#">Blog</a> ·
                  <a href="#">Pricing</a> ·
                  <a href="#">About</a> ·
                  <a href="#">Faq</a> ·
                  <a href="#">Contact</a>
                </p>
                <p className="footer-company-name">About us</p>
                <div className="footer-icons">
                  <a href="#"><i className="fa fa-facebook" /></a>
                  <a href="#"><i className="fa fa-twitter" /></a>
                  <a href="#"><i className="fa fa-linkedin" /></a>
                  <a href="#"><i className="fa fa-github" /></a>
                </div>
              </div>
              <div className="footer-right">
                <p>Contact Us</p>
                <form action="https://ecom-shoe.onrender.com/" method="post">
                  <input type="text" name="email" placeholder="Email" />
                  <textarea name="message" placeholder="Message" defaultValue={""} />
                  <button>Send</button>
                </form>
              </div>
            </footer>
          </div>
        )
      }
}
export default Footer;