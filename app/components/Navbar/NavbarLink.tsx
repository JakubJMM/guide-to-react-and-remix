import { Link } from "@remix-run/react";

type NavbarLinkProps = {
  to: string;
  children: React.ReactNode;
};

const NavbarLink = ({ children, to }: NavbarLinkProps) => {
  return (
    <Link
      to={to}
      className="group mt-1 flex items-center rounded px-2 py-1 font-semibold text-white hover:bg-neutral-900 md:mt-0 md:ml-2 md:first-of-type:ml-0"
    >
      {children}
    </Link>
  );
};

export default NavbarLink;
