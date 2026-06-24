export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  type: "Workshop" | "Meetup" | "Hackathon" | "Webinar";
  desc: string;
  status: "upcoming" | "past";
}

export const events: Event[] = [
  {
    id: "1",
    title: "Intro to Soroban Smart Contracts",
    date: "July 12, 2026",
    time: "2:00 PM PHT",
    location: "Manila · Hybrid",
    type: "Workshop",
    desc: "Hands-on workshop covering Rust basics, Soroban SDK, and deploying your first contract to testnet.",
    status: "upcoming",
  },
  {
    id: "2",
    title: "Stellar PH Builder Meetup — Cebu",
    date: "July 26, 2026",
    time: "6:00 PM PHT",
    location: "Cebu City",
    type: "Meetup",
    desc: "Monthly community meetup for Filipino Stellar builders. Project demos, networking, and pizza.",
    status: "upcoming",
  },
  {
    id: "3",
    title: "Build on Stellar Hackathon 2026",
    date: "August 15–17, 2026",
    time: "All day",
    location: "Online · Global",
    type: "Hackathon",
    desc: "48-hour hackathon focused on remittance, DeFi, and real-world asset tokenization on Stellar.",
    status: "upcoming",
  },
  {
    id: "4",
    title: "Payments on Stellar: PH Remittance Deep Dive",
    date: "May 10, 2026",
    time: "3:00 PM PHT",
    location: "Online",
    type: "Webinar",
    desc: "Explored how Stellar anchors and SEP-24 enable fast PHP on/off ramps for cross-border payments.",
    status: "past",
  },
  {
    id: "5",
    title: "Stellar PH Launch Meetup",
    date: "April 5, 2026",
    time: "5:00 PM PHT",
    location: "BGC, Taguig",
    type: "Meetup",
    desc: "Kickoff event for the Stellar Philippines community — 80+ builders in attendance.",
    status: "past",
  },
];
