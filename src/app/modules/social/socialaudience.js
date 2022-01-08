import React, { Component } from "react";
import Col from "react-bootstrap/esm/Col";
import IconFemale from "../../../assets/images/icons/femaleIcon";
import IconMale from "../../../assets/images/icons/maleIcon";
import Wrapper from "../../helpers/wrapper";
// import CountryChart from "../../shared/components/charts/CountryChart";
import HeatMap from "../../shared/components/charts/HeatMap";
import HorizontalBarChart from "../../shared/components/charts/HorizontalBarChart";
import { SectionDropdown } from "../../shared/components/dropdown/dropdown";
import './social.scss';

export class SocialAudience extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activity: '[{"hour":"12pm","weekday":"Sun","value":2990},{"hour":"1am","weekday":"Sun","value":2520},{"hour":"2am","weekday":"Sun","value":2334},{"hour":"3am","weekday":"Sun","value":2230},{"hour":"4am","weekday":"Sun","value":2325},{"hour":"5am","weekday":"Sun","value":2019},{"hour":"6am","weekday":"Sun","value":2128},{"hour":"7am","weekday":"Sun","value":2246},{"hour":"8am","weekday":"Sun","value":2421},{"hour":"9am","weekday":"Sun","value":2788},{"hour":"10am","weekday":"Sun","value":2959},{"hour":"11am","weekday":"Sun","value":3018},{"hour":"12am","weekday":"Sun","value":3154},{"hour":"1pm","weekday":"Sun","value":3172},{"hour":"2pm","weekday":"Sun","value":3368},{"hour":"3pm","weekday":"Sun","value":3464},{"hour":"4pm","weekday":"Sun","value":3746},{"hour":"5pm","weekday":"Sun","value":3656},{"hour":"6pm","weekday":"Sun","value":3336},{"hour":"7pm","weekday":"Sun","value":3292},{"hour":"8pm","weekday":"Sun","value":3269},{"hour":"9pm","weekday":"Sun","value":3300},{"hour":"10pm","weekday":"Sun","value":3403},{"hour":"11pm","weekday":"Sun","value":3323},{"hour":"12pm","weekday":"Mon","value":3346},{"hour":"1am","weekday":"Mon","value":2725},{"hour":"2am","weekday":"Mon","value":3052},{"hour":"3am","weekday":"Mon","value":3876},{"hour":"4am","weekday":"Mon","value":4453},{"hour":"5am","weekday":"Mon","value":3972},{"hour":"6am","weekday":"Mon","value":4644},{"hour":"7am","weekday":"Mon","value":5715},{"hour":"8am","weekday":"Mon","value":7080},{"hour":"9am","weekday":"Mon","value":8022},{"hour":"10am","weekday":"Mon","value":8446},{"hour":"11am","weekday":"Mon","value":9313},{"hour":"12am","weekday":"Mon","value":9011},{"hour":"1pm","weekday":"Mon","value":8508},{"hour":"2pm","weekday":"Mon","value":8515},{"hour":"3pm","weekday":"Mon","value":8399},{"hour":"4pm","weekday":"Mon","value":8649},{"hour":"5pm","weekday":"Mon","value":7869},{"hour":"6pm","weekday":"Mon","value":6933},{"hour":"7pm","weekday":"Mon","value":5969},{"hour":"8pm","weekday":"Mon","value":5552},{"hour":"9pm","weekday":"Mon","value":5434},{"hour":"10pm","weekday":"Mon","value":5070},{"hour":"11pm","weekday":"Mon","value":4851},{"hour":"12pm","weekday":"Tue","value":4468},{"hour":"1am","weekday":"Tue","value":3306},{"hour":"2am","weekday":"Tue","value":3906},{"hour":"3am","weekday":"Tue","value":4413},{"hour":"4am","weekday":"Tue","value":4726},{"hour":"5am","weekday":"Tue","value":4584},{"hour":"6am","weekday":"Tue","value":5717},{"hour":"7am","weekday":"Tue","value":6504},{"hour":"8am","weekday":"Tue","value":8104},{"hour":"9am","weekday":"Tue","value":8813},{"hour":"10am","weekday":"Tue","value":9278},{"hour":"11am","weekday":"Tue","value":10425},{"hour":"12am","weekday":"Tue","value":10137},{"hour":"1pm","weekday":"Tue","value":9290},{"hour":"2pm","weekday":"Tue","value":9255},{"hour":"3pm","weekday":"Tue","value":9614},{"hour":"4pm","weekday":"Tue","value":9713},{"hour":"5pm","weekday":"Tue","value":9667},{"hour":"6pm","weekday":"Tue","value":8774},{"hour":"7pm","weekday":"Tue","value":8649},{"hour":"8pm","weekday":"Tue","value":9937},{"hour":"9pm","weekday":"Tue","value":10286},{"hour":"10pm","weekday":"Tue","value":9175},{"hour":"11pm","weekday":"Tue","value":8581},{"hour":"12pm","weekday":"Wed","value":8145},{"hour":"1am","weekday":"Wed","value":7177},{"hour":"2am","weekday":"Wed","value":5657},{"hour":"3am","weekday":"Wed","value":6802},{"hour":"4am","weekday":"Wed","value":8159},{"hour":"5am","weekday":"Wed","value":8449},{"hour":"6am","weekday":"Wed","value":9453},{"hour":"7am","weekday":"Wed","value":9947},{"hour":"8am","weekday":"Wed","value":11471},{"hour":"9am","weekday":"Wed","value":12492},{"hour":"10am","weekday":"Wed","value":9388},{"hour":"11am","weekday":"Wed","value":9928},{"hour":"12am","weekday":"Wed","value":9644},{"hour":"1pm","weekday":"Wed","value":9034},{"hour":"2pm","weekday":"Wed","value":8964},{"hour":"3pm","weekday":"Wed","value":9069},{"hour":"4pm","weekday":"Wed","value":8898},{"hour":"5pm","weekday":"Wed","value":8322},{"hour":"6pm","weekday":"Wed","value":6909},{"hour":"7pm","weekday":"Wed","value":5810},{"hour":"8pm","weekday":"Wed","value":5151},{"hour":"9pm","weekday":"Wed","value":4911},{"hour":"10pm","weekday":"Wed","value":4487},{"hour":"11pm","weekday":"Wed","value":4118},{"hour":"12pm","weekday":"Thu","value":3689},{"hour":"1am","weekday":"Thu","value":3081},{"hour":"2am","weekday":"Thu","value":6525},{"hour":"3am","weekday":"Thu","value":6228},{"hour":"4am","weekday":"Thu","value":6917},{"hour":"5am","weekday":"Thu","value":6568},{"hour":"6am","weekday":"Thu","value":6405},{"hour":"7am","weekday":"Thu","value":8106},{"hour":"8am","weekday":"Thu","value":8542},{"hour":"9am","weekday":"Thu","value":8501},{"hour":"10am","weekday":"Thu","value":8802},{"hour":"11am","weekday":"Thu","value":9420},{"hour":"12am","weekday":"Thu","value":8966},{"hour":"1pm","weekday":"Thu","value":8135},{"hour":"2pm","weekday":"Thu","value":8224},{"hour":"3pm","weekday":"Thu","value":8387},{"hour":"4pm","weekday":"Thu","value":8218},{"hour":"5pm","weekday":"Thu","value":7641},{"hour":"6pm","weekday":"Thu","value":6469},{"hour":"7pm","weekday":"Thu","value":5441},{"hour":"8pm","weekday":"Thu","value":4952},{"hour":"9pm","weekday":"Thu","value":4643},{"hour":"10pm","weekday":"Thu","value":4393},{"hour":"11pm","weekday":"Thu","value":4017},{"hour":"12pm","weekday":"Fri","value":4022},{"hour":"1am","weekday":"Fri","value":3063},{"hour":"2am","weekday":"Fri","value":3638},{"hour":"3am","weekday":"Fri","value":3968},{"hour":"4am","weekday":"Fri","value":4070},{"hour":"5am","weekday":"Fri","value":4019},{"hour":"6am","weekday":"Fri","value":4548},{"hour":"7am","weekday":"Fri","value":5465},{"hour":"8am","weekday":"Fri","value":6909},{"hour":"9am","weekday":"Fri","value":7706},{"hour":"10am","weekday":"Fri","value":7867},{"hour":"11am","weekday":"Fri","value":8615},{"hour":"12am","weekday":"Fri","value":8218},{"hour":"1pm","weekday":"Fri","value":7604},{"hour":"2pm","weekday":"Fri","value":7429},{"hour":"3pm","weekday":"Fri","value":7488},{"hour":"4pm","weekday":"Fri","value":7493},{"hour":"5pm","weekday":"Fri","value":6998},{"hour":"6pm","weekday":"Fri","value":5941},{"hour":"7pm","weekday":"Fri","value":5068},{"hour":"8pm","weekday":"Fri","value":4636},{"hour":"9pm","weekday":"Fri","value":4241},{"hour":"10pm","weekday":"Fri","value":3858},{"hour":"11pm","weekday":"Fri","value":3833},{"hour":"12pm","weekday":"Sat","value":3503},{"hour":"1am","weekday":"Sat","value":2842},{"hour":"2am","weekday":"Sat","value":2808},{"hour":"3am","weekday":"Sat","value":2399},{"hour":"4am","weekday":"Sat","value":2280},{"hour":"5am","weekday":"Sat","value":2139},{"hour":"6am","weekday":"Sat","value":2527},{"hour":"7am","weekday":"Sat","value":2940},{"hour":"8am","weekday":"Sat","value":3066},{"hour":"9am","weekday":"Sat","value":3494},{"hour":"10am","weekday":"Sat","value":3287},{"hour":"11am","weekday":"Sat","value":3416},{"hour":"12am","weekday":"Sat","value":3432},{"hour":"1pm","weekday":"Sat","value":3523},{"hour":"2pm","weekday":"Sat","value":3542},{"hour":"3pm","weekday":"Sat","value":3347},{"hour":"4pm","weekday":"Sat","value":3292},{"hour":"5pm","weekday":"Sat","value":3416},{"hour":"6pm","weekday":"Sat","value":3131},{"hour":"7pm","weekday":"Sat","value":3057},{"hour":"8pm","weekday":"Sat","value":3227},{"hour":"9pm","weekday":"Sat","value":3060},{"hour":"10pm","weekday":"Sat","value":2855},{"hour":"11pm","weekday":"Sat","value":2625}]',
            maleDemoData: '[{"age":"18-24","research":"40"},{"age":"25-36","research":"70"},{"age":"37-50","research":"25"},{"age":"50+","research":"15"}]',
            femaleDemoData: '[{"age":"18-24","research":"75"},{"age":"25-36","research":"60"},{"age":"37-50","research":"25"},{"age":"50+","research":"15"}]',
        }
    }

    render() {
        return (
            <Wrapper>
                <div className="icz-row">
                    <div className="icz-sectioncardwrapper w-100">
                        <div className="icz-sectioncard d-flex flex-row flex-wrap">
                            <Col sm={12} lg={6} className="icz-cardheader d-flex flex-column align-items-start">
                                <Col className="icz-cardtitle">
                                    Audience Distribution By Country
                                </Col>
                                {/* <CountryChart chart_id="country_audience_distribution" chart_class="icz-sectionchart" /> */}
                            </Col>
                            <Col sm={12} lg={6} className="icz-cardheader d-flex flex-column align-items-start">
                                <Col className="icz-cardtitle">
                                    By City
                                </Col>
                                {/* <CountryChart chart_id="city_audience_distribution" chart_class="icz-sectionchart" /> */}
                            </Col>
                        </div>
                    </div>
                </div>
                <div className="icz-row">
                    <div className="icz-sectioncardwrapper w-100">
                        <div className="icz-sectioncard d-flex flex-row flex-wrap">
                            <Col sm={12} className="icz-cardheader d-flex flex-column align-items-start">
                                <div className="icz-sectiontitle">
                                    Audience Distribution
                                </div>
                            </Col>
                            <Col sm={12} lg={6} className="d-flex flex-column align-items-start">
                                <div className="icz-cardheader">
                                    <Col className="icz-cardtitle">
                                        By Country
                                    </Col>
                                </div>
                                <div className="w-100 p-20">
                                    {/* <CountryChart chart_id="country_audience_distribution" chart_class="icz-sectionchart" /> */}
                                </div>
                            </Col>
                            <Col sm={12} lg={6} className="d-flex flex-column align-items-start">
                                <div className="icz-cardheader">
                                    <Col className="icz-cardtitle">
                                        By City
                                    </Col>
                                </div>
                                <div className="w-100 p-20">
                                    {/* <CountryChart chart_id="city_audience_distribution" chart_class="icz-sectionchart" /> */}
                                </div>
                            </Col>
                        </div>
                    </div>
                </div>
                <div className="icz-row">
                    <Col className="icz-sectioncardwrapper" sm={12}>
                        <div className="icz-sectioncard">
                            <div className="icz-cardheader">
                                <Col className="icz-cardtitle">
                                    Audience Activity Trend
                                </Col>
                            </div>
                            <div className="">
                                <HeatMap chart_id="audience_activity" chart_class="icz-sectionchart" graph-data={this.state.activity} />
                            </div>
                        </div>
                    </Col>
                </div>
            </Wrapper>
        )
    }
}
