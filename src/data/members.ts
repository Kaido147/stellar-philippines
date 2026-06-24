export interface Member {
  id: string;
  name: string;
  role: string;
  city: string;
  bio: string;
  skills: string[];
  github?: string;
  twitter?: string;
}

export const members: Member[] = [
  {
    id: "1",
    name: "Maria Santos",
    role: "Core Organizer",
    city: "Manila",
    bio: "Full-stack developer passionate about DeFi and financial inclusion. Leads Soroban workshops across Luzon.",
    skills: ["Rust", "Soroban", "React"],
    github: "mariasantos",
    twitter: "mariasantos_dev",
  },
  {
    id: "2",
    name: "Juan Dela Cruz",
    role: "Payments Lead",
    city: "Cebu",
    bio: "Fintech engineer building cross-border payment rails. Previously worked on remittance products for OFW families.",
    skills: ["Anchors", "SEP-24", "Node.js"],
    github: "juandc",
  },
  {
    id: "3",
    name: "Angela Reyes",
    role: "Community Lead",
    city: "Davao",
    bio: "Developer advocate and event organizer. Runs monthly meetups and mentors first-time Stellar builders.",
    skills: ["Community", "Technical Writing", "Python"],
    twitter: "angelareyes_ph",
  },
  {
    id: "4",
    name: "Carlos Mendoza",
    role: "Smart Contract Dev",
    city: "Manila",
    bio: "Rust developer focused on Soroban smart contracts for tokenization and on-chain governance.",
    skills: ["Rust", "Soroban", "Token Standards"],
    github: "cmendoza",
  },
  {
    id: "5",
    name: "Patricia Lim",
    role: "Designer & Builder",
    city: "Quezon City",
    bio: "UX designer turned dApp builder. Creates accessible wallet experiences for Filipino users.",
    skills: ["UI/UX", "JavaScript", "Wallets"],
    twitter: "patlim_design",
  },
  {
    id: "6",
    name: "Rafael Torres",
    role: "Infrastructure",
    city: "Iloilo",
    bio: "DevOps engineer running Horizon and RPC nodes. Helps teams deploy and monitor Stellar infrastructure.",
    skills: ["Horizon", "RPC", "DevOps"],
    github: "rtorres",
  },
  {
    id: "7",
    name: "Sofia Garcia",
    role: "Grant Writer",
    city: "Makati",
    bio: "Connects Filipino projects with Stellar grants and the Enterprise Fund. Background in startup fundraising.",
    skills: ["Grants", "Startups", "Strategy"],
  },
  {
    id: "8",
    name: "Miguel Fernandez",
    role: "Student Ambassador",
    city: "Baguio",
    bio: "CS student at UP Baguio introducing classmates to blockchain development through Stellar Quest.",
    skills: ["Stellar Quest", "Teaching", "JavaScript"],
    github: "mfernandez",
  },
];
