import React from "react";
import "./Footer.css"
function Footer() {
    return (
        <footer>
            <div className="fitem">
                <h1>Shop Non-Stop on Meesho</h1>
                <p>Trusted by more than 1 Crore Indians <br />
                    Cash on Delivery | Free Delivery</p>
                <div className="downloadbtnimg">
                    <img src="https://images.meesho.com/images/pow/playstore-icon-big_400.webp" width='180px'  alt="downloadbtn" />
                    <img src="https://images.meesho.com/images/pow/appstore-icon-big_400.webp" width='180px'  alt="downloadbtn" />
                </div>
            </div>
            <div className="fitem">
                <br />
                <div className="navitem">Careers</div>
                <div className="navitem">Become a supplier</div>
                <div className="navitem">Hall of Fame</div>
                <div className="navitem">Sitemap</div>
            </div>
            <div className="fitem">
                <br />
                <div className="navitem">Legal and Policies</div>
                <div className="navitem">Meesho Tech Blog</div>
                <div className="navitem">Notices and Returns</div>

            </div>
            <div className="fitem">
                <h2 className="iconnavheading">Reach out to us</h2>
                <div className="navicon">
                    <img className="naviconitem" src="https://images.meesho.com/images/pow/facebook.png" alt="facebood" />
                    <img className="naviconitem" src="https://images.meesho.com/images/pow/instagram.png" alt="instagram" />
                    <img className="naviconitem" src="https://images.meesho.com/images/pow/youtube.png" alt="youtube" />
                    <img className="naviconitem" src="https://images.meesho.com/images/pow/linkedin.png" alt="linkedin" />
                    <img className="naviconitem" src="https://images.meesho.com/images/pow/twitter.png" alt="twitter" />
                </div>

            </div>
            <div className="fitem">
                <h2 className="contactinfoheading">Contact Us</h2>
                <p className="contacttext">
                    Fashnear Technologies Private <br /> Limited,<br />
                    CIN: U74900KA2015PTC082263 <br />
                    06-105-B, 06-102, (138 Wu) <br /> Vaishnavi Signature, No. 78/9, <br /> Outer Ring Road, Bellandur, <br /> Varthur Hobli, Bengaluru-560103, <br /> Karnataka, India <br />
                    E-mail address: query@meesho.com <br />
                    © 2015-2023 Meesho.com
                </p>
            </div>
        </footer>
    )
}
export default Footer;