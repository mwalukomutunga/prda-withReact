import { Link } from "react-router-dom";
const ReliefSection = () =>{
    return(
        <section className="section-md bg-white">
        <div className="shell">
          <div className="range range-50 range-center">
            <div className="cell-lg-5 cell-md-6 cell-sm-8">
              <h2>Relief & Emergency Response</h2>
              <p className="big text-width-smaller">P.R.D.A responds where ppossible with emergency food aid, water and
                vocational
                training for the most vulnerable people, including those who have been displaced
                from their homes.</p>           
              <div className="button-wrap"><Link className="button button-primary" to="/objectives">Read more..<span
                    className="icon-arrow icon-rotate-90 material-icons-keyboard_backspace"></span></Link></div>
            </div>
            <div className="cell-lg-7 cell-md-6 cell-sm-8 section-relative wrap-img-pages wrap-img-pages-1"><a
                className="img-position-3 wow fadeInDown" href="/" data-wow-delay=".1s"><img
                  className="box-shadow-var-1" src="images/IMG-20210609-WA0008.jpg" alt="" width="470" height="327" /></a><a
                className="img-position-2 wow fadeInUp" href="category.html" data-wow-delay=".2s"><img
                  className="box-shadow-var-1" src="images/gallery_img084.JPG" alt="" width="470" height="327" /></a><a
                className="img-position-1 wow fadeInRight" href="product-page.html" data-wow-delay=".3s"><img
                  className="box-shadow-var-1" src="images/DSC00156.jpg" alt="" width="470" height="327" /></a>
            </div>
          </div>
        </div>
      </section>
    );
}
export default ReliefSection;