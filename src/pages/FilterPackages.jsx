import AirwaysAccommodation from "../sections/AirwaysAccommodation"
import DiscoverLandmarks from "../sections/DiscoverLandmarks"
import ExclusivePackages from "../sections/ExclusivePackages"
import Filter from "../sections/Filter"
import Hero from "../sections/Hero"


const FilterPackages = () => {
  return (
    <div>
        <Hero/>
        <Filter/>
        <ExclusivePackages/>
        <DiscoverLandmarks/>
        <AirwaysAccommodation/>
    </div>
  )
}

export default FilterPackages