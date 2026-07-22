export interface CommunityEvent {
  id: string;
  title: string;
  image: string;
  date: string;
  link: string;
  location: string;
  status: 'upcoming' | 'past';
  time: string;
  type: 'Bootcamp' | 'Hackathon' | 'Workshop' | 'Challenge';
  desc: string;
}

export const events: CommunityEvent[] = [
  {
    "id": "h1KW1KD7qya-4plV",
    "title": "Build on Stellar Bootcamp - Dr. Yanga's Colleges Inc.",
    "image": "https://files.risein.com/programs/b0cet-cohort-1784647921014jpeg",
    "date": "July 21, 2026",
    "link": "https://www.risein.com/programs/build-on-stellar-dr-yangas-colleges-inc",
    "location": "Bocaue City, Philippines",
    "status": "upcoming",
    "time": "04:00 PM",
    "type": "Bootcamp",
    "desc": "Join this exciting beginner level Stellar ecosystem tracking program. Organized via Rise In."
  },
  {
    "id": "HrDjqCAA8yxTm1yn",
    "title": "Stellar Journey to Mastery: Monthly Builder Challenges - $20,000 Prize Pool 🎉",
    "image": "https://files.risein.com/programs/_3zmz-cohort-1780031137050png",
    "date": "May 31, 2026",
    "link": "https://www.risein.com/programs/stellar-journey-to-mastery-monthly-builder-challenges",
    "location": "Online",
    "status": "upcoming",
    "time": "06:30 PM",
    "type": "Challenge",
    "desc": "Join this exciting Stellar ecosystem tracking program. Organized via Rise In."
  }
];
