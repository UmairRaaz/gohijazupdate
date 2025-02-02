import Layout from './pages/UserLayout';
import HomePage from './pages/HomePage';
// import FilterPackages from './pages/FilterPackages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllPackages from './pages/AllPackages';
// import PackageDetailPageUpdated from './pages/PackageDetailPageUpdated';
import AllHajjPackages from './pages/AllHajjPackages';
import AllUmrahPackages from './pages/AllUmrahPackages';
import AboutPage from './pages/AboutPage';
import PolicyPage from './pages/PolicyPage';
import Voucher from './pages/Voucher';
import CalendarApp from './components/Calendar/Calender';
import PackageCostCalculator from './components/PriceCalculator/PriceCalculator';
import TermsAndConditions from './pages/TermsAndCondition';
import NotFoundPage from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop'; // Import the ScrollToTop component
import BlogOne from './pages/Blogs/BlogOne';
// import HajjPackage from './components/HajjPackage';
import HajjPage from './pages/HajjPage';
import UmrahPage from './pages/UmrahPage';
import HajjUmrahGuide from './pages/HajjUmrahGuide';
import HajjGuide from './pages/HajjGuide';
import UmrahGuide from './pages/UmrahGuide';
import TourOperators from './pages/TourOperators';
import AgencyDeatailPage from './pages/AgencyDeatailPage';
import ContactUsPage from './pages/ContactUsPage';
import FAQPage from './pages/FAQPage';
import PrivacyAndPolicy from './pages/PrivacyAndPolicy';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* Add ScrollToTop here */}
      <Routes>
        {/* Use Layout for all pages */}
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/policy/:name" element={<PolicyPage />} />
          {/* <Route path="/package-detail/:id" element={<PackageDetailPageUpdated />} /> */}
          <Route path="/hajj-package-detail/:id" element={<HajjPage />} />
          <Route path="/umrah-package-detail/:id" element={<UmrahPage />} />
          <Route path="/guides/hajj-umrah" element={<HajjUmrahGuide />} />
          <Route path="/guides/hajj-guide" element={<HajjGuide />} />
          <Route path="/guides/umrah-guide" element={<UmrahGuide />} />
          <Route path="/tour-operators" element={<TourOperators />} />
          <Route path="/tour-operator/:id" element={<AgencyDeatailPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/faqs" element={<FAQPage/>} />
          <Route path="/privacyandpolicy" element={<PrivacyAndPolicy/>} />
          <Route path="/packages" element={<AllPackages />} />
          <Route path="/hajj-packages" element={<AllHajjPackages />} />
          <Route path="/umrah-packages" element={<AllUmrahPackages />} />
          <Route path="/terms&conditions" element={<TermsAndConditions />} />
          <Route path="/blogs/blogone" element={<BlogOne />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/voucher" element={<Voucher />} />
          <Route path="/calendar" element={<CalendarApp />} />
          <Route path="/packagecost" element={<PackageCostCalculator />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
