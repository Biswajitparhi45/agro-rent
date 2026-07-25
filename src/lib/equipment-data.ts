import tractor from "@/assets/eq-tractor.jpg";
import harvester from "@/assets/eq-harvester.jpg";
import rotavator from "@/assets/eq-rotavator.jpg";
import seeder from "@/assets/eq-seeder.jpg";
import sprayer from "@/assets/eq-sprayer.jpg";
import cultivator from "@/assets/eq-cultivator.jpg";

export type Equipment = {
  id: string;
  name: string;
  category: string;
  image: string;
  price: number;
  owner: string;
  ownerSince: string;
  location: string;
  available: boolean;
  rating: number;
  reviews: number;
  power: string;
  year: number;
  fuel: string;
  width: string;
  summary: string;
};

export const equipment: Equipment[] = [
  {
    id: "compact-utility-tractor",
    name: "Compact Utility Tractor 45HP",
    category: "Tractor",
    image: tractor,
    price: 2400,
    owner: "Harpreet Singh",
    ownerSince: "2019",
    location: "Ludhiana, Punjab",
    available: true,
    rating: 4.9,
    reviews: 128,
    power: "45 HP",
    year: 2022,
    fuel: "Diesel",
    width: "1.6 m",
    summary:
      "Nimble four-wheel-drive tractor tuned for orchard rows and mid-size plots. Serviced every 120 hours with genuine parts.",
  },
  {
    id: "combine-harvester-xl",
    name: "Combine Harvester XL",
    category: "Harvester",
    image: harvester,
    price: 7800,
    owner: "Meera Patel",
    ownerSince: "2017",
    location: "Anand, Gujarat",
    available: true,
    rating: 4.8,
    reviews: 94,
    power: "180 HP",
    year: 2021,
    fuel: "Diesel",
    width: "4.2 m header",
    summary:
      "High-throughput harvester with grain-loss sensors and an air-conditioned cabin for long harvest days.",
  },
  {
    id: "heavy-duty-rotavator",
    name: "Heavy Duty Rotavator",
    category: "Rotavator",
    image: rotavator,
    price: 950,
    owner: "Kisan Agro Hub",
    ownerSince: "2020",
    location: "Nashik, Maharashtra",
    available: true,
    rating: 4.7,
    reviews: 61,
    power: "35–55 HP req.",
    year: 2023,
    fuel: "PTO driven",
    width: "1.8 m",
    summary:
      "Multi-speed gearbox rotavator with boron-steel blades for a fine seedbed in a single pass.",
  },
  {
    id: "precision-seed-drill",
    name: "Precision Seed Drill",
    category: "Seeder",
    image: seeder,
    price: 1350,
    owner: "Ravi Kumar",
    ownerSince: "2018",
    location: "Karnal, Haryana",
    available: false,
    rating: 4.6,
    reviews: 47,
    power: "50 HP req.",
    year: 2022,
    fuel: "PTO driven",
    width: "2.4 m",
    summary:
      "Nine-row pneumatic drill with metered seed and fertiliser boxes for even emergence.",
  },
  {
    id: "boom-crop-sprayer",
    name: "Boom Crop Sprayer 800L",
    category: "Sprayer",
    image: sprayer,
    price: 1750,
    owner: "Green Fields Co-op",
    ownerSince: "2016",
    location: "Indore, Madhya Pradesh",
    available: true,
    rating: 4.8,
    reviews: 73,
    power: "90 HP",
    year: 2023,
    fuel: "Diesel",
    width: "12 m boom",
    summary:
      "Self-propelled sprayer with 12 m folding boom, anti-drift nozzles and a clean-water rinse tank.",
  },
  {
    id: "spring-tine-cultivator",
    name: "Spring Tine Cultivator",
    category: "Cultivator",
    image: cultivator,
    price: 700,
    owner: "Anita Deshmukh",
    ownerSince: "2021",
    location: "Kolhapur, Maharashtra",
    available: true,
    rating: 4.5,
    reviews: 38,
    power: "40 HP req.",
    year: 2021,
    fuel: "Mounted",
    width: "2.1 m",
    summary:
      "Nine-tine cultivator for secondary tillage and weed control on light to medium soils.",
  },
];

export const categories = [
  { name: "Tractor", icon: "Tractor", count: 128 },
  { name: "Harvester", icon: "Wheat", count: 42 },
  { name: "Seeder", icon: "Sprout", count: 67 },
  { name: "Rotavator", icon: "Cog", count: 55 },
  { name: "Cultivator", icon: "Shovel", count: 39 },
  { name: "Sprayer", icon: "Droplets", count: 48 },
  { name: "Mini Tools", icon: "Wrench", count: 210 },
] as const;

export const getEquipment = (id: string) => equipment.find((e) => e.id === id);

export const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;
