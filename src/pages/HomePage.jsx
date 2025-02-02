
import BackToTop from '../components/BackToTop'
import AirwaysAccommodation from '../sections/AirwaysAccommodation'
import BlogsSection from '../sections/BlogsSection'
import DiscoverLandmarks from '../sections/DiscoverLandmarks'
import ExclusivePackages from '../sections/ExclusivePackages'
import Hero from '../sections/Hero'
import SpecialPackages from '../sections/SpecialPackages'
import TopTravelAgencies from '../sections/TopTravelAgencies'

const HomePage = () => {
  return (
    <div>
        <Hero/>
        <SpecialPackages/>
        <BlogsSection/>
        <TopTravelAgencies/>
        <BackToTop/>
        {/* <ExclusivePackages/>
        <DiscoverLandmarks/>
        <AirwaysAccommodation/> */}
    </div>
  )
}

export default HomePage