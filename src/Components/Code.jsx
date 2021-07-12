import { Link } from "react-router-dom";
const Code = () => {
    return (
        <section className="section-xs section-md-30 bg-white">
            <div className="shell">
                <div className="range range-50 range-center range-md-right range-md-reverse">
                    <div className="cell-lg-4 cell-md-5 cell-xs-10">
                        <div className="section-md-70">
                            <h2 className="wow fadeInRight" data-wow-delay=".2s">Code Of Conduct</h2>
                            <p className="big text-width-sm-340 wow fadeInRight" data-wow-delay=".3s">
                                To carry out community-based relief, rehabilitation and development activities that meet and address the
                                overall social
                                and physical needs of the people of South Sudan.</p><Link className="button button-primary wow fadeInRight"
                                    to="codeofconduct" data-wow-delay=".4s">Read
                                more<span className="icon-arrow icon-rotate-90 material-icons-keyboard_backspace"></span></Link>
                        </div>
                    </div>
                    <div className="cell-md-7 cell-xs-10 wow fadeInLeft" data-wow-delay=".1s">
                        <div className="wrap-img offset-img-01"><img src="images/gallery_img117.JPG" alt="" width="412" height="520" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Code;