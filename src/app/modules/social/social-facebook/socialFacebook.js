import Wrapper from "../../../helpers/wrapper";
import '../social.scss'
import FacebookSectionTab from "./facebookSectionTab";

const SocialFacebook = () => {
    return (
        <Wrapper>
            <div className="icz-datacontainer">
                <div className="icz-sectiontabscontainer">
                    <div className="icz-tabscontrols">
                        <FacebookSectionTab />
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default SocialFacebook;