export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tag: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Getting Started with Soroban: A Filipino Developer's Guide",
    excerpt:
      "Everything you need to write, test, and deploy your first smart contract on Stellar — from setup to mainnet readiness.",
    author: "Maria Santos",
    date: "June 18, 2026",
    readTime: "8 min read",
    category: "Tutorial",
    tag: "Smart Contracts",
  },
  {
    id: "2",
    title: "Why the Philippines Is Perfect for Stellar-Powered Remittances",
    excerpt:
      "With $37B+ in annual remittances, Filipino builders have a massive opportunity to ship payment solutions on Stellar.",
    author: "Juan Dela Cruz",
    date: "June 10, 2026",
    readTime: "5 min read",
    category: "Insights",
    tag: "Payments",
  },
  {
    id: "3",
    title: "Building a PHP Anchor: Lessons from Our Testnet Deployment",
    excerpt:
      "A technical walkthrough of setting up a fiat on-ramp for Philippine peso using SEP-24 and the Anchor Platform.",
    author: "Angela Reyes",
    date: "May 28, 2026",
    readTime: "12 min read",
    category: "Technical",
    tag: "Anchors",
  },
  {
    id: "4",
    title: "Stellar Quest: The Fastest Way to Learn the Network",
    excerpt:
      "Interactive quests that teach accounts, transactions, and assets — perfect for onboarding new PH community members.",
    author: "Stellar PH Team",
    date: "May 15, 2026",
    readTime: "4 min read",
    category: "Guide",
    tag: "Learning",
  },
  {
    id: "5",
    title: "Recap: Stellar PH Launch Meetup in BGC",
    excerpt:
      "Highlights from our first community event — project demos, grant opportunities, and what's next for the chapter.",
    author: "Stellar PH Team",
    date: "April 8, 2026",
    readTime: "6 min read",
    category: "Community",
    tag: "Events",
  },
  {
    id: "6",
    title: "Tokenizing Real-World Assets on Stellar: A Primer",
    excerpt:
      "How Filipino fintech teams can issue and manage tokenized assets — from stablecoins to treasury-backed tokens.",
    author: "Carlos Mendoza",
    date: "March 22, 2026",
    readTime: "10 min read",
    category: "Technical",
    tag: "Tokenization",
  },
];
