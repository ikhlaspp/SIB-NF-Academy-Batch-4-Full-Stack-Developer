import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout() {
  return (
    <div className="bg-light min-vh-100 d-flex flex-column">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
