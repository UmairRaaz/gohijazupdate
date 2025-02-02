import { Outlet } from "react-router-dom";
import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen">
      <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
