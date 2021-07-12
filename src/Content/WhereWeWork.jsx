import { Link } from "react-router-dom";
const WhereWeWork = () => {
    return (
        <section class="section-md bg-white text-left">
            <div class="shell">
                <div class="tabs-custom tabs-services tabs-vertical" id="tabs-3">
                    <ul class="nav-custom nav-custom-tabs group-tabs">

                        <li><a href="services.html#tabs-3-5" data-toggle="tab">Where we work<span
                            class="icon-arrow icon-rotate-90 material-icons-keyboard_backspace"></span></a></li>

                    </ul>
                    <div class="tab-content text-left">

                        <div class="tab-pane fade in active counter-index-sec" id="tabs-3-1">
                            <h2>Where We WORK</h2>
                            <div class="range range-30">

                                <div class="cell-md-6">
                                    <h6 class="text-bold counter-index-item"><span class="counter-wrap"></span>South
                                        Sudan</h6>
                                    <ul class="list list-marked list-big list-bold">
                                        <li>Upper Nile State</li>
                                        <li>Unity State</li>
                                        <li>Jonglei State.</li>
                                        <li>Central Equatoria State.</li>
                                    </ul>
                                </div>
                                <div class="cell-md-6">
                                    <h6 class="text-bold counter-index-item"><span class="counter-wrap"></span>Ethiopia
                                    </h6>
                                    <ul class="list list-marked list-big list-bold">
                                        <li>Pinynidu.</li>
                                        <li>Tharpam.</li>
                                    </ul>
                                </div>
                                <div class="cell-md-6">
                                    <h6 class="text-bold counter-index-item"><span class="counter-wrap"></span>Uganda
                                    </h6>
                                    <ul class="list list-marked list-big list-bold">
                                        <li>West Nile Region Arua</li>
                                        <li>Keryerindgo Byellial</li>
                                    </ul>
                                </div>
                                <div class="cell-md-6">
                                    <h6 class="text-bold counter-index-item"><span class="counter-wrap"></span>Kenya
                                    </h6>
                                    <ul class="list list-marked list-big list-bold">
                                        <li>Kakuma Refugees Camp.</li>
                                    </ul>
                                </div>
                                <div class="cell-md-6">
                                    <h6 class="text-bold counter-index-item"><span class="counter-wrap"></span>Sudan
                                    </h6>
                                    <ul class="list list-marked list-big list-bold">
                                        <li>Jebel Aulia.</li>
                                    </ul>
                                </div>
                                <h6 class="text-bold counter-index-item"><span class="counter-wrap"></span>Sudan
                                </h6>
                                <h6 class="text-bold counter-index-item"><span class="counter-wrap"></span>Ethiopia
                                </h6>
                                <h6 class="text-bold counter-index-item"><span class="counter-wrap"></span>Uganda
                                </h6>
                                {/* <p>Before winter has hit you hardest, our team will already be hard at work
                                    evaluating the grounds for
                                    effective cold weather preparation. We take into account any physical elements
                                    such as curbs, fire
                                    hydrants, hardscape, and more. When we return to clear away ice and snow, our
                                    team will be able to
                                    provide professional, precise, and efficient cleaning service.</p>
                                Created by ragnar on 9/4/2018. */}

                                <div class="cell-lg-4 cell-md-5 text-center text-sm-left"><Link
                                    class="button button-primary" to="contacts">Contact us<span
                                        class="icon-arrow icon-rotate-90 material-icons-keyboard_backspace"></span></Link>
                                </div>
                                <div class="cell-lg-4 cell-md-5 text-center text-sm-left">
                                    <div class="unit unit-middle unit-spacing-icon-3 unit-horizontal">
                                        <div class="unit__left"><span
                                            class="icon-gray-dark icon-54 fl-great-icon-set-mobile226"></span>
                                        </div>
                                        <div class="unit__body">
                                            <h6>Have any questions?</h6>
                                            <h3><a class="tel" href="tel:#">+211 <span>(0)</span>923 211 011</a></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhereWeWork;