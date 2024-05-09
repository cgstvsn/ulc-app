const data = [
  {
    id: 1,
    title: "2024 Generic GSD Truck",
    description:
      "Tundwa vewy pwetty buy now or we will sink the state of florida",
    creatorName: "GSD Modifications",
    creatorLink: "https://discord.gg/Atwt5nxaCV",
    price: 2499,
    image: "https://i.gyazo.com/8e377cc86c379fd5aecfd7acd096c31f.png",
    url: "https://store.gsdmods.com/package/5939009",
    isPack: false,
    features: [
      "park pattern",
      "takedowns",
      "scene lights",
      "cruise lights",
      "brake extras",
    ],
  },
  {
    id: 2,
    title: "2013 Generic GSD SUV K9",
    description: "Expwower vewy cool make sure to buy and il be happy",
    creatorName: "GSD Modifications",
    creatorLink: "https://discord.gg/Atwt5nxaCV",
    price: 2499,
    image: "https://i.gyazo.com/09b85bbdf963cad214cd35402016a154.png",
    url: "https://store.gsdmods.com/package/5987218",
    isPack: false,
    features: [
      "park pattern",
      "takedowns",
      "scene lights",
      "cruise lights",
      "brake extras",
    ],
  },
  {
    id: 3,
    title: "2018 Generic Veteran's day SUV",
    description: "Ta-hoe is very Veteran's ee buy now to support charity",
    creatorName: "GSD Modifications",
    creatorLink: "https://discord.gg/Atwt5nxaCV",
    price: 499,
    image: "https://i.gyazo.com/bc1a4f765f4f4b493413144159f31829.png",
    url: "https://store.gsdmods.com/package/5990004",
    isPack: false,
    features: ["takedowns", "scene lights", "cruise lights", "brake extras"],
  },
  {
    id: 4,
    title: "2020 ULC FPIU",
    description:
      "This is one of the hottest FPIUs around, using one of the newest scripts out there. The vehicle comes standard with a custom interior, full cage, full trunk layout, dual-stage steady burn lights, and custom lighting setup. The ULC for the vehicle is included in the file along with the ULC resource info. ",
    creatorName: "Sheepdog Development",
    creatorLink: "https://discord.gg/sheepdogdev",
    price: 1000,
    image: "https://i.imgur.com/Z9SJw34.jpg",
    url: "https://sheepdogdev.net/products/2020-sheepdog-fpiu",
    isPack: false,
    features: ["stage buttons", "park pattern", "cruise lights"],
  },
  {
    id: 6,
    title: "Sheepdog Development FHP Pack",
    description:
      "Discover the ultimate Florida Highway Patrol experience with our all-inclusive pack!",
    creatorName: "Sheepdog Development",
    creatorLink: "https://discord.gg/sheepdogdev",
    price: 4499,
    image: "https://i.imgur.com/oCgGlhK.png",
    url: "https://sheepdogdev.net/products/2020-sheepdog-fpiu",
    isPack: false,
    features: ["stage buttons", "park pattern", "cruise lights"],
  },
  {
    id: 7,
    title: "Miami Dade Charger Pack",
    description: "Detailed and accurate replicas of 2018 Miami Dade Chargers",
    creatorName: "Blackcloud",
    creatorLink: "https://discord.gg/75fZzwHvek",
    price: 5000,
    image: "https://i.imgur.com/OZiKq91.png",
    url: "https://discord.gg/75fZzwHvek",
    isPack: true,
    features: ["stage buttons", "park pattern", "takedowns"],
  },
  {
    id: 8,
    title: "Whelen Dodge Ram 1500 Big-Horn",
    description: "A Big-horn outfitted with a slicktop whelen package.",
    creatorName: "Sova Modifcations / Phoenix Development",
    creatorLink: "https://discord.com/invite/swBn5B5FSQ",
    price: 1000,
    image: "https://i.imgur.com/6lYEVai.jpeg",
    url: "https://discord.com/invite/swBn5B5FSQ",
    isPack: false,
    features: ["park pattern", "horn pattern"],
  },
  {
    id: 9,
    title: "Los Santos 2023 Mini Pack",
    description:
      "Pack featuring a 2023 Charger and Tahoe outfitted with Federal Signal lighting including a Valor lightbar and Arges spotlight.",
    creatorName: "Preston",
    creatorLink: "https://discord.gg/JJbgME3Rc4",
    price: 5500,
    image: "https://i.imgur.com/AWihlBu.jpeg",
    url: "https://discord.gg/JJbgME3Rc4",
    isPack: true,
    features: [
      "park pattern",
      "cruise lights",
      "scene lights",
      "stage buttons",
    ],
  },
  {
    id: 10,
    title: "LEO 1000 Superbike",
    description:
      "A superbike with red/blue & blue/white lighting options and multi-livery support.",
    creatorName: "Medic909",
    creatorLink: "https://discord.gg/code3development",
    price: 2500,
    image: "https://i.imgur.com/URdlhF5.jpeg",
    url: "https://discord.gg/code3development",
    isPack: false,
    features: ["cruise lights", "takedowns"],
  },
  {
    id: 11,
    title: "2022 Challenger Hellcat",
    description:
      "LEO Hellcat with slicktop lighting package and multi-livery support.",
    creatorName: "Medic909",
    creatorLink: "https://discord.gg/code3development",
    price: 3000,
    image: "https://i.imgur.com/uJxiD2Z.jpeg",
    url: "https://discord.gg/code3development",
    isPack: false,
    features: ["cruise lights", "takedowns"],
  },
  {
    id: 12,
    title: "UHP 2016 FPIS",
    description:
      "2016 UHP FPIS featuring Traffic advisors, scene lighting, and the option for a reflective livery",
    creatorName: "Scorpionfam",
    creatorLink: "https://discord.gg/6xHyEE9",
    price: 3000,
    image: "https://imgur.com/IcsBdyp",
    url: "https://discord.gg/6xHyEE9",
    isPack: false,
    features: [
      "takedowns",
      "scene lights",
      "stage buttons",
    ],
  },
];

// export data sorted by price
export const vehicleData = data.sort((a, b) => a.price - b.price);
