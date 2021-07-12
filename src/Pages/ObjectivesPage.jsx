import PageLoader from "../Components/PageLoader";
import PageHeader from "../Components/PageHeader";
import Breadcrumbs from "../Components/Breadcrumbs";
import Objectives from "../Content/Objectives";
import Footer from "../Components/Footer";

const ObjectivesPage = () => {
    return ( 
        <div className="text-center text-sm-left page">
        {/* <PageLoader />
        <PageHeader /> */}
        <Breadcrumbs Page ={"Objectives"}/>
        <Objectives/>        
        {/* <Footer /> */}
        <div className="snackbars" id="form-output-global"></div>
    </div>
     );
}
 
export default ObjectivesPage;