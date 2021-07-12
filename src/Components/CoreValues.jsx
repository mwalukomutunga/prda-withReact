import { Link } from "react-router-dom";
const CoreValues = () => {
    return (
        <section className="section-md bg-gray-3 section-relative index-2">
            <div className="shell">
                <div className="range range-50 range-center">
                    <div className="cell-md-5 cell-sm-8">
                        <h2>PRDA’S CORE VALUES</h2>
                        <ul className="list list-index list-big list-primary visible-xs-inline-block reveal-sm-block">
                            <li className="wow fadeInLeft" data-wow-delay=".1s"><span className="list-index-counter"></span><Link
                                to="/" >Prayer,
                                Justice, Peace and Harmony</Link></li>
                            <li className="wow fadeInLeft" data-wow-delay=".15s"><span className="list-index-counter"></span><Link to="/">Team
                                Spirit, Accountability and transparency</Link></li>
                            <li className="wow fadeInLeft" data-wow-delay=".2s"><span className="list-index-counter"></span><Link
                                to="/"  >Community
                                Participation</Link></li>
                            <li className="wow fadeInLeft" data-wow-delay=".25s"><span className="list-index-counter"></span><Link
                                to="/" >Gender
                                sensitivity</Link></li>
                            <li className="wow fadeInLeft" data-wow-delay=".25s"><span className="list-index-counter"></span><Link
                                to="/" >Advocacy
                                for the poor and marginalized</Link></li>
                        </ul>
                        <div className="button-wrap"><Link className="button button-primary" to="/objectives">Read more..<span
                            className="icon-arrow icon-rotate-90 material-icons-keyboard_backspace"></span></Link></div>
                    </div>
                    <div className="cell-md-7 section-relative wrap-img-pages wrap-img-pages-2"><Link className="img-position-7 wow fadeInUp"
                        to="/" data-wow-delay=".05s"><img className="box-shadow-var-3" src="images/DSC00258.JPG" alt=""
                            width="470" height="482" /></Link><Link className="img-position-6 wow fadeInUp" to="/"
                                data-wow-delay=".15s"><img className="box-shadow-var-3" src="images/DSC01064.JPG" alt="" width="470"
                                    height="482" /></Link><Link className="img-position-5 wow fadeInUp" to="/"
                                        data-wow-delay=".25s"><img className="box-shadow-var-3" src="images/WP_20141114_15_36_08_Smart.jpg" alt="" width="470"
                                            height="482" /></Link><Link className="img-position-4 wow fadeInUp" to="/"
                                                data-wow-delay=".35s"><img className="box-shadow-var-3" src="images/Recoverd_jpg_file431-2.jpg" alt=""
                                                    width="470" height="482" /></Link></div>
                </div>
            </div>
        </section>
    );
}

export default CoreValues;