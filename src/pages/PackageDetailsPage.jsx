import FlightDetails from "../sections/PackageDetails/FlightDetails"
import Hero from "../sections/PackageDetails/Hero"
import HotelDetails from "../sections/PackageDetails/HotelDetails"
import Transport from "../sections/PackageDetails/Transport"
import Ziyarat from "../sections/PackageDetails/Ziyarat"


const PackageDetailsPage = () => {
  return (
    <div>
        <Hero/>
        <HotelDetails/>
        <FlightDetails/>
        <Ziyarat/>
        <Transport/>
    </div>
  )
}

export default PackageDetailsPage