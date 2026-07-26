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

const CUSTOM_EQ_KEY = "agrirent_custom_equipment_v1";

export function getCustomEquipment(): Equipment[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(CUSTOM_EQ_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveCustomEquipment(item: Equipment) {
  if (typeof window === "undefined") return;
  try {
    const current = getCustomEquipment();
    const updated = [item, ...current.filter((x) => x.id !== item.id)];
    localStorage.setItem(CUSTOM_EQ_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event("agrirent_equipment_updated"));
  } catch (e) {
    console.error("Error saving equipment:", e);
  }
}

export function getAllEquipment(): Equipment[] {
  const custom = getCustomEquipment();
  return [...custom, ...equipment];
}

export const getEquipment = (id: string) => {
  const all = getAllEquipment();
  return all.find((e) => e.id === id);
};

export const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;

/* ══ FARMER TO OWNER MESSAGING STORE ══ */
export interface OwnerMessage {
  id: string;
  farmerName: string;
  farmerRole: string;
  equipmentId: string;
  equipmentName: string;
  ownerName: string;
  message: string;
  time: string;
  timestamp: number;
  replies?: Array<{ sender: string; text: string; time: string }>;
}

const MESSAGES_KEY = "agrirent_owner_messages_v2";

export function getOwnerMessages(): OwnerMessage[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(MESSAGES_KEY);
    if (!raw) {
      localStorage.setItem(MESSAGES_KEY, JSON.stringify([]));
      return [];
    }
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export function saveOwnerMessage(msg: OwnerMessage) {
  if (typeof window === "undefined") return;
  try {
    const current = getOwnerMessages();
    const updated = [msg, ...current];
    localStorage.setItem(MESSAGES_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event("agrirent_messages_updated"));
  } catch (e) {
    console.error("Error saving message:", e);
  }
}

export function addReplyToMessage(messageId: string, replyText: string, senderName: string) {
  if (typeof window === "undefined") return;
  try {
    const current = getOwnerMessages();
    const updated = current.map((m) => {
      if (m.id === messageId) {
        const timeStr = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        const existingReplies = m.replies || [];
        return {
          ...m,
          replies: [...existingReplies, { sender: senderName, text: replyText, time: timeStr }],
        };
      }
      return m;
    });
    localStorage.setItem(MESSAGES_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event("agrirent_messages_updated"));
  } catch (e) {
    console.error("Error adding reply:", e);
  }
}

/* ══ BOOKING DATES & AVAILABILITY STORE ══ */
export interface BookingRecord {
  id: string;
  equipmentId: string;
  equipmentName: string;
  renterName: string;
  renterEmail: string;
  fromDate: string; // YYYY-MM-DD
  toDate: string;   // YYYY-MM-DD
  status: "confirmed" | "pending";
  totalPaid: number;
  timestamp: number;
}

const BOOKINGS_STORE_KEY = "agrirent_booking_records_v2";

export function getBookingRecords(): BookingRecord[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(BOOKINGS_STORE_KEY);
    if (!raw) {
      localStorage.setItem(BOOKINGS_STORE_KEY, JSON.stringify([]));
      return [];
    }
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export function saveBookingRecord(record: BookingRecord) {
  if (typeof window === "undefined") return;
  try {
    const current = getBookingRecords();
    const updated = [record, ...current];
    localStorage.setItem(BOOKINGS_STORE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event("agrirent_bookings_updated"));
  } catch (e) {
    console.error("Error saving booking record:", e);
  }
}

export function getOverlappingBooking(equipmentId: string, fromDateStr: string, toDateStr: string): BookingRecord | null {
  if (!fromDateStr || !toDateStr) return null;

  const parseTimestamp = (dStr: string) => {
    if (!dStr) return 0;
    const parts = dStr.split("-");
    if (parts.length === 3) {
      if (parts[0].length === 4) {
        return new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2])).getTime();
      } else if (parts[2].length === 4) {
        return new Date(Number(parts[2]), Number(parts[1]) - 1, Number(parts[0])).getTime();
      }
    }
    return new Date(dStr).getTime();
  };

  const reqStart = parseTimestamp(fromDateStr);
  const reqEnd = parseTimestamp(toDateStr);

  if (isNaN(reqStart) || isNaN(reqEnd) || reqEnd < reqStart) return null;

  const records = getBookingRecords();
  for (const b of records) {
    if (b.equipmentId !== equipmentId) continue;
    const bStart = parseTimestamp(b.fromDate);
    const bEnd = parseTimestamp(b.toDate);
    if (isNaN(bStart) || isNaN(bEnd)) continue;

    // Overlap condition: requested range intersects existing booking range
    if (reqStart <= bEnd && reqEnd >= bStart) {
      return b;
    }
  }

  return null;
}

export function isEquipmentBookedForDates(equipmentId: string, fromDateStr: string, toDateStr: string): boolean {
  return getOverlappingBooking(equipmentId, fromDateStr, toDateStr) !== null;
}

