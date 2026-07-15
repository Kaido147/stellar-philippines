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
    "id": "ln1q4rC_CSntqFe5",
    "title": "APAC Stellar Hackathon Demo Day",
    "image": "https://files.risein.com/programs/f3kj4-cohort-1784030779796jpeg",
    "date": "July 17, 2026",
    "link": "https://www.risein.com/programs/apac-stellar-hackathon-demo-day",
    "location": "Taguig City, Philippines",
    "status": "upcoming",
    "time": "04:00 PM",
    "type": "Hackathon",
    "desc": "Join this exciting advanced level Stellar ecosystem tracking program. Organized via Rise In."
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
  },
  {
    "id": "y7v3YIfsz5zIaPuHS",
    "title": "APAC Stellar Hackathon",
    "image": "https://files.risein.com/programs/co8um-cohort-1778746738617png",
    "date": "May 13, 2026",
    "link": "https://www.risein.com/programs/apac-stellar-hackathon",
    "location": "Online",
    "status": "upcoming",
    "time": "05:00 PM",
    "type": "Hackathon",
    "desc": "Join this exciting intermediate level Stellar ecosystem tracking program. Organized via Rise In."
  }
];
