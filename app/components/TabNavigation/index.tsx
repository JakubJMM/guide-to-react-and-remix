import { ReactNode, useState } from "react";
import slugify from "~/utilityFunctions/slugify";

export interface Tab {
  label: string;
  content: ReactNode;
}

interface TabNavigationProps {
  tabs: Tab[];
}

const TabNavigation = ({ tabs }: TabNavigationProps) => {
  const [selectedTab, setSelectedTab] = useState<string | null>(
    slugify(tabs[0].label)
  );

  const handleClick = (slugifiedLabel: string) => {
    setSelectedTab(slugifiedLabel);
  };

  return (
    <>
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul
          className="-mb-px flex flex-wrap text-center text-sm font-medium"
          id="myTab"
          data-tabs-toggle="#myTabContent"
          role="tablist"
        >
          {tabs.map(({ label }) => {
            const slugifiedLabel = slugify(label);
            const isSelected = selectedTab === slugifiedLabel;

            return (
              <li key={slugifiedLabel} className="mr-2" role="presentation">
                <button
                  className={`inline-block rounded-t-lg border-b-2 p-4 ${
                    isSelected ? "border-white" : "border-transparent"
                  }`}
                  id={`${slugifiedLabel}-tab`}
                  data-tabs-target={`#${slugifiedLabel}`}
                  type="button"
                  role="tab"
                  aria-controls={slugifiedLabel}
                  aria-selected={isSelected}
                  onClick={() => handleClick(slugifiedLabel)}
                >
                  {label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div id="myTabContent">
        {tabs.map(({ label, content }) => {
          const slugifiedLabel = slugify(label);
          const isSelected = selectedTab === slugifiedLabel;

          return (
            <div
              key={slugifiedLabel}
              className={`p-4 ${isSelected ? "block" : "hidden"}`}
              id={slugifiedLabel}
              role="tabpanel"
              aria-labelledby={`${slugifiedLabel}-tab`}
            >
              {content}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TabNavigation;
