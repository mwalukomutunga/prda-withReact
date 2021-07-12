import PageLoader from "../Components/PageLoader";
import PageHeader from "../Components/PageHeader";
import Breadcrumbs from "../Components/Breadcrumbs";
import Livelihoods from "../Content/Livelihoods";
import Footer from "../Components/Footer";

const LivelihoodPage = () => {
    return ( 
        <div className="text-center text-sm-left page">
        {/* <PageLoader />
        <PageHeader /> */}
        <Breadcrumbs Page ={"Livelihoods"}/>
        <Livelihoods/>        
        {/* <Footer /> */}
        <div className="snackbars" id="form-output-global"></div>
    </div>
     );
}
 
export default LivelihoodPage;