import PageLoader from "../Components/PageLoader";
import PageHeader from "../Components/PageHeader";
import Breadcrumbs from "../Components/Breadcrumbs";
import GovernanceContent from "./GovernanceContent";
import Footer from "../Components/Footer";

const Governance = () => {
    return ( 
        <div className="text-center text-sm-left page">
        {/* <PageLoader />
        <PageHeader /> */}
        <Breadcrumbs Page ={"Governance"}/>
        <GovernanceContent/>        
        {/* <Footer /> */}
        <div className="snackbars" id="form-output-global"></div>
    </div>
     );
}
 
export default Governance;