import NavBar from "./NavBar";
import InnerNavBar from "./InnerNavBar";
const PageHeader = () =>{
    return (
        <header className="page-header header-classic">
        <div className="rd-navbar-wrap">
            <nav className="rd-navbar" data-layout="rd-navbar-fixed" data-sm-layout="rd-navbar-fixed"
                data-md-layout="rd-navbar-fullwidth" data-md-device-layout="rd-navbar-fixed"
                data-lg-layout="rd-navbar-fullwidth" data-lg-device-layout="rd-navbar-fullwidth"
                data-md-stick-up-offset="73px" data-lg-stick-up-offset="93px" data-stick-up="true"
                data-sm-stick-up="true" data-md-stick-up="true" data-lg-stick-up="true">
                <div className="rd-navbar-collapse-toggle" data-rd-navbar-toggle=".rd-navbar-collapse"><span></span>
                </div>
                <NavBar/>
                <InnerNavBar/>
            </nav>
        </div>
    </header>
    );
}
export default PageHeader;