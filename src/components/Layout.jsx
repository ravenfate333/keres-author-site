import { Outlet } from "react-router-dom";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <MobileNav />
      <DesktopNav />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;