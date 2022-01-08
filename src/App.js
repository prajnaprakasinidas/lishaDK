import Header from './app/layout/header/header';
import Sidebar from './app/layout/sidebar/sidebar';
import { RouteUrls } from './app/helpers/routeUrls';
import 'animate.css';
import './App.scss';
import Footer from './app/layout/footer/footer';
function App() {
  // if(!document.referrer.includes('analytics.icogz.com')){window.location.href = 'https://analytics.icogz.com'}

  if (window.location.href.includes('ri.icogz.com')) { window.location.href = 'https://ri.icogz.com' }
  if (window.location.href.includes('8051/ecom/customer/')) { window.location.href = 'https://draft.icogz.com/react/' }
  if (window.location.href.includes('Dashboard_Main/Dev/social_youtube.aspx')) { window.location.href = 'https://draft.icogz.com/react/' }
  if (window.location.href.includes('dashboard_main/dev/dashboard_crm.html')) { window.location.href = 'https://draft.icogz.com/react/' }
  if (window.location.href.includes('Dashboard_Main/Dev/Website_Overview.aspx')) { window.location.href = 'https://draft.icogz.com/react/' }

  return (
    <div>
      <Header />
      <main className="icz-wrapper">
        <Sidebar />
        <div className="icz-maincontainer">
          <div className="icz-pagewrapper">
            <RouteUrls />
          </div>
          <div className="icz-footercontainer">
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
