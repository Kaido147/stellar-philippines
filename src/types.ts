export type TabId = "learn" | "events" | "blogs" | "members";

export interface Tab {
  id: TabId;
  label: string;
}
