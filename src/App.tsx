import { useCallback, useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LearnPage from "./pages/LearnPage";
import EventsPage from "./pages/EventsPage";
import BlogsPage from "./pages/BlogsPage";
import MembersPage from "./pages/MembersPage";
import type { TabId } from "./types";
import "./App.css";

const validTabs: TabId[] = ["learn", "events", "blogs", "members"];

function tabFromHash(): TabId {
  const hash = window.location.hash.replace("#", "") as TabId;
  return validTabs.includes(hash) ? hash : "learn";
}

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>(tabFromHash);

  const handleTabChange = useCallback((tab: TabId) => {
    setActiveTab(tab);
    window.history.replaceState(null, "", `#${tab}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const onHashChange = () => setActiveTab(tabFromHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <>
      <Header activeTab={activeTab} onTabChange={handleTabChange} />
      <main className="main-content" role="tabpanel">
        <div key={activeTab} className="tab-panel">
          {activeTab === "learn" && <LearnPage />}
          {activeTab === "events" && <EventsPage />}
          {activeTab === "blogs" && <BlogsPage />}
          {activeTab === "members" && <MembersPage />}
        </div>
      </main>
      <Footer />
    </>
  );
}
