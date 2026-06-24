import TabNav from "./TabNav";
import Logo from "./Logo";
import type { TabId } from "../types";
import "./Header.css";

interface HeaderProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
}

export default function Header({ activeTab, onTabChange }: HeaderProps) {
  return (
    <header className="header">
      <div className="container header-inner">
        <button
          type="button"
          className="logo"
          onClick={() => onTabChange("learn")}
          aria-label="Stellar Philippines home"
        >
          <Logo variant="dark" />
        </button>

        <TabNav activeTab={activeTab} onTabChange={onTabChange} />

        <div className="header-actions">
          <a
            href="https://developers.stellar.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary header-cta"
          >
            Start building
          </a>
        </div>
      </div>
    </header>
  );
}
