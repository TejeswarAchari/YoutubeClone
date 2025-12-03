// Source - https://stackoverflow.com/q
// Posted by EMILO, modified by community. See post 'Timeline' for change history
// Retrieved 2025-11-07, License - CC BY-SA 4.0

var nameList = [
  // Boys
  'Teja', 'Sai', 'Charan', 'Karthik', 'Vamsi', 'Sravan', 'Rajesh', 'Manoj',
  'Mahesh', 'Ravi', 'Ajay', 'Suresh', 'Harsha', 'Surya', 'Rakesh', 'Vinay',
  'Krishna', 'Arjun', 'Pavan', 'Sandeep', 'Rohith', 'Naveen', 'Praveen',
  'Chaitanya', 'Vijay', 'Raghu', 'Deepak', 'Anil', 'Naresh', 'Santosh',
  'Vikram', 'Kiran', 'Lokesh', 'Nithin', 'Gopi', 'Shankar', 'Anand',
  'Madhav', 'Kalyan', 'Srinivas', 'Nikhil', 'Prem', 'Sudheer', 'Rohit',
  'Bharath', 'Raju', 'Dinesh', 'Naveen', 'Venu', 'Raghav', 'VenuGopal',
  'Balaji', 'RaviTeja', 'Chintu', 'Sunny', 'Lucky', 'Mani', 'Prashanth',
  'Abhi', 'Yashwanth', 'Chandu', 'Tarun', 'Nani', 'Varun', 'Ramesh',
  'Jagadeesh', 'Ajith', 'Shiva', 'Ragul', 'Koushik', 'Dileep', 'Lohith',
  'Rithvik', 'Aravind', 'Deepu', 'Venky', 'SaiKiran', 'Vivek', 'Subbu',
  'Sandy', 'Harish', 'Raj', "Chidvilas",'Umesh','Prudhvi','Tejeswar Achari', 'Suhas', 'Aditya', 'RaviKiran',
  'Vinod', 'Gowtham', 'Balu', 'Akash', 'Srinath', 'Raghava', 'Nagaraj',
  'Ranjith', 'Mahendra', 'Chinna', 'Pintu',

  // Girls
  'Siri','Bhargavi','Vasantha', 'Bhavana', 'Navya', 'Anjali', 'Swathi', 'Nandini', 'Mounika',
  'Divya', 'Harika', 'Soumya', 'Sandhya', 'Sushma', 'Pooja', 'Meghana',
  'Sneha', 'Tejaswi', 'Varsha', 'Keerthi', 'Sindhu', 'Deepthi', 'Lahari',
  'Bindu', 'Manasa',,'anusha','anusha', 'Harini', 'Pranitha', 'Sravani', 'Yamini', 'Priya',
  'Ritika', 'Chandana', 'Shreya', 'Aishwarya', 'Lavanya', 'Anusha',
  'Bhavani', 'Preethi', 'Rani', 'Suhasini', 'Vaishnavi', 'Kavya', 'Niharika',
  'Anitha', 'Kusuma', 'Alekhya', 'Meena', 'Radha', 'Pavani', 'Revathi',
  'Malathi', 'Indu', 'Sowjanya', 'SriLekha', 'Harshita', 'Sita', 'Gowri',
  'Aaradhya', 'Sruthi', 'Padma', 'Tulasi', 'Chaitra','anusha',,'anusha','anusha','anusha','anusha','anusha',

  // Unisex / Modern Nicknames
  'Teju', 'Lucky', 'Cherry', 'Bunny', 'Vicky', 'Chaitu', 'Ajju', 'Sandy',
  'Pinky', 'Chinni', 'Lilly', 'Sunny', 'Sweety', 'Tanu', 'Honey', 'Renu',
  'Kittu', 'Raji', 'Deepu', 'Kannu', 'Maddy', 'Chinnu', 'Kavvu', 'Baby',
  'Tillu', 'Kannu', 'Chiku', 'Pandu', 'Gopi', 'Monu', 'Vinnu', 'Mani',
  'Pappi', 'Appu', 'Ricky', 'Rishu', 'Lallu', 'Bittu', 'Pinky', 'Sweety',
  'Kittu', 'Chintu', 'Pandu'
];

export function generate() {
var finalName = nameList[Math.floor(Math.random() * nameList.length)];
      return finalName;
    };

// Source - https://stackoverflow.com/a
// Posted by csharptest.net, modified by community. See post 'Timeline' for change history
// Retrieved 2025-11-07, License - CC BY-SA 4.0

export function makeRandomMessage() {
  const openings = [
    "Wow", "Awesome", "Superb", "Amazing", "Fantastic", "Loved it",
    "Mind-blowing", "Too good", "So emotional", "Just wow", "What a vibe",
    "Masterpiece", "🔥🔥🔥", "❤️❤️", "Speechless", "Legendary"
  ];

  const middles = [
    "song", "video", "performance", "music", "lyrics", "composition",
    "direction", "cinematography", "acting", "editing", "story", "bgm",
    "vibes", "scene", "dialogues", "camera work", "feel", "melody"
  ];

  const endings = [
    "bro", "sir", "guys", "team", "everyone", "man", "boss", "idol",
    "King", "legend", "champ", "Rockstar", "hero", "Queen", "Icon"
  ];

  const extras = [
    "🔥🔥", "❤️❤️", "💥", "💯", "🥵", "😭", "😍", "😎", "🤯", "🙌", "👏👏", "✨",
    "😢", "🤩", "🥹"
  ];

  const patterns = [
    () => `${openings.random()} ${middles.random()} ${extras.random()}`,
    () => `${openings.random()} ${middles.random()} by ${endings.random()} ${extras.random()}`,
    () => `${openings.random()} work ${extras.random()}`,
    () => `This ${middles.random()} gave me goosebumps ${extras.random()}`,
    () => `I'm addicted to this ${middles.random()} 😍`,
    () => `${endings.random()} never disappoints ${extras.random()}`,
    () => `Who else is watching this in ${new Date().getFullYear()}? 😍`,
    () => `${openings.random()} ❤️`,
    () => `Just wow... ${extras.random()}`
  ];

  // helper for random array element
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  };

  // pick random pattern
  return patterns.random()();
}

