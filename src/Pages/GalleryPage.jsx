import PageLoader from "../Components/PageLoader";
import PageHeader from "../Components/PageHeader";
import Breadcrumbs from "../Components/Breadcrumbs";
import Gallery from "../Content/Gallery";
import Footer from "../Components/Footer";

const GalleryPage = () => {
    return ( 
        <div className="text-center text-sm-left page">
        {/* <PageLoader />
        <PageHeader /> */}
        <Breadcrumbs Page ={"Gallery"}/>
        <Gallery/>        
        {/* <Footer /> */}
        <div className="snackbars" id="form-output-global"></div>
    </div>
     );
}
 
export default GalleryPage;