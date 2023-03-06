import { Link } from "@remix-run/react";

interface SidebarLinkProps {
  children: React.ReactNode;
  to: string;
}

const SidebarLink = ({ children, to }: SidebarLinkProps) => {
  return (
    <div className="mb-2">
      <Link className="text-sm text-neutral-300 hover:text-white" to={to}>
        {children}
      </Link>
    </div>
  );
};

export default SidebarLink;
