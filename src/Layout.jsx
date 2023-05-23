import { Outlet } from "react-router-dom";
import NavBar from "./assets/NavBar";
import Footer from "./assets/Footer";

export default function Layout() {
  return (
    <>
      <NavBar logo="/img/logo.png" />
      {/* <div className="hidden for-hidden-classes-only  bg-purple-50 bg-purple-900"></div> */}
      <Outlet />
      <Footer />
    </>
  );
}
