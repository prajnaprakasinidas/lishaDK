import Wrapper from "../../../helpers/wrapper";
import '../social.scss'
import TwitterSectionTab from "./twitterSectionTab";

const SocialTwitter = () => {
    return (
        <Wrapper>
            <div className="icz-datacontainer">
                <div className="icz-sectiontabscontainer">
                    <div className="icz-tabscontrols">
                        <TwitterSectionTab />
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default SocialTwitter;