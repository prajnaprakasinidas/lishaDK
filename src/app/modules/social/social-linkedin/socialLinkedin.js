import Wrapper from "../../../helpers/wrapper";
import '../social.scss'
import { LinkedinSectionTab } from './linkedinSectionTab'


const SocialLinkedin = () => {
    return (
        <Wrapper>
            <div className="icz-datacontainer">
                <div className="icz-sectiontabscontainer">
                    <div className="icz-tabscontrols">
                        <LinkedinSectionTab/>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}
export default SocialLinkedin;
