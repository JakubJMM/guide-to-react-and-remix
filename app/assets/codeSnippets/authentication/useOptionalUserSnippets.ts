export const navbarStarterCodeSnippet = `const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-neutral-800 md:flex md:justify-between">
      <div className="flex items-center justify-between px-4 py-3">
        <Link to="/">
          <FaLaptopCode color="#ffffff" size="4rem" />
        </Link>
        <HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div
        className={\`px-2 pt-2 pb-4 \${
          isOpen ? "block" : "hidden"
        } md:flex md:items-center\`}
      >
        <NavbarLink to="/your-first-component">
          <NavItemIcon>
            <GiAchievement className="fill-white" />
          </NavItemIcon>
          First Component
        </NavbarLink>

        {/* ...lots of links to different pages here... */}

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

export default Navbar;`;
