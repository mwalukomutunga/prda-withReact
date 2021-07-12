import { Link } from "react-router-dom";
const Slider = () => {
    return ( 
        <section className="swiper-classic swiper-custom-container swiper-custom-nav">      
        <div className="swiper-container swiper-slider swiper-bg swiper-scale-effect" data-loop="true" data-autoplay="4000"
          data-slide-effect="fade" data-simulate-touch="false">
          <div className="swiper-wrapper">
            <div className="swiper-slide" data-slide-bg="images/IMG-20210707-WA0096.jpg">
              <div className="swiper-slide-cover "
              style={{background: 'url(/images/IMG-20210707-WA0096.jpg) center', backgroundSize:'cover'}}>
              </div>
            </div>
            <div className="swiper-slide" data-slide-bg="images/WP_20141114_15_36_08_Smart.jpg">
              <div className="swiper-slide-cover"
               style={{background: 'url(/images/WP_20141114_15_36_08_Smart.jpg) center', backgroundSize:'cover'}}></div>
            </div>
            <div className="swiper-slide" data-slide-bg="images/IMG-20210707-WA0109.jpg">
              <div className="swiper-slide-cover"
                 style={{background: 'url(/images/IMG-20210707-WA0109.jpg) center', backgroundSize:'cover'}}></div>
            </div>
          </div>
        </div>
        
        <div className="swiper-bg-content">
          <div className="swiper-slide-caption">
            <div className="swiper-slide-content">
              <div className="shell">
                <div className="range">
                  <div className="cell-xs-12">
                    <h6>LAYING THE FOUNDATION STONES</h6>
                    <h2><span className="icon icon-xmd fl-great-icon-set-mobile226"></span><a href="tel:#">+211 (0) 923 211
                        011</a></h2>
                    <div className="group-xs"><Link className="button button-md button-primary" to="/">Donate<span
                          className="icon-arrow icon-rotate-90 material-icons-keyboard_backspace"></span></Link><Link
                        className="button button-md button-primary-dark" to="/">Get in touch<span
                          className="icon-arrow icon-rotate-90 material-icons-keyboard_backspace"></span></Link></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shell box-nav box-nav-small box-nav__classic">
         
          <div className="swiper-button-prev">
           
           <span className="icon-arrow material-icons-keyboard_backspace"></span>
          </div>
          <div className="wrap-counter">
           
            <div className="swiper-pagination"></div>
            <div className="divider-counter">/</div>
            <div className="total-counter">03</div>
          </div>
         
          <div className="swiper-button-next">
          
             <span className="icon-arrow material-icons-keyboard_backspace"></span>
          </div>
        </div>
      </section>
     );
}
 
export default Slider;