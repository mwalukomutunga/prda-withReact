import React from 'react';
import PageLoader from './PageLoader';
import Slider from './Slider';
import ReliefSection from './Relief';
import Partners from './Partners'
import PageHeader from './PageHeader';
import Footer from './Footer';
import Breadcrumbs from './Breadcrumbs';
import GovernanceContent from '../Pages/GovernanceContent';
const Page = () => {
    return (
        <div className="text-center text-sm-left page">
            <PageLoader />
            <PageHeader />
            <Breadcrumbs Page ={"Governance"}/>
            <GovernanceContent/>
            {/* <Slider />
            <ReliefSection />
            <Partners /> */}
            <Footer />
            <div className="snackbars" id="form-output-global"></div>
        </div>
    );
}

export default Page;