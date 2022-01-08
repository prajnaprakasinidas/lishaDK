import IconHome from '../../../assets/images/icons/homeIcon';
import IconAryabot from '../../../assets/images/icons/aryabot';
import IconPerformance from '../../../assets/images/icons/performanceIcon';
import IconUserGroup from '../../../assets/images/icons/usergroupIcon';
import IconVideo from '../../../assets/images/icons/videoIcon';
import IconWebsite from '../../../assets/images/icons/websiteIcon';
import IconCRM from '../../../assets/images/icons/crmIcon';
import IconHashtag from '../../../assets/images/icons/hashtagIcon';
import IconComparison from '../../../assets/images/icons/comparisonIcon';
import IconReviews from '../../../assets/images/icons/reviewsIcon';
import IconTag from '../../../assets/images/icons/tagIcon';
import IconCart from '../../../assets/images/icons/cartIcon';
import IconStore from '../../../assets/images/icons/storeIcon';


var sidebarIconClass = "icz-sidebaricon";

export const SideBarData = [{
        id: 1,
        title: 'Dashboard',
        exact: true,
        path: '/',
        icon: < IconHome className = { sidebarIconClass }
        />,
    },
    {   
        id: 2,
        title: 'Performance',
        exact: true,
        path: '/performance',
        icon: < IconPerformance className = { sidebarIconClass }
        />,
    },
    {   
        id: 3,
        title: 'Social',
        exact: true,
        path: '/social',
        icon: < IconUserGroup className = { sidebarIconClass }
        />,
    },
    {   
        id: 4,
        title: 'Video',
        exact: true,
        path: '/video',
        icon: < IconVideo className = { sidebarIconClass }
        />,
    },
    {
        id: 5,
        title: 'Website',
        exact: true,
        path: '/website',
        icon: < IconWebsite className = { sidebarIconClass }
        />,
    },
    {   
        id: 6,
        title: 'ECOM',
        exact: true,
        path: '/ecom',
        icon: < IconCart className = { sidebarIconClass }
        />,
    },
    {   
        id: 7,
        title: 'RI',
        exact: true,
        path: '/ri',
        icon: < IconStore className = { sidebarIconClass }
        />,
    },
    {   
        id: 8,
        title: 'CRM',
        exact: true,
        path: '/crm',
        icon: < IconCRM className = { sidebarIconClass }
        />,
    },
    {   
        id: 9,
        title: 'Hashtag',
        exact: true,
        path: '/hashtags',
        icon: < IconHashtag className = { sidebarIconClass }
        />,
    },
    {   
        id: 10,
        title: 'Comparison',
        exact: true,
        path: '/comparison',
        icon: < IconComparison className = { sidebarIconClass }
        />,
    },
    {   
        id: 11,
        title: 'Reviews',
        exact: true,
        path: '/reviews',
        icon: < IconReviews className = { sidebarIconClass }
        />,
    },
    {   
        id: 12,
        title: 'Arya Bot',
        exact: true,
        path: '/aryabot',
        icon: < IconAryabot className = { sidebarIconClass }
        />,
    }
]