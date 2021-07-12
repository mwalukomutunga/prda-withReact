import React from 'react';
import PageLoader from './PageLoader';
import Slider from './Slider';
import ReliefSection from './Relief';
import Partners from './Partners'
import PageHeader from './PageHeader';
import Footer from './Footer';
import Mission from './Mission';
import CoreValues from './CoreValues';
import Code from './Code';
const HomePage = () =>{
return (
    <div className="text-center text-sm-left page">
            {/* <PageLoader />
            <PageHeader />            */}
             {/* <PageLoader /> */}
            <Slider />
            <Mission/>
            <CoreValues/>
            <Code/>
            <ReliefSection />
            <Partners />
            {/* <Footer /> */}
            <div className="snackbars" id="form-output-global"></div>
        </div>
)
}
export default HomePage;