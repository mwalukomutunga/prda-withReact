import { Link } from "react-router-dom";
const InnerNavBar = () => {
    return (
        <div className="rd-navbar-inner">
            <div className="rd-navbar-aside-wrap">
                <div className="rd-navbar-nav-wrap">
                    <ul className="rd-navbar-nav">
                        <li className="active"><Link to="/">Home
                            <svg className="button-santos" xmlns="https://www.w3.org/2000/svg"
                                shapeRendering="crispEdges">
                                <rect className="shape" width="100%" height="100%" x="0" y="0"></rect>
                            </svg></Link>
                        </li>
                        <li><Link to="/">Who we are
                            <svg className="button-santos" xmlns="https://www.w3.org/2000/svg"
                                shapeRendering="crispEdges">
                                <rect className="shape" width="100%" height="100%" x="0" y="0"></rect>
                            </svg></Link>
                            <ul className="rd-navbar-dropdown">
                                <li><Link to="/governance">Govenance</Link></li>
                                <li><Link to="codeofconduct">Code of Conduct</Link></li>
                                <li><Link to="/objectives">Objectives</Link></li>
                                <li><Link to="/livelihoods">Liveliwoods</Link></li>
                                <li><Link to="/team">Team</Link></li>
                                <li><Link to="/whereWeWork">Where we work</Link></li>
                            </ul>
                        </li>
                        {/* <li><Link to="/">What We do
                            <svg className="button-santos" xmlns="https://www.w3.org/2000/svg"
                                shapeRendering="crispEdges">
                                <rect className="shape" width="100%" height="100%" x="0" y="0"></rect>
                            </svg></Link>
                            <ul className="rd-navbar-dropdown">
                                <li><Link to="/objectives">Objectives</Link></li>
                                <li><Link to="/livelihoods">Liveliwoods</Link></li>
                                <li><Link to="/whereWeWork">Where we work</Link></li>

                            </ul>
                        </li> */}

                        <li><Link to="/">Programmes
                            <svg className="button-santos" xmlns="https://www.w3.org/2000/svg"
                                shapeRendering="crispEdges">
                                <rect className="shape" width="100%" height="100%" x="0" y="0"></rect>
                            </svg></Link>
                            <ul className="rd-navbar-dropdown">
                                <li><Link to="/healthTraining">Leer health training School</Link></li>
                                <li><Link to="/comingsoon">Agriculture </Link></li>
                                <li><Link to="/wash">Water, sanitation and Hygiene (WASH)</Link></li>
                                {/* <li><Link to="/disasterandrisk">Disaster & Risk Management</Link></li> */}
                                <li><Link to="/foodsecurity">Relief Programmes</Link></li>
                                <li><Link to="/comingsoon">Flooding Intervation</Link></li>
                                <li><Link to="/comingsoon">Covid 19</Link></li>
                                {/* <li><Link to="/history">Historical background and Establishment</Link></li> */}

                            </ul>
                        </li>
                        <li><Link to="/comingsoon">Alumni
                            <svg className="button-santos" xmlns="https://www.w3.org/2000/svg"
                                shapeRendering="crispEdges">
                                <rect className="shape" width="100%" height="100%" x="0" y="0"></rect>
                            </svg></Link>
                            {/* <ul className="rd-navbar-dropdown">
                                <li><Link to="/healthTraining">Midwifery School</Link></li>
                                <li><Link to="/healthTraining">Alumni</Link></li>
                            </ul> */}
                        </li>

                        <li><Link to="/gallery">Gallery
                            <svg className="button-santos" xmlns="https://www.w3.org/2000/svg"
                                shapeRendering="crispEdges">
                                <rect className="shape" width="100%" height="100%" x="0" y="0"></rect>
                            </svg></Link>
                        </li>

                        <li><Link to="contacts">Contacts
                            <svg className="button-santos" xmlns="https://www.w3.org/2000/svg"
                                shapeRendering="crispEdges">
                                <rect className="shape" width="100%" height="100%" x="0" y="0"></rect>
                            </svg></Link>
                        </li>

                    </ul>
                </div>
                <ul className="list-inline desktop-element">
                    <li><Link className="fa fa-facebook text-white" to="/"> </Link></li>
                    <li><Link className="fa fa-google-plus text-white" to="/"> </Link></li>
                    <li><Link className="fa fa-linkedin text-white" to="/"> </Link></li>
                    <li><Link className="fa fa-twitter text-white" to="/"> </Link></li>
                </ul>
            </div>
        </div>
    )
}
export default InnerNavBar;