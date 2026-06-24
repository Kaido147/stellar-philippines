import type { Tab, TabId } from "../types";
import "./TabNav.css";

export const tabs: Tab[] = [
  { id: "learn", label: "Learn" },
  { id: "events", label: "Events" },
  { id: "blogs", label: "Blogs" },
  { id: "members", label: "Members" },
];

interface TabNavProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
}

export default function TabNav({ activeTab, onTabChange }: TabNavProps) {
  return (
    <nav className="tab-nav" aria-label="Site sections">
      <div className="tab-nav-track">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`tab-nav-item ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => onTabChange(tab.id)}
            aria-selected={activeTab === tab.id}
            role="tab"
          >
            {tab.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
