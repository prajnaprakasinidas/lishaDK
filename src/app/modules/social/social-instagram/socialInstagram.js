import Wrapper from "../../../helpers/wrapper";
import '../social.scss'
import InstagramSectionTab from "./instagramSectionTab";

const SocialInstagram = () => {
    return (
        <Wrapper>
            <div className="icz-datacontainer">
                <div className="icz-sectiontabscontainer">
                    <div className="icz-tabscontrols">
                        <InstagramSectionTab />
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default SocialInstagram;