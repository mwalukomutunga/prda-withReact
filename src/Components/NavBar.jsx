import { Link } from "react-router-dom";
const NavBar = () => {
    return (
        <div className="rd-navbar-aside-outer">
            <div className="rd-navbar-panel">
                <button className="rd-navbar-toggle"
                    data-rd-navbar-toggle=".rd-navbar-nav-wrap"><span></span></button>
                <div className="rd-navbar-brand"><Link className="brand-name" to="/">
                    <img className="desktop-element" src="images/WEB-1.png" alt="" width="220"
                        height="39" />
                    <img className="mobile-element" src="images/WEB-1.png" alt=""
                        width="200" height="40" /></Link>
                </div>
            </div>
            <div className="rd-navbar-aside rd-navbar-collapse">
                <address className="contact-info">
                    <ul className="list-address">
                        <li>
                            <div className="unit unit-middle unit-spacing-icon unit-horizontal">
                                <div className="unit__left"><span
                                    className="icon icon-md icon-primary-dark fa-phone"></span></div>
                                <div className="unit__body list-tel">
                                    <div className="p tel"><a href="tel:#">+211 (0) 923 211 011</a></div>
                                    <div className="p tel"><a href="tel:#">+211 (0) 916 714 691</a></div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="unit unit-middle unit-spacing-icon unit-horizontal">
                                <div className="unit__left"><span
                                    className="icon icon-md icon-primary-dark fa-home"></span>
                                </div>
                                <div className="unit__body"><a className="text-middle address"
                                    href="contacts.html">Liberty
                                    Commercial Bank Building,<br /> Mahata Yei, Juba, South Sudan.
                                </a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="unit unit-middle unit-spacing-icon unit-horizontal">
                                <div className="unit__left"><span
                                    className="icon icon-md icon-primary-dark fa-clock-o"></span></div>
                                <div className="unit__body">
                                    <div className="p">Mon - Sat 8.00 - 18.00</div>
                                    <div className="p">Sunday CLOSED</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <ul className="list-inline mobile-element">
                        <li><Link className="fa fa-facebook text-white" to ="/facebook"></Link></li>
                        <li><Link className="fa fa-google-plus text-white" to ="/in"></Link></li>
                        <li><Link className="fa fa-linkedin text-white" to ="/"></Link></li>
                        <li><Link className="fa fa-twitter text-white" to ="/"></Link></li>
                    </ul>
                </address>
            </div>
        </div>

    );
}

export default NavBar;