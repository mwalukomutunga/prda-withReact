import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer className="page-footer footer-default bg-gray-3">
            <div className="section-md">
                <div className="shell">
                    <div className="range range-50 range-center">
                        <div className="cell-md-3 cell-sm-6 cell-xs-12 wow fadeInUp" data-wow-delay=".1s">
                            <h3>Who we are</h3>
                            <ul className="list list-marked-none visible-xs-inline-block reveal-sm-block">
                           
                            <li><Link to="/governance">Govenance</Link></li>
                                <li><Link to="codeofconduct">Code of Conduct</Link></li>
                                <li><Link to="/objectives">Objectives</Link></li>
                                <li><Link to="/livelihoods">Liveliwoods</Link></li>
                                <li><Link to="/team">Team</Link></li>
                                <li><Link to="/whereWeWork">Where we work</Link></li>
                            </ul>
                        </div>
                        <div className="cell-md-3 cell-sm-6 cell-xs-12 wow fadeInUp" data-wow-delay=".2s">
                            <h3>Programmes</h3>
                            <ul className="list list-marked-none visible-xs-inline-block reveal-sm-block">
                            <li><Link to="/healthTraining">Leer health training School</Link></li>
                                <li><Link to="/healthTraining">Agriculture </Link></li>
                                <li><Link to="/">Water, sanitation and Hygiene (WASH)</Link></li>
                                <li><Link to="/disasterandrisk">Disaster & Risk Management</Link></li>
                                <li><Link to="/foodsecurity">Relief Programmes</Link></li>
                                <li><Link to="/foodsecurity">Flooding Intervation</Link></li>
                                <li><Link to="/foodsecurity">Covid 19</Link></li>
                            </ul>
                        </div>
                        <div className="cell-md-3 cell-sm-6 cell-xs-12 wow fadeInUp" data-wow-delay=".3s">
                            <h3>Contacts</h3>
                            <address className="contact-info">
                                <ul className="list-address">
                                    <li><a className="text-middle address" href="contacts.html">Mahata Yei, Juba, <br />South Sudan.</a>
                                    </li>
                                    <li className="list-tel">
                                        <div className="p tel big"><a className="text-gray text-middle" href="tel:#">+211 (0) 923 211 011</a></div>
                                        <div className="p tel big"><a className="text-gray text-middle" href="tel:#">+254 020 386 2241</a></div>
                                    </li>
                                    <li>
                                        <div className="p">Mon - Sat 8.00 - 18.00</div>
                                        <div className="p">Sunday CLOSED</div>
                                    </li>
                                </ul>
                            </address>
                        </div>
                        <div className="cell-md-3 cell-sm-6 cell-xs-10 wow fadeInUp" data-wow-delay=".4s">
                            <h3>Newsletter</h3>
                            <form className="rd-mailform text-left" data-form-output="form-output-global" data-form-type="forms"
                                method="post" action="">
                                <div className="form-wrap">
                                    <label className="form-label" htmlFor="inline-email-1">Enter your email here</label>
                                    <input className="form-input" id="inline-email-1" type="email" name="email"
                                        data-constraints="@Email @Required" />
                                </div>
                                <div className="form-button text-right">
                                    <button className="button button-primary-sec button-no-outline" type="submit">Subscribe<span
                                        className="icon-arrow icon-rotate-180 material-icons-keyboard_backspace"></span></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-panel">
                <div className="shell">
                    <p><span className="text-gray-dark">Prda-Church</span> &#169; <span id="copyright-year"></span>.<a
                        className="text-gray" href="#"> Privacy Policy</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
export default Footer;