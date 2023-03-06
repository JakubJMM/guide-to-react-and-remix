import { Link } from "@remix-run/react";
import { useState } from "react";
import { FaLaptopCode } from "react-icons/fa";
import NavbarLink from "./NavbarLink";
import NavItemIcon from "./NavItemIcon";
import {
  GiCalculator,
  GiChecklist,
  GiKeyboard,
  GiPaintBrush,
  GiToolbox,
  GiAchievement,
} from "react-icons/gi";
import HamburgerButton from "./HamburgerButton";
import remixIcon from "~/assets/svg/remix-logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-neutral-900 lg:flex lg:justify-between">
      <div className="flex items-center justify-between px-4 py-3">
        <Link to="/">
          <FaLaptopCode color="#ffffff" size="4rem" />
        </Link>
        <HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div
        className={`px-2 pt-2 pb-4 ${
          isOpen ? "block" : "hidden"
        } lg:flex lg:items-center`}
      >
        <NavbarLink to="/your-first-component">
          <NavItemIcon>
            <GiAchievement className="fill-white" />
          </NavItemIcon>
          First Component
        </NavbarLink>
        <NavbarLink to="/styling">
          <NavItemIcon>
            <GiPaintBrush />
          </NavItemIcon>
          Styling
        </NavbarLink>
        <NavbarLink to="/custom-components">
          <NavItemIcon>
            <GiToolbox className="fill-white" />
          </NavItemIcon>
          Custom Components
        </NavbarLink>
        <NavbarLink to="/counter">
          <NavItemIcon>
            <GiCalculator className="fill-white" />
          </NavItemIcon>
          Counter
        </NavbarLink>
        <NavbarLink to="/handle-user-input">
          <NavItemIcon>
            <GiKeyboard className="fill-white" />
          </NavItemIcon>
          Handle User Input
        </NavbarLink>
        <NavbarLink to="/todo-app">
          <NavItemIcon>
            <GiChecklist className="fill-white" />
          </NavItemIcon>
          ToDo App
        </NavbarLink>
        <NavbarLink to="/remix">
          <NavItemIcon>
            <img src={remixIcon} className="h-auto w-3" alt="Remix icon" />
          </NavItemIcon>
          Remix
        </NavbarLink>
      </div>
    </header>
  );
};

export default Navbar;
