import { Outlet } from "react-router-dom";
import NavBar from "./assets/NavBar";
import Footer from "./assets/Footer";

export default function Layout() {
  return (
    <>
      <NavBar logo="/img/logo.png" />
      <Outlet />
      <Footer />
    </>
  );
}
