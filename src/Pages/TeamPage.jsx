import PageHeader from "../Components/PageHeader";
import PageLoader from "../Components/PageLoader";
import Breadcrumbs from "../Components/Breadcrumbs";
import Footer from "../Components/Footer";
import Team from "../Content/Team"
const TeamPage = () => {
    return (
        <div className="text-center text-sm-left page">
            {/* <PageLoader />
            <PageHeader /> */}
            <Breadcrumbs Page={"Team"} />
            <Team />
            {/* <Footer /> */}
            <div className="snackbars" id="form-output-global"></div>
        </div>
    );
}

export default TeamPage;