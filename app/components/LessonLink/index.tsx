import { Link, useLocation } from "@remix-run/react";
import { useState, useEffect } from "react";
import Xarrow from "react-xarrows";

interface RemixLessonLinkProps {
  children: React.ReactNode;
  className?: string;
  connectTo?: string;
  to: string;
}

const LessonLink = ({
  children,
  className = "",
  connectTo,
  to,
}: RemixLessonLinkProps) => {
  const [showConnector, setShowConnector] = useState(false);
  const location = useLocation();
  const getCurrentRoute = () => {
    const lastSlashIndex = location.pathname.lastIndexOf("/");
    return location.pathname.substring(lastSlashIndex + 1);
  };
  const currentRoute = getCurrentRoute();
  const isOnCurrentRoute = currentRoute === to;

  // Xarrow throws error with SSR, so
  // Wait until after client-side hydration to show
  useEffect(() => {
    setShowConnector(true);
  }, []);

  if (!showConnector) {
    // Don't show anything until UI renders
    return null;
  }

  return (
    <>
      <Link
        className={`m-2 flex items-center justify-center rounded-2xl px-3 py-2 text-center text-xs uppercase leading-relaxed tracking-wide text-neutral-900 ${
          isOnCurrentRoute ? "bg-white" : "bg-neutral-400"
        } last-of-type:mr-0 hover:bg-white ${className}`}
        to={to}
        id={to}
      >
        {children}
      </Link>
      {showConnector && connectTo ? (
        <Xarrow
          start={to}
          end={connectTo}
          showHead={false}
          color="rgb(163 163 163)"
        />
      ) : null}
    </>
  );
};

export default LessonLink;
