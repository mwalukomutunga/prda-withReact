// import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from './Components/HomePage';
import Governance from "./Pages/Governance";
import TeamPage from "./Pages/TeamPage";
import CodeOfConductPage from "./Pages/CodeOfConductPage";
import DisasterAndRiskPage from "./Pages/DisasterAndRiskPage";
import HistoryPage from "./Pages/HistoryPage";
import WaterPage from "./Pages/WaterPage";
import LivelihoodPage from "./Pages/LivelihoodPage";
import ObjectivesPage from "./Pages/ObjectivesPage";
import FoodSecurityPage from "./Pages/FoodSecurityPage";
import WhereWeWorkPage from "./Pages/WhereWeWorkPage";
import HealthTrainingPage from "./Pages/HealthTrainingPage";
import GalleryPage from "./Pages/GalleryPage";
import ContactPage from "./Pages/ContactPage";
import ComingSoonPage from "./Pages/ComingSoonPage";
import Footer from "./Components/Footer";
import PageHeader from "./Components/PageHeader";

import React from 'react';
function App() {
  return (
    <React.Fragment>

      <Router>
        <PageHeader />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/governance" component={Governance} />
          <Route exact path="/team" component={TeamPage} />
          <Route exact path="/codeofconduct" component={CodeOfConductPage} />
          <Route exact path="/disasterandrisk" component={DisasterAndRiskPage} />
          <Route exact path="/history" component={HistoryPage} />
          <Route exact path="/wash" component={WaterPage} />
          <Route exact path="/livelihoods" component={LivelihoodPage} />
          <Route exact path="/objectives" component={ObjectivesPage} />
          <Route exact path="/foodsecurity" component={FoodSecurityPage} />
          <Route exact path="/wherewework" component={WhereWeWorkPage} />
          <Route exact path="/healthtraining" component={HealthTrainingPage} />
          <Route exact path="/gallery" component={GalleryPage} />
          <Route exact path="/contacts" component={ContactPage} />
          <Route exact path="/comingsoon" component={ComingSoonPage} />
         
          
        </Switch>
        <Route exact path="/facebook" render={() => (window.location = "https://www.facebook.com/search/top?q=prda")} />
          <Route exact path="/in" render={() => window.location.assign('https://developer.mozilla.org/en-US/docs/Web/API/Location/reload')} />
        <Footer />
      </Router>

    </React.Fragment>
  );
}

export default App;
