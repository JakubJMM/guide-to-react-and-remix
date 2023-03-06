import { Link } from "@remix-run/react";
import { FaLaptopCode } from "react-icons/fa";
import NavItemIcon from "../Navbar/NavItemIcon";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center bg-neutral-900 px-4 py-6">
      <NavItemIcon className="mr-12">
        <Link to="/">
          <FaLaptopCode className="h-auto w-12 fill-white" />
        </Link>
      </NavItemIcon>
      <p className="text-slate-400">React and Remix Introduction</p>
    </footer>
  );
};

export default Footer;
