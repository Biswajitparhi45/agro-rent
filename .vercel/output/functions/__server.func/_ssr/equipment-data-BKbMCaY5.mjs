//#region node_modules/.nitro/vite/services/ssr/assets/equipment-data-BKbMCaY5.js
var eq_tractor_default = "/assets/eq-tractor-CU9rUTdL.jpg";
var equipment = [
	{
		id: "compact-utility-tractor",
		name: "Compact Utility Tractor 45HP",
		category: "Tractor",
		image: eq_tractor_default,
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
		summary: "Nimble four-wheel-drive tractor tuned for orchard rows and mid-size plots. Serviced every 120 hours with genuine parts."
	},
	{
		id: "combine-harvester-xl",
		name: "Combine Harvester XL",
		category: "Harvester",
		image: "/assets/eq-harvester-BI73fTOb.jpg",
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
		summary: "High-throughput harvester with grain-loss sensors and an air-conditioned cabin for long harvest days."
	},
	{
		id: "heavy-duty-rotavator",
		name: "Heavy Duty Rotavator",
		category: "Rotavator",
		image: "/assets/eq-rotavator-C-0z6zM9.jpg",
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
		summary: "Multi-speed gearbox rotavator with boron-steel blades for a fine seedbed in a single pass."
	},
	{
		id: "precision-seed-drill",
		name: "Precision Seed Drill",
		category: "Seeder",
		image: "/assets/eq-seeder-CIfV60u8.jpg",
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
		summary: "Nine-row pneumatic drill with metered seed and fertiliser boxes for even emergence."
	},
	{
		id: "boom-crop-sprayer",
		name: "Boom Crop Sprayer 800L",
		category: "Sprayer",
		image: "/assets/eq-sprayer-4PwFq6V-.jpg",
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
		summary: "Self-propelled sprayer with 12 m folding boom, anti-drift nozzles and a clean-water rinse tank."
	},
	{
		id: "spring-tine-cultivator",
		name: "Spring Tine Cultivator",
		category: "Cultivator",
		image: "/assets/eq-cultivator-k3lsU9Au.jpg",
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
		summary: "Nine-tine cultivator for secondary tillage and weed control on light to medium soils."
	}
];
var categories = [
	{
		name: "Tractor",
		icon: "Tractor",
		count: 128
	},
	{
		name: "Harvester",
		icon: "Wheat",
		count: 42
	},
	{
		name: "Seeder",
		icon: "Sprout",
		count: 67
	},
	{
		name: "Rotavator",
		icon: "Cog",
		count: 55
	},
	{
		name: "Cultivator",
		icon: "Shovel",
		count: 39
	},
	{
		name: "Sprayer",
		icon: "Droplets",
		count: 48
	},
	{
		name: "Mini Tools",
		icon: "Wrench",
		count: 210
	}
];
var CUSTOM_EQ_KEY = "agrirent_custom_equipment_v1";
function getCustomEquipment() {
	if (typeof window === "undefined") return [];
	try {
		const raw = localStorage.getItem(CUSTOM_EQ_KEY);
		return raw ? JSON.parse(raw) : [];
	} catch {
		return [];
	}
}
function saveCustomEquipment(item) {
	if (typeof window === "undefined") return;
	try {
		const updated = [item, ...getCustomEquipment().filter((x) => x.id !== item.id)];
		localStorage.setItem(CUSTOM_EQ_KEY, JSON.stringify(updated));
		window.dispatchEvent(new Event("agrirent_equipment_updated"));
	} catch (e) {
		console.error("Error saving equipment:", e);
	}
}
function getAllEquipment() {
	return [...getCustomEquipment(), ...equipment];
}
var getEquipment = (id) => {
	return getAllEquipment().find((e) => e.id === id);
};
var inr = (n) => `₹${n.toLocaleString("en-IN")}`;
var MESSAGES_KEY = "agrirent_owner_messages_v1";
function getOwnerMessages() {
	if (typeof window === "undefined") return [];
	try {
		const raw = localStorage.getItem(MESSAGES_KEY);
		if (!raw) {
			const initialMsgs = [
				{
					id: "m_1",
					farmerName: "Gurpreet Singh",
					farmerRole: "Farmer",
					equipmentId: "combine-harvester-1",
					equipmentName: "Combine Harvester XL",
					ownerName: "Harpreet Singh",
					message: "Hello! Is the Combine Harvester XL available for harvest next Monday?",
					time: "10:30 AM",
					timestamp: Date.now() - 36e5 * 2,
					replies: [{
						sender: "Harpreet Singh",
						text: "Yes Gurpreet, it's fully serviced and ready for pickup.",
						time: "10:32 AM"
					}]
				},
				{
					id: "m_2",
					farmerName: "Ravi Kumar",
					farmerRole: "Farmer",
					equipmentId: "compact-tractor-45hp",
					equipmentName: "Compact Utility Tractor 45HP",
					ownerName: "Harpreet Singh",
					message: "Can you confirm delivery location in Amritsar for 3 days rental?",
					time: "09:15 AM",
					timestamp: Date.now() - 36e5 * 5
				},
				{
					id: "m_3",
					farmerName: "Vikas Sharma",
					farmerRole: "Farmer",
					equipmentId: "rotavator-7ft",
					equipmentName: "Heavy Duty Rotavator 7ft",
					ownerName: "Harpreet Singh",
					message: "Thanks for approving the tractor rental. See you on Friday morning!",
					time: "Yesterday",
					timestamp: Date.now() - 864e5
				}
			];
			localStorage.setItem(MESSAGES_KEY, JSON.stringify(initialMsgs));
			return initialMsgs;
		}
		return JSON.parse(raw);
	} catch {
		return [];
	}
}
function saveOwnerMessage(msg) {
	if (typeof window === "undefined") return;
	try {
		const updated = [msg, ...getOwnerMessages()];
		localStorage.setItem(MESSAGES_KEY, JSON.stringify(updated));
		window.dispatchEvent(new Event("agrirent_messages_updated"));
	} catch (e) {
		console.error("Error saving message:", e);
	}
}
function addReplyToMessage(messageId, replyText, senderName) {
	if (typeof window === "undefined") return;
	try {
		const updated = getOwnerMessages().map((m) => {
			if (m.id === messageId) {
				const timeStr = (/* @__PURE__ */ new Date()).toLocaleTimeString([], {
					hour: "2-digit",
					minute: "2-digit"
				});
				const existingReplies = m.replies || [];
				return {
					...m,
					replies: [...existingReplies, {
						sender: senderName,
						text: replyText,
						time: timeStr
					}]
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
var BOOKINGS_STORE_KEY = "agrirent_booking_records_v2";
function getBookingRecords() {
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
function saveBookingRecord(record) {
	if (typeof window === "undefined") return;
	try {
		const updated = [record, ...getBookingRecords()];
		localStorage.setItem(BOOKINGS_STORE_KEY, JSON.stringify(updated));
		window.dispatchEvent(new Event("agrirent_bookings_updated"));
	} catch (e) {
		console.error("Error saving booking record:", e);
	}
}
function getOverlappingBooking(equipmentId, fromDateStr, toDateStr) {
	if (!fromDateStr || !toDateStr) return null;
	const parseTimestamp = (dStr) => {
		if (!dStr) return 0;
		const parts = dStr.split("-");
		if (parts.length === 3) {
			if (parts[0].length === 4) return new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2])).getTime();
			else if (parts[2].length === 4) return new Date(Number(parts[2]), Number(parts[1]) - 1, Number(parts[0])).getTime();
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
		if (reqStart <= bEnd && reqEnd >= bStart) return b;
	}
	return null;
}
//#endregion
export { getAllEquipment as a, getOverlappingBooking as c, saveBookingRecord as d, saveCustomEquipment as f, equipment as i, getOwnerMessages as l, categories as n, getCustomEquipment as o, saveOwnerMessage as p, eq_tractor_default as r, getEquipment as s, addReplyToMessage as t, inr as u };
