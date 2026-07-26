import { C as __toESM } from "./createServerFn-BH-xKMvN.mjs";
import { a as require_react, i as require_jsx_runtime } from "../_libs/framer-motion.mjs";
import { a as cn, c as motion, i as Tractor, l as react_exports, n as ShieldCheck, o as createLucideIcon, r as Sprout, t as Button, u as useComposedRefs } from "./button-C1X1bU2g.mjs";
import { a as useAuth, n as Link, o as useNavigate } from "./context-DsbXeIon.mjs";
import { t as CalendarCheck } from "./calendar-check-DuTmVx5a.mjs";
import { n as X, t as LogOut } from "./x-DcgK__gH.mjs";
import { t as Wallet } from "./wallet-B3Fl1oET.mjs";
import { n as LayoutDashboard, t as ChartColumn } from "./layout-dashboard-nQ89xW8h.mjs";
import { t as CircleCheck } from "./circle-check-DGje9aGf.mjs";
import { t as Settings } from "./settings-LdF4sC8P.mjs";
import { n as Primitive, t as Input } from "./dist-BG8VwwRv.mjs";
import { t as Label } from "./label-BzZpg6Ws.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Star } from "./star-C_nxsulQ.mjs";
import { t as TrendingUp } from "./trending-up-BxSsjIbe.mjs";
import { f as saveCustomEquipment, i as equipment, l as getOwnerMessages, o as getCustomEquipment, t as addReplyToMessage, u as inr } from "./equipment-data-BKbMCaY5.mjs";
import { t as Clock } from "./clock-D9Km3r5r.mjs";
import { t as MapPin } from "./map-pin-BxVRd4HV.mjs";
import { n as Send, t as MessageSquare } from "./send-CWdpnj5-.mjs";
import { t as Fuel } from "./fuel-B6Akxpwf.mjs";
import { a as useSize, n as createContextScope, r as useControllableState, t as composeEventHandlers } from "./dist-BGUOAKYF.mjs";
import { a as Area, c as ResponsiveContainer, i as XAxis, l as Tooltip, n as BarChart, o as CartesianGrid, r as YAxis, s as Bar, t as AreaChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard-DeRWeCMu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ArrowUpRight = createLucideIcon("arrow-up-right", [["path", {
	d: "M7 7h10v10",
	key: "1tivn9"
}], ["path", {
	d: "M7 17 17 7",
	key: "1vkiza"
}]]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Bell = createLucideIcon("bell", [["path", {
	d: "M10.268 21a2 2 0 0 0 3.464 0",
	key: "vwvbt9"
}], ["path", {
	d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
	key: "11g9vi"
}]]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var CircleX = createLucideIcon("circle-x", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "m15 9-6 6",
		key: "1uzhvr"
	}],
	["path", {
		d: "m9 9 6 6",
		key: "z0biqf"
	}]
]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Image = createLucideIcon("image", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		ry: "2",
		key: "1m3agn"
	}],
	["circle", {
		cx: "9",
		cy: "9",
		r: "2",
		key: "af1f0g"
	}],
	["path", {
		d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",
		key: "1xmnt7"
	}]
]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Pencil = createLucideIcon("pencil", [["path", {
	d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
	key: "1a8usu"
}], ["path", {
	d: "m15 5 4 4",
	key: "1mk7zo"
}]]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Plus = createLucideIcon("plus", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}], ["path", {
	d: "M12 5v14",
	key: "s699le"
}]]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Trash2 = createLucideIcon("trash-2", [
	["path", {
		d: "M10 11v6",
		key: "nco0om"
	}],
	["path", {
		d: "M14 11v6",
		key: "outv1u"
	}],
	["path", {
		d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",
		key: "miytrc"
	}],
	["path", {
		d: "M3 6h18",
		key: "d0wm0j"
	}],
	["path", {
		d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
		key: "e791ji"
	}]
]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Upload = createLucideIcon("upload", [
	["path", {
		d: "M12 3v12",
		key: "1x0j5s"
	}],
	["path", {
		d: "m17 8-5-5-5 5",
		key: "7q97r8"
	}],
	["path", {
		d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
		key: "ih7n3h"
	}]
]);
/**
* @license lucide-react v0.575.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Zap = createLucideIcon("zap", [["path", {
	d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
	key: "1xq2db"
}]]);
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", {
	value,
	configurable: true
});
var SWITCH_NAME = "Switch";
var [createSwitchContext, createSwitchScope] = createContextScope(SWITCH_NAME);
var [SwitchProviderImpl, useSwitchContext] = createSwitchContext(SWITCH_NAME);
function SwitchProvider(props) {
	const { __scopeSwitch, checked: checkedProp, children, defaultChecked, disabled, form, name, onCheckedChange, required, value = "on", internal_do_not_use_render } = props;
	const [checked, setChecked] = useControllableState({
		prop: checkedProp,
		defaultProp: defaultChecked ?? false,
		onChange: onCheckedChange,
		caller: SWITCH_NAME
	});
	const [control, setControl] = import_react.useState(null);
	const [bubbleInput, setBubbleInput] = import_react.useState(null);
	const hasConsumerStoppedPropagationRef = import_react.useRef(false);
	const [userInteractionCount, onUserInteraction] = import_react.useReducer((count) => count + 1, 0);
	const context = {
		checked,
		setChecked,
		disabled,
		control,
		setControl,
		name,
		form,
		value,
		hasConsumerStoppedPropagationRef,
		userInteractionCount,
		onUserInteraction,
		required,
		defaultChecked,
		isFormControl: control ? !!form || !!control.closest("form") : true,
		bubbleInput,
		setBubbleInput
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchProviderImpl, {
		scope: __scopeSwitch,
		...context,
		children: isFunction(internal_do_not_use_render) ? internal_do_not_use_render(context) : children
	});
}
__name(SwitchProvider, "SwitchProvider");
var TRIGGER_NAME = "SwitchTrigger";
var SwitchTrigger = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name(function SwitchTrigger2({ __scopeSwitch, onClick, ...switchProps }, forwardedRef) {
	const { control, form, value, disabled, checked, required, setControl, setChecked, hasConsumerStoppedPropagationRef, onUserInteraction, isFormControl, bubbleInput } = useSwitchContext(TRIGGER_NAME, __scopeSwitch);
	const composedRefs = useComposedRefs(forwardedRef, setControl);
	const initialCheckedStateRef = import_react.useRef(checked);
	import_react.useEffect(() => {
		const associatedForm = form ? control?.ownerDocument.getElementById(form) : control?.form;
		if (associatedForm instanceof HTMLFormElement) {
			const reset = /* @__PURE__ */ __name(() => setChecked(initialCheckedStateRef.current), "reset");
			associatedForm.addEventListener("reset", reset);
			return () => associatedForm.removeEventListener("reset", reset);
		}
	}, [
		control,
		form,
		setChecked
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.button, {
		type: "button",
		role: "switch",
		"aria-checked": checked,
		"aria-required": required,
		"data-state": getState(checked),
		"data-disabled": disabled ? "" : void 0,
		disabled,
		value,
		...switchProps,
		ref: composedRefs,
		onClick: composeEventHandlers(onClick, (event) => {
			onUserInteraction();
			setChecked((prevChecked) => !prevChecked);
			if (bubbleInput && isFormControl) {
				hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
				if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
			}
		})
	});
}, "SwitchTrigger"));
var Switch$1 = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name(function Switch2(props, forwardedRef) {
	const { __scopeSwitch, name, checked, defaultChecked, required, disabled, value, onCheckedChange, form, ...switchProps } = props;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchProvider, {
		__scopeSwitch,
		checked,
		defaultChecked,
		disabled,
		required,
		onCheckedChange,
		name,
		form,
		value,
		internal_do_not_use_render: ({ isFormControl }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchTrigger, {
			...switchProps,
			ref: forwardedRef,
			__scopeSwitch
		}), isFormControl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchBubbleInput, { __scopeSwitch })] })
	});
}, "Switch"));
var THUMB_NAME = "SwitchThumb";
var SwitchThumb = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name(function SwitchThumb2(props, forwardedRef) {
	const { __scopeSwitch, ...thumbProps } = props;
	const context = useSwitchContext(THUMB_NAME, __scopeSwitch);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.span, {
		"data-state": getState(context.checked),
		"data-disabled": context.disabled ? "" : void 0,
		...thumbProps,
		ref: forwardedRef
	});
}, "SwitchThumb"));
var BUBBLE_INPUT_NAME = "SwitchBubbleInput";
var SwitchBubbleInput = /* @__PURE__ */ import_react.forwardRef(/* @__PURE__ */ __name(function SwitchBubbleInput2({ __scopeSwitch, onClick, ...props }, forwardedRef) {
	const { control, hasConsumerStoppedPropagationRef, userInteractionCount, checked, defaultChecked, required, disabled, name, value, form, bubbleInput, setBubbleInput } = useSwitchContext(BUBBLE_INPUT_NAME, __scopeSwitch);
	const composedRefs = useComposedRefs(forwardedRef, setBubbleInput);
	const controlSize = useSize(control);
	const shouldStopClickPropagationRef = import_react.useRef(false);
	const prevCheckedRef = import_react.useRef(checked);
	const prevUserInteractionCountRef = import_react.useRef(userInteractionCount);
	import_react.useEffect(() => {
		const input = bubbleInput;
		if (!input) return;
		const inputProto = window.HTMLInputElement.prototype;
		const setChecked = Object.getOwnPropertyDescriptor(inputProto, "checked").set;
		const isUserInteraction = userInteractionCount !== prevUserInteractionCountRef.current;
		prevUserInteractionCountRef.current = userInteractionCount;
		const checkedChanged = prevCheckedRef.current !== checked;
		prevCheckedRef.current = checked;
		const bubbles = !(isUserInteraction && hasConsumerStoppedPropagationRef.current);
		if (checkedChanged && setChecked) {
			shouldStopClickPropagationRef.current = !isUserInteraction;
			const event = new Event("click", { bubbles });
			setChecked.call(input, checked);
			input.dispatchEvent(event);
			shouldStopClickPropagationRef.current = false;
		}
	}, [
		bubbleInput,
		checked,
		hasConsumerStoppedPropagationRef,
		userInteractionCount
	]);
	const defaultCheckedRef = import_react.useRef(checked);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.input, {
		type: "checkbox",
		"aria-hidden": true,
		defaultChecked: defaultChecked ?? defaultCheckedRef.current,
		required,
		disabled,
		name,
		value,
		form,
		...props,
		tabIndex: -1,
		ref: composedRefs,
		onClick: composeEventHandlers(onClick, (event) => {
			if (shouldStopClickPropagationRef.current) event.stopPropagation();
		}),
		style: {
			...props.style,
			...controlSize,
			position: "absolute",
			pointerEvents: "none",
			opacity: 0,
			margin: 0,
			transform: "translateX(-100%)"
		}
	});
}, "SwitchBubbleInput"));
function isFunction(value) {
	return typeof value === "function";
}
__name(isFunction, "isFunction");
function getState(checked) {
	return checked ? "checked" : "unchecked";
}
__name(getState, "getState");
var Switch = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch$1, {
	className: cn("peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input", className),
	...props,
	ref,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchThumb, { className: cn("pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0") })
}));
Switch.displayName = Switch$1.displayName;
var nav = [
	{
		label: "Dashboard",
		icon: LayoutDashboard
	},
	{
		label: "My Equipment",
		icon: Tractor
	},
	{
		label: "Bookings",
		icon: CalendarCheck
	},
	{
		label: "Messages",
		icon: MessageSquare
	},
	{
		label: "Payments",
		icon: Wallet
	},
	{
		label: "Analytics",
		icon: ChartColumn
	},
	{
		label: "Settings",
		icon: Settings
	}
];
var revenueData = [
	{
		m: "Jan",
		v: 82e3
	},
	{
		m: "Feb",
		v: 96e3
	},
	{
		m: "Mar",
		v: 128e3
	},
	{
		m: "Apr",
		v: 112e3
	},
	{
		m: "May",
		v: 164e3
	},
	{
		m: "Jun",
		v: 198e3
	}
];
var utilData = [
	{
		m: "Jan",
		rate: 68
	},
	{
		m: "Feb",
		rate: 74
	},
	{
		m: "Mar",
		rate: 88
	},
	{
		m: "Apr",
		rate: 79
	},
	{
		m: "May",
		rate: 92
	},
	{
		m: "Jun",
		rate: 96
	}
];
function Dashboard() {
	const { user, logout } = useAuth();
	const navigate = useNavigate();
	const [section, setSection] = (0, import_react.useState)("Dashboard");
	const [ownerEquipment, setOwnerEquipment] = (0, import_react.useState)(() => [...getCustomEquipment(), ...equipment]);
	const [imagePreview, setImagePreview] = (0, import_react.useState)(null);
	const fileInputRef = (0, import_react.useRef)(null);
	const [formPreview, setFormPreview] = (0, import_react.useState)({
		name: "",
		category: "Tractor",
		price: "2800",
		location: "Amritsar, Punjab",
		power: "50 HP",
		fuel: "Diesel",
		year: String((/* @__PURE__ */ new Date()).getFullYear())
	});
	const [messagesList, setMessagesList] = (0, import_react.useState)(() => getOwnerMessages());
	const [activeMsgId, setActiveMsgId] = (0, import_react.useState)(() => getOwnerMessages()[0]?.id || "");
	const [newMessage, setNewMessage] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		const syncMsgs = () => {
			const list = getOwnerMessages();
			setMessagesList(list);
			if (!activeMsgId && list.length > 0) setActiveMsgId(list[0].id);
		};
		window.addEventListener("agrirent_messages_updated", syncMsgs);
		window.addEventListener("storage", syncMsgs);
		return () => {
			window.removeEventListener("agrirent_messages_updated", syncMsgs);
			window.removeEventListener("storage", syncMsgs);
		};
	}, [activeMsgId]);
	const [bookingRequests, setBookingRequests] = (0, import_react.useState)([
		{
			id: "b1",
			machine: "Heavy Duty Rotavator",
			renter: "Ravi Kumar",
			dates: "3 Days (Oct 12 – Oct 15)",
			total: 2850,
			status: "pending"
		},
		{
			id: "b2",
			machine: "Compact Utility Tractor 45HP",
			renter: "Sunita Devi",
			dates: "5 Days (Oct 14 – Oct 19)",
			total: 12e3,
			status: "pending"
		},
		{
			id: "b3",
			machine: "Combine Harvester XL",
			renter: "Co-op Anand",
			dates: "4 Days (Oct 18 – Oct 22)",
			total: 31200,
			status: "approved"
		},
		{
			id: "b4",
			machine: "Precision Seed Drill",
			renter: "Vikas Sharma",
			dates: "2 Days (Oct 20 – Oct 22)",
			total: 2700,
			status: "approved"
		}
	]);
	const userName = user?.name || "Harpreet Singh";
	const userRole = user?.role ? user.role.charAt(0).toUpperCase() + user.role.slice(1) : "Owner";
	const handleLogout = async () => {
		await logout();
		toast.success("Logged out successfully.");
		navigate({
			to: "/auth",
			search: { mode: "login" }
		});
	};
	const handleAddEquipment = (e) => {
		e.preventDefault();
		const form = new FormData(e.currentTarget);
		const name = String(form.get("name") ?? "").trim();
		const category = String(form.get("category") ?? "Tractor");
		const price = Number(form.get("price") ?? 2500);
		const location = String(form.get("location") ?? "Ludhiana, Punjab");
		const chassisNo = String(form.get("chassisNo") ?? "").trim();
		const power = String(form.get("power") ?? "50 HP").trim();
		const fuel = String(form.get("fuel") ?? "Diesel").trim();
		const year = Number(form.get("year") ?? (/* @__PURE__ */ new Date()).getFullYear());
		if (!name) {
			toast.error("Please enter equipment name.");
			return;
		}
		if (!chassisNo) {
			toast.error("Please enter chassis number.");
			return;
		}
		const newItem = {
			id: `eq_${Date.now()}`,
			name,
			category,
			price,
			location,
			rating: 4.9,
			reviews: 1,
			available: true,
			owner: userName,
			ownerSince: "2026",
			power: power || "50 HP",
			fuel: fuel || "Diesel",
			width: "2.1 m",
			year,
			summary: `Chassis: ${chassisNo} · High efficiency machinery for seasonal farm operations.`,
			image: imagePreview || equipment[0].image
		};
		saveCustomEquipment(newItem);
		setOwnerEquipment((prev) => [newItem, ...prev]);
		setImagePreview(null);
		setFormPreview({
			name: "",
			category: "Tractor",
			price: "2800",
			location: "Amritsar, Punjab",
			power: "50 HP",
			fuel: "Diesel",
			year: String((/* @__PURE__ */ new Date()).getFullYear())
		});
		setSection("My Equipment");
		toast.success(`${name} listed successfully & published to Marketplace!`);
	};
	const handleImageChange = (e) => {
		const file = e.target.files?.[0];
		if (!file) return;
		if (!file.type.startsWith("image/")) {
			toast.error("Please upload a valid image file.");
			return;
		}
		if (file.size > 10 * 1024 * 1024) {
			toast.error("Image must be smaller than 10 MB.");
			return;
		}
		const reader = new FileReader();
		reader.onloadend = () => {
			if (typeof reader.result === "string") setImagePreview(reader.result);
		};
		reader.readAsDataURL(file);
	};
	const [editingItem, setEditingItem] = (0, import_react.useState)(null);
	const toggleEquipmentAvailability = (id) => {
		setOwnerEquipment((prev) => {
			const updated = prev.map((item) => item.id === id ? {
				...item,
				available: !item.available
			} : item);
			const customItems = updated.filter((x) => x.id.startsWith("eq_"));
			localStorage.setItem("agrirent_custom_equipment_v1", JSON.stringify(customItems));
			window.dispatchEvent(new Event("agrirent_equipment_updated"));
			return updated;
		});
		toast.success("Equipment availability status updated.");
	};
	const handleDeleteEquipment = (id, name) => {
		if (window.confirm(`Are you sure you want to delete "${name}" from your inventory?`)) {
			setOwnerEquipment((prev) => {
				const updated = prev.filter((item) => item.id !== id);
				const customItems = updated.filter((x) => x.id.startsWith("eq_"));
				localStorage.setItem("agrirent_custom_equipment_v1", JSON.stringify(customItems));
				window.dispatchEvent(new Event("agrirent_equipment_updated"));
				return updated;
			});
			toast.success(`"${name}" deleted from inventory.`);
		}
	};
	const handleSaveEditEquipment = (e) => {
		e.preventDefault();
		if (!editingItem) return;
		const form = new FormData(e.currentTarget);
		const name = String(form.get("name") ?? "").trim();
		const category = String(form.get("category") ?? editingItem.category);
		const price = Number(form.get("price") ?? editingItem.price);
		const location = String(form.get("location") ?? editingItem.location);
		const power = String(form.get("power") ?? editingItem.power);
		const fuel = String(form.get("fuel") ?? editingItem.fuel);
		const year = Number(form.get("year") ?? editingItem.year);
		const updatedItem = {
			...editingItem,
			name: name || editingItem.name,
			category,
			price,
			location: location || editingItem.location,
			power: power || editingItem.power,
			fuel: fuel || editingItem.fuel,
			year
		};
		setOwnerEquipment((prev) => {
			const updated = prev.map((item) => item.id === editingItem.id ? updatedItem : item);
			const customItems = updated.filter((x) => x.id.startsWith("eq_"));
			localStorage.setItem("agrirent_custom_equipment_v1", JSON.stringify(customItems));
			window.dispatchEvent(new Event("agrirent_equipment_updated"));
			return updated;
		});
		toast.success(`"${updatedItem.name}" updated successfully!`);
		setEditingItem(null);
	};
	const updateBookingStatus = (id, status) => {
		setBookingRequests((prev) => prev.map((b) => b.id === id ? {
			...b,
			status
		} : b));
		toast.success(`Booking ${status}.`);
	};
	const pendingCount = bookingRequests.filter((b) => b.status === "pending").length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-screen w-full overflow-hidden bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "hidden lg:flex h-full w-60 xl:w-64 shrink-0 flex-col overflow-hidden border-r border-white/10 relative z-20 gradient-primary",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pointer-events-none absolute -top-16 -left-16 h-64 w-64 rounded-full opacity-20",
					style: { background: "radial-gradient(circle, oklch(0.65 0.16 150) 0%, transparent 70%)" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative z-10 px-5 py-5 border-b border-white/20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex items-center gap-2.5 group",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-9 w-9 place-items-center rounded-xl bg-white/20 border border-white/30 text-white shadow-sm transition-all group-hover:scale-105",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sprout, { className: "h-4.5 w-4.5 text-white" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-display text-lg font-extrabold text-white tracking-tight",
							children: ["Agri", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-amber-300",
								children: "Rent"
							})]
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative z-10 px-4 py-4 border-b border-white/20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 rounded-2xl bg-white/15 border border-white/25 p-3 backdrop-blur-md shadow-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/25 border border-white/40 text-xs font-extrabold text-white",
								children: userName.charAt(0)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-extrabold text-white truncate",
									children: userName.split(" ")[0]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-[10px] text-white/80 font-bold",
									children: [userRole, " Account"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-amber-400 shrink-0 shadow-sm animate-pulse" })
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "relative z-10 flex-1 overflow-y-auto px-3 py-4 space-y-2",
					children: nav.map((n) => {
						const active = section === n.label;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setSection(n.label),
							className: cn("relative flex w-full items-center gap-3 rounded-2xl px-3.5 py-2.5 text-xs transition-all cursor-pointer", active ? "bg-white text-primary font-extrabold shadow-float" : "text-white hover:bg-white/15 font-bold border border-transparent"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(n.icon, { className: cn("relative h-4 w-4 shrink-0", active ? "text-primary" : "text-white") }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "relative flex-1 text-left",
									children: n.label
								}),
								n.label === "Bookings" && pendingCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("relative ml-auto grid h-4.5 w-4.5 place-items-center rounded-full text-[9px] font-extrabold shadow-sm", active ? "bg-primary text-white" : "bg-amber-400 text-black"),
									children: pendingCount
								})
							]
						}, n.label);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative z-10 px-4 py-4 border-t border-white/20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] text-white/80 text-center font-bold",
						children: "© 2026 AgriRent Platform"
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col h-full overflow-hidden bg-background",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex items-center justify-between px-6 xl:px-8 py-4 border-b border-border/70 bg-card/60 backdrop-blur-md shrink-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[10px] font-bold uppercase tracking-widest text-primary",
						children: "Owner Workspace"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[9px] font-bold uppercase px-2.5 py-0.5 rounded-full bg-primary-soft text-primary",
						children: userRole
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl xl:text-2xl font-extrabold mt-0.5 font-display text-foreground",
					children: userName
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "relative grid h-10 w-10 place-items-center rounded-2xl border border-border/80 bg-card hover:bg-muted/60 transition-colors cursor-pointer shadow-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-4.5 w-4.5 text-muted-foreground" }), pendingCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute -top-1 -right-1 h-4 w-4 grid place-items-center rounded-full bg-amber-400 text-[9px] font-bold text-black",
							children: pendingCount
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "hero",
						size: "sm",
						onClick: () => setSection("Add Equipment"),
						className: "cursor-pointer gap-1.5 shadow-glow h-10 px-5 rounded-2xl text-xs font-bold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), " Add Equipment"]
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "flex-1 overflow-y-auto px-6 xl:px-8 py-6",
				children: [
					section === "Dashboard" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-5 sm:grid-cols-2 xl:grid-cols-4",
								children: [
									{
										label: "Total Equipment",
										value: ownerEquipment.length,
										prefix: "",
										icon: Tractor
									},
									{
										label: "Revenue (6 mo)",
										value: 78e4,
										prefix: "₹",
										icon: TrendingUp
									},
									{
										label: "Active Rentals",
										value: 146,
										prefix: "",
										icon: CalendarCheck
									},
									{
										label: "Pending Requests",
										value: pendingCount,
										prefix: "",
										icon: Bell
									}
								].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									initial: {
										opacity: 0,
										y: 16
									},
									animate: {
										opacity: 1,
										y: 0
									},
									transition: {
										duration: .5,
										delay: i * .07
									},
									className: "surface-card p-6 rounded-3xl border border-border/80 shadow-soft hover:-translate-y-1 hover:shadow-float transition-all duration-300",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-semibold text-muted-foreground",
												children: s.label
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "grid h-9 w-9 place-items-center rounded-2xl bg-primary/10 text-primary",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-4 w-4" })
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "font-display mt-3 text-3xl font-extrabold text-foreground",
											children: [s.prefix, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, { to: s.value })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-2.5 flex items-center gap-1 text-emerald-600",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[11px] font-bold",
												children: "+12% vs last month"
											})]
										})
									]
								}, s.label))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-6 xl:grid-cols-[1.6fr_1fr]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									initial: {
										opacity: 0,
										y: 16
									},
									animate: {
										opacity: 1,
										y: 0
									},
									transition: { delay: .3 },
									className: "surface-card p-6 rounded-3xl border border-border/80 shadow-soft",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between mb-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "font-display text-base font-bold text-foreground",
											children: "Revenue Trend"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground mt-0.5",
											children: "Monthly earnings (Jan – Jun 2026)"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-600",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-3.5 w-3.5" }), " +141%"]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-6 h-56",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
											width: "100%",
											height: "100%",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
												data: revenueData,
												margin: {
													top: 4,
													right: 4,
													left: -10,
													bottom: 0
												},
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
														id: "rev",
														x1: "0",
														y1: "0",
														x2: "0",
														y2: "1",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
															offset: "0%",
															stopColor: "var(--color-primary)",
															stopOpacity: .35
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
															offset: "100%",
															stopColor: "var(--color-primary)",
															stopOpacity: 0
														})]
													}) }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
														strokeDasharray: "3 3",
														stroke: "var(--color-border)",
														vertical: false
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
														dataKey: "m",
														tickLine: false,
														axisLine: false,
														fontSize: 11,
														tick: { fill: "var(--color-muted-foreground)" }
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
														tickLine: false,
														axisLine: false,
														fontSize: 11,
														width: 52,
														tick: { fill: "var(--color-muted-foreground)" },
														tickFormatter: (v) => `₹${(v / 1e3).toFixed(0)}k`
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
														contentStyle: {
															borderRadius: 16,
															border: "1px solid var(--color-border)",
															background: "var(--color-card)",
															boxShadow: "var(--shadow-soft)",
															fontSize: 12
														},
														formatter: (v) => [`₹${v.toLocaleString("en-IN")}`, "Revenue"]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
														type: "monotone",
														dataKey: "v",
														stroke: "var(--color-primary)",
														strokeWidth: 2.5,
														fill: "url(#rev)",
														dot: {
															fill: "var(--color-primary)",
															r: 4
														}
													})
												]
											})
										})
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									initial: {
										opacity: 0,
										y: 16
									},
									animate: {
										opacity: 1,
										y: 0
									},
									transition: { delay: .35 },
									className: "surface-card p-6 rounded-3xl border border-border/80 shadow-soft",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between mb-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "font-display text-base font-bold text-foreground",
											children: "Recent Rentals"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => setSection("My Equipment"),
											className: "text-xs text-primary font-bold hover:underline cursor-pointer",
											children: "View all"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "space-y-3",
										children: ownerEquipment.slice(0, 4).map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-center gap-3 rounded-2xl border border-border/60 bg-muted/30 p-3 hover:bg-muted/60 transition-colors",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: e.image,
													alt: e.name,
													className: "h-11 w-14 rounded-xl object-cover shrink-0"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "min-w-0 flex-1",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "truncate text-xs font-bold text-foreground",
														children: e.name
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
														className: "flex items-center gap-1 text-[11px] text-muted-foreground mt-0.5",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3 w-3 text-primary" }),
															" 3 days · ",
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "text-primary font-bold",
																children: inr(e.price * 3)
															})
														]
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("h-2.5 w-2.5 rounded-full shrink-0", e.available ? "bg-emerald-500" : "bg-amber-400") })
											]
										}, e.id))
									})]
								})]
							}),
							pendingCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: 16
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: { delay: .4 },
								className: "surface-card p-6 rounded-3xl border border-amber-500/30 bg-amber-500/8 shadow-soft",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between mb-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "grid h-9 w-9 place-items-center rounded-2xl bg-amber-500/20 text-amber-600",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-4 w-4" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
											className: "text-sm font-bold text-foreground",
											children: [
												pendingCount,
												" Booking Request",
												pendingCount > 1 ? "s" : "",
												" Awaiting Approval"
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground",
											children: "Action required — approve or reject farmers' requests"
										})] })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										size: "sm",
										variant: "outline",
										onClick: () => setSection("Bookings"),
										className: "text-xs h-9 px-4 rounded-xl font-bold cursor-pointer",
										children: "Manage →"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "space-y-2.5",
									children: bookingRequests.filter((b) => b.status === "pending").map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between rounded-2xl bg-card border border-border/80 p-3.5 shadow-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-bold text-foreground",
											children: b.machine
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-[11px] text-muted-foreground",
											children: [
												b.renter,
												" · ",
												b.dates
											]
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-sm font-bold text-primary",
													children: inr(b.total)
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
													size: "sm",
													variant: "hero",
													onClick: () => updateBookingStatus(b.id, "approved"),
													className: "h-8 text-xs px-3.5 rounded-xl cursor-pointer gap-1 font-bold",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3.5 w-3.5" }), " Accept"]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
													size: "sm",
													variant: "destructive",
													onClick: () => updateBookingStatus(b.id, "rejected"),
													className: "h-8 text-xs px-3.5 rounded-xl cursor-pointer gap-1 font-bold",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "h-3.5 w-3.5" }), " Reject"]
												})
											]
										})]
									}, b.id))
								})]
							})
						]
					}),
					section === "My Equipment" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xl font-bold font-display",
								children: "Equipment Inventory"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted-foreground mt-0.5",
								children: [ownerEquipment.length, " machines listed · Manage prices & live status"]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "sm",
								variant: "hero",
								onClick: () => setSection("Add Equipment"),
								className: "gap-1.5 cursor-pointer rounded-2xl font-bold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), " Add Machine"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-6 sm:grid-cols-2 xl:grid-cols-3",
							children: ownerEquipment.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									y: 16
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: { delay: i * .05 },
								className: "surface-card rounded-3xl border border-border/80 overflow-hidden hover:-translate-y-1 hover:shadow-float transition-all duration-300 group flex flex-col justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative aspect-video overflow-hidden bg-muted",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: item.image || "/assets/eq-tractor-CU9rUTdL.jpg",
											alt: item.name,
											onError: (e) => {
												e.currentTarget.onerror = null;
												e.currentTarget.src = "/assets/eq-tractor-CU9rUTdL.jpg";
											},
											className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: cn("absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase backdrop-blur-md shadow-sm border border-white/20", item.available ? "bg-emerald-500/90 text-white" : "bg-black/70 text-white/80"),
											children: item.available ? "Available" : "Inactive / Booked"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "absolute top-3 right-3 flex items-center gap-1.5 z-10",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												onClick: () => setEditingItem(item),
												title: "Edit Equipment & Pricing",
												className: "h-8 px-2.5 rounded-full text-[11px] font-bold flex items-center gap-1 bg-black/60 backdrop-blur-md text-white border border-white/20 hover:bg-primary transition-all cursor-pointer shadow-sm",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "h-3 w-3" }), " Edit"]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => handleDeleteEquipment(item.id, item.name),
												title: "Delete Machinery",
												className: "h-8 w-8 grid place-items-center rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 hover:bg-destructive transition-all cursor-pointer shadow-sm",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" })
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-black/50 backdrop-blur-md px-2.5 py-1 text-[10px] font-bold text-white",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3 w-3 fill-amber-400 text-amber-400" }),
												" ",
												item.rating
											]
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-bold text-base leading-tight font-display text-foreground",
										children: item.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-2.5 flex flex-wrap gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "flex items-center gap-1 text-[11px] text-muted-foreground bg-muted/60 px-2.5 py-1 rounded-lg",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3 w-3 text-primary" }), item.location]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "flex items-center gap-1 text-[11px] text-muted-foreground bg-muted/60 px-2.5 py-1 rounded-lg",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-3 w-3 text-primary" }), item.power]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "flex items-center gap-1 text-[11px] text-muted-foreground bg-muted/60 px-2.5 py-1 rounded-lg",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fuel, { className: "h-3 w-3 text-primary" }), item.fuel]
											})
										]
									})]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "p-5 pt-0",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between border-t border-border/60 pt-3.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-lg font-extrabold text-primary font-display",
											children: inr(item.price)
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] text-muted-foreground font-medium",
											children: "per day"
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-bold text-foreground",
												children: "Active"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
												checked: item.available,
												onCheckedChange: () => toggleEquipmentAvailability(item.id)
											})]
										})]
									})
								})]
							}, item.id))
						})]
					}),
					section === "Bookings" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl font-bold font-display",
							children: "Booking Requests"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground mt-0.5",
							children: "Approve, reject or inspect rental orders from farmers."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-4",
							children: bookingRequests.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									x: -16
								},
								animate: {
									opacity: 1,
									x: 0
								},
								transition: { delay: i * .06 },
								className: "surface-card rounded-3xl border border-border/80 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-soft",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: cn("mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-2xl text-xs font-bold", b.status === "pending" ? "bg-amber-500/15 text-amber-600" : b.status === "approved" ? "bg-emerald-500/15 text-emerald-600" : "bg-destructive/15 text-destructive"),
										children: b.status === "pending" ? "⏳" : b.status === "approved" ? "✓" : "✕"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 mb-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: cn("text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full", b.status === "pending" ? "bg-amber-500/15 text-amber-600 border border-amber-500/25" : b.status === "approved" ? "bg-emerald-500/15 text-emerald-600 border border-emerald-500/25" : "bg-destructive/15 text-destructive border border-destructive/25"),
												children: b.status
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-xs text-muted-foreground font-mono",
												children: ["#", b.id]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-base font-bold text-foreground",
											children: b.machine
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-xs text-muted-foreground mt-0.5",
											children: [
												"Renter: ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
													className: "text-foreground",
													children: b.renter
												}),
												" · ",
												b.dates
											]
										})
									] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-4 shrink-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-right",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xl font-extrabold text-primary font-display",
											children: inr(b.total)
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[10px] text-muted-foreground font-medium",
											children: "Total Payout"
										})]
									}), b.status === "pending" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											size: "sm",
											variant: "hero",
											onClick: () => updateBookingStatus(b.id, "approved"),
											className: "h-9 px-4 text-xs gap-1.5 rounded-xl cursor-pointer font-bold",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4" }), " Accept"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											size: "sm",
											variant: "destructive",
											onClick: () => updateBookingStatus(b.id, "rejected"),
											className: "h-9 px-4 text-xs gap-1.5 rounded-xl cursor-pointer font-bold",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleX, { className: "h-4 w-4" }), " Reject"]
										})]
									})]
								})]
							}, b.id))
						})]
					}),
					section === "Messages" && (() => {
						const currentMsg = messagesList.find((m) => m.id === activeMsgId) || messagesList[0];
						const handleSendMessage = (e) => {
							e.preventDefault();
							if (!newMessage.trim() || !currentMsg) return;
							addReplyToMessage(currentMsg.id, newMessage.trim(), userName);
							setNewMessage("");
							setMessagesList(getOwnerMessages());
							toast.success("Reply sent to farmer!");
						};
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "surface-card rounded-3xl border border-border/80 shadow-soft overflow-hidden",
							style: { height: "calc(100vh - 160px)" },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid lg:grid-cols-[300px_1fr] h-full",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "border-r border-border/60 flex flex-col bg-muted/20",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "px-5 py-4 border-b border-border/60",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-sm font-bold font-display",
											children: "Farmer Messages"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-xs text-muted-foreground mt-0.5",
											children: [messagesList.length, " active chats"]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex-1 overflow-y-auto p-2 space-y-1",
										children: messagesList.map((m) => {
											const isSelected = currentMsg?.id === m.id;
											const lastText = m.replies && m.replies.length > 0 ? m.replies[m.replies.length - 1].text : m.message;
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												onClick: () => setActiveMsgId(m.id),
												className: cn("w-full text-left p-3.5 rounded-2xl transition-all cursor-pointer flex items-center gap-3", isSelected ? "bg-primary/10 border border-primary/20 text-primary font-bold shadow-sm" : "hover:bg-accent text-foreground border border-transparent"),
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: cn("grid h-10 w-10 shrink-0 place-items-center rounded-full text-xs font-extrabold shadow-sm", isSelected ? "bg-primary text-primary-foreground" : "bg-primary/15 text-primary"),
													children: m.farmerName.charAt(0)
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "min-w-0 flex-1",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex items-center justify-between",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-xs truncate font-bold text-foreground",
																children: m.farmerName
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "text-[10px] text-muted-foreground",
																children: m.time
															})]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-[10px] font-semibold text-primary/80 truncate",
															children: m.equipmentName
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-[11px] text-muted-foreground truncate mt-0.5",
															children: lastText
														})
													]
												})]
											}, m.id);
										})
									})]
								}), currentMsg ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col bg-card",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between border-b border-border/60 px-6 py-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "grid h-10 w-10 place-items-center rounded-full bg-primary text-xs font-bold text-primary-foreground shadow-glow",
													children: currentMsg.farmerName.charAt(0)
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-sm font-bold text-foreground",
													children: currentMsg.farmerName
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "text-[11px] text-muted-foreground",
													children: ["Inquiring about: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
														className: "text-foreground font-semibold",
														children: currentMsg.equipmentName
													})]
												})] })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-600 text-xs font-bold border border-emerald-500/25",
												children: "● Online"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex-1 overflow-y-auto p-6 space-y-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-col max-w-[75%] mr-auto items-start",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "text-[10px] font-bold text-muted-foreground mb-1",
														children: [
															currentMsg.farmerName,
															" (",
															currentMsg.farmerRole,
															")"
														]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "px-4 py-3 rounded-2xl text-xs leading-relaxed bg-muted text-foreground rounded-bl-none border border-border/60 shadow-sm",
														children: currentMsg.message
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[10px] text-muted-foreground mt-1 px-1",
														children: currentMsg.time
													})
												]
											}), currentMsg.replies?.map((r, idx) => {
												const isMe = r.sender.includes("Owner") || r.sender === userName;
												return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: cn("flex flex-col max-w-[75%]", isMe ? "ml-auto items-end" : "mr-auto items-start"),
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-[10px] font-bold text-muted-foreground mb-1",
															children: r.sender
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: cn("px-4 py-3 rounded-2xl text-xs leading-relaxed shadow-sm", isMe ? "gradient-primary text-primary-foreground rounded-br-none" : "bg-muted text-foreground rounded-bl-none border border-border/60"),
															children: r.text
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-[10px] text-muted-foreground mt-1 px-1",
															children: r.time
														})
													]
												}, idx);
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
											onSubmit: handleSendMessage,
											className: "flex items-center gap-3 border-t border-border/60 px-6 py-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												value: newMessage,
												onChange: (e) => setNewMessage(e.target.value),
												placeholder: `Reply to ${currentMsg.farmerName.split(" ")[0]}...`,
												className: "h-11 text-xs rounded-xl flex-1 border-border/80"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
												type: "submit",
												size: "sm",
												variant: "hero",
												className: "h-11 px-6 rounded-xl gap-1.5 cursor-pointer font-bold shadow-glow",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" }), " Send Reply"]
											})]
										})
									]
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid place-items-center p-12 text-center text-muted-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs",
										children: "No active messages."
									})
								})]
							})
						});
					})(),
					section === "Payments" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xl font-bold font-display",
								children: "Earnings & Payouts"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground mt-0.5",
								children: "Track completed payouts and bank transfers."
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid sm:grid-cols-3 gap-5",
								children: [
									{
										label: "Total Revenue Earned",
										value: "₹7,80,000",
										color: "text-primary"
									},
									{
										label: "Pending Payout Balance",
										value: "₹34,200",
										color: "text-amber-600"
									},
									{
										label: "Next Scheduled Payout",
										value: "Oct 28, 2026",
										color: "text-foreground"
									}
								].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "surface-card rounded-3xl p-6 border border-border/80 shadow-soft",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-semibold text-muted-foreground",
										children: s.label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: cn("text-3xl font-extrabold mt-3 font-display", s.color),
										children: s.value
									})]
								}, s.label))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "surface-card rounded-3xl border border-border/80 shadow-soft overflow-hidden",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "px-6 py-4 border-b border-border/60",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-sm font-bold font-display",
										children: "Payout History"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
									className: "w-full text-left text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
										className: "border-b border-border/60 bg-muted/40 text-muted-foreground uppercase font-bold text-[10px]",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "py-3.5 px-6",
												children: "Date"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "py-3.5 px-6",
												children: "Reference"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "py-3.5 px-6",
												children: "Amount"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "py-3.5 px-6",
												children: "Status"
											})
										]
									}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
										className: "divide-y divide-border/40",
										children: [
											{
												date: "Oct 22, 2026",
												ref: "#BK-9842",
												amt: "₹23,400",
												status: "Transferred"
											},
											{
												date: "Oct 15, 2026",
												ref: "#BK-9831",
												amt: "₹14,500",
												status: "Transferred"
											},
											{
												date: "Oct 08, 2026",
												ref: "#BK-9805",
												amt: "₹8,200",
												status: "Transferred"
											}
										].map((row, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
											className: "hover:bg-muted/30 transition-colors",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "py-4 px-6",
													children: row.date
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "py-4 px-6 font-mono text-muted-foreground",
													children: row.ref
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "py-4 px-6 font-bold text-primary text-sm",
													children: row.amt
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "py-4 px-6",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-600 text-[11px] font-bold border border-emerald-500/25",
														children: row.status
													})
												})
											]
										}, i))
									})]
								})]
							})
						]
					}),
					section === "Analytics" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl font-bold font-display",
							children: "Machinery Utilization Analytics"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground mt-0.5",
							children: "Performance insights for your equipment portfolio."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid xl:grid-cols-2 gap-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "surface-card p-6 rounded-3xl border border-border/80 shadow-soft",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-sm font-bold font-display mb-4",
									children: "Utilization Rate (%)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-56",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
										width: "100%",
										height: "100%",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
											data: utilData,
											margin: {
												top: 4,
												right: 4,
												left: -16,
												bottom: 0
											},
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
													strokeDasharray: "3 3",
													stroke: "var(--color-border)",
													vertical: false
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
													dataKey: "m",
													tickLine: false,
													axisLine: false,
													fontSize: 11,
													tick: { fill: "var(--color-muted-foreground)" }
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
													tickLine: false,
													axisLine: false,
													fontSize: 11,
													tick: { fill: "var(--color-muted-foreground)" },
													domain: [0, 100]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
													contentStyle: {
														borderRadius: 16,
														border: "1px solid var(--color-border)",
														background: "var(--color-card)",
														boxShadow: "var(--shadow-soft)",
														fontSize: 12
													},
													formatter: (v) => [`${v}%`, "Utilization"]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
													dataKey: "rate",
													fill: "var(--color-primary)",
													radius: [
														8,
														8,
														0,
														0
													]
												})
											]
										})
									})
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-4",
								children: [[
									{
										rank: "1",
										name: "Combine Harvester XL",
										revenue: "₹2,84,000",
										util: "84%",
										color: "bg-primary/15 text-primary"
									},
									{
										rank: "2",
										name: "Compact Utility Tractor 45HP",
										revenue: "₹1,92,000",
										util: "74%",
										color: "bg-amber-500/15 text-amber-600"
									},
									{
										rank: "3",
										name: "Heavy Duty Rotavator",
										revenue: "₹68,500",
										util: "62%",
										color: "bg-sky-500/15 text-sky-600"
									}
								].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "surface-card rounded-3xl p-5 border border-border/80 shadow-soft flex items-center gap-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: cn("grid h-10 w-10 shrink-0 place-items-center rounded-2xl text-sm font-extrabold", m.color),
											children: ["#", m.rank]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex-1 min-w-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm font-bold truncate text-foreground",
												children: m.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "text-xs text-muted-foreground",
												children: [
													m.revenue,
													" · ",
													m.util,
													" utilization"
												]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "w-20 h-2 rounded-full bg-muted overflow-hidden shrink-0",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "h-full rounded-full bg-primary",
												style: { width: m.util }
											})
										})
									]
								}, m.rank)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "surface-card rounded-3xl p-5 border border-border/80 shadow-soft flex items-center gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-emerald-500/15 text-emerald-600 text-xl font-bold",
										children: "★"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-bold text-foreground",
										children: "Peak Season: Oct – Nov"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: "3.2× average booking inquiry rate"
									})] })]
								})]
							})]
						})]
					}),
					section === "Settings" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-6 max-w-2xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl font-bold font-display",
							children: "Profile & Payout Settings"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground mt-0.5",
							children: "Update your details and bank account for payouts."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: (e) => {
								e.preventDefault();
								toast.success("Settings saved successfully.");
							},
							className: "surface-card rounded-3xl border border-border/80 p-8 shadow-soft space-y-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-4 pb-6 border-b border-border/60",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid h-16 w-16 place-items-center rounded-3xl bg-primary/15 text-2xl font-extrabold text-primary shadow-sm",
										children: userName.charAt(0)
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-bold text-lg text-foreground font-display",
										children: userName
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-muted-foreground",
										children: [
											userRole,
											" · ",
											user?.email || "owner@agrirent.in"
										]
									})] })]
								}),
								[
									{
										label: "Full Name",
										defaultValue: userName
									},
									{
										label: "Email Address",
										defaultValue: user?.email || "owner@agrirent.in"
									},
									{
										label: "Payout Bank / UPI ID",
										defaultValue: "HDFC Bank · SB-98421094 (IFSC: HDFC0001294)"
									}
								].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									className: "text-xs font-semibold",
									children: f.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									defaultValue: f.defaultValue,
									className: "mt-1.5 h-11 text-sm rounded-xl"
								})] }, f.label)),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "pt-3 flex items-center justify-between gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										type: "submit",
										variant: "hero",
										size: "sm",
										className: "rounded-xl font-bold cursor-pointer px-6 h-11 shadow-glow",
										children: "Save Changes"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										type: "button",
										variant: "destructive",
										size: "sm",
										onClick: handleLogout,
										className: "rounded-xl font-bold cursor-pointer px-6 h-11 gap-2 shadow-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-4 w-4" }), " Log Out"]
									})]
								})
							]
						})]
					}),
					section === "Add Equipment" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 16
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { duration: .4 },
						className: "space-y-6 max-w-6xl pb-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/60 pb-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 text-xs text-muted-foreground mb-1 font-medium",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => setSection("My Equipment"),
											className: "hover:text-foreground transition-colors cursor-pointer",
											children: "My Equipment"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "/" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-foreground font-semibold",
											children: "List New Machinery"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-2xl font-extrabold font-display text-foreground",
									children: "List New Machinery"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground mt-0.5",
									children: "Publish your equipment to thousands of local farmers across India"
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-xs font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 border border-emerald-500/25 px-3 py-1.5 rounded-full flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3.5 w-3.5" }), " 100% Insured Listing"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "outline",
									size: "sm",
									onClick: () => {
										setSection("My Equipment");
										setImagePreview(null);
									},
									className: "rounded-xl cursor-pointer text-xs font-bold h-9",
									children: "✕ Cancel"
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid lg:grid-cols-[1fr_360px] gap-8 items-start",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								id: "add-equipment-form",
								onSubmit: handleAddEquipment,
								className: "space-y-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "surface-card p-6 rounded-3xl border border-border/80 shadow-soft space-y-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "text-sm font-bold font-display text-foreground",
												children: "1. Equipment Photo"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-muted-foreground",
												children: "Upload a clear photo of your machine"
											})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] font-bold text-primary uppercase bg-primary-soft px-2.5 py-0.5 rounded-full",
												children: "Required"
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											onClick: () => fileInputRef.current?.click(),
											className: "relative flex flex-col items-center justify-center w-full h-48 rounded-2xl border-2 border-dashed border-border/80 bg-muted/20 hover:bg-muted/40 cursor-pointer transition-all overflow-hidden group",
											children: [imagePreview ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: imagePreview,
												alt: "Preview",
												className: "absolute inset-0 h-full w-full object-cover"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-6 w-6 text-white" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xs text-white font-semibold",
													children: "Change Photo"
												})]
											})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-col items-center gap-2 text-muted-foreground p-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "h-6 w-6" })
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "text-center",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-xs font-bold text-foreground",
														children: "Click to upload photo from your device"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[11px] text-muted-foreground mt-0.5",
														children: "PNG, JPG, WEBP · High resolution recommended"
													})]
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												ref: fileInputRef,
												type: "file",
												accept: "image/*",
												className: "hidden",
												onChange: handleImageChange
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "surface-card p-6 rounded-3xl border border-border/80 shadow-soft space-y-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "text-sm font-bold font-display text-foreground",
												children: "2. Machine Identification"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "grid sm:grid-cols-2 gap-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
													className: "text-xs font-semibold",
													children: ["Machine Name ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-destructive",
														children: "*"
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													name: "name",
													placeholder: "e.g. John Deere 5310 55HP",
													className: "mt-1.5 h-11 text-sm rounded-xl",
													onChange: (e) => setFormPreview((p) => ({
														...p,
														name: e.target.value
													})),
													required: true
												})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
													className: "text-xs font-semibold",
													children: ["Category ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-destructive",
														children: "*"
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													name: "category",
													defaultValue: "Tractor",
													className: "mt-1.5 h-11 text-sm rounded-xl",
													onChange: (e) => setFormPreview((p) => ({
														...p,
														category: e.target.value
													})),
													required: true
												})] })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "grid sm:grid-cols-2 gap-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
													className: "text-xs font-semibold",
													children: ["Chassis / Registration No. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-destructive",
														children: "*"
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													name: "chassisNo",
													placeholder: "e.g. MHCJD5310P0012345",
													className: "mt-1.5 h-11 text-sm rounded-xl font-mono",
													required: true
												})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
													className: "text-xs font-semibold",
													children: ["Location / Village ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-destructive",
														children: "*"
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
													name: "location",
													defaultValue: "Amritsar, Punjab",
													className: "mt-1.5 h-11 text-sm rounded-xl",
													onChange: (e) => setFormPreview((p) => ({
														...p,
														location: e.target.value
													})),
													required: true
												})] })]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "surface-card p-6 rounded-3xl border border-border/80 shadow-soft space-y-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "text-sm font-bold font-display text-foreground",
												children: "3. Specs & Rental Pricing"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "grid sm:grid-cols-2 gap-4",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
														className: "text-xs font-semibold",
														children: "Engine Power (HP)"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
														name: "power",
														placeholder: "e.g. 55 HP",
														defaultValue: "50 HP",
														className: "mt-1.5 h-11 text-sm rounded-xl",
														onChange: (e) => setFormPreview((p) => ({
															...p,
															power: e.target.value
														}))
													})] }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
														className: "text-xs font-semibold",
														children: "Fuel Type"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
														name: "fuel",
														placeholder: "Diesel / PTO / Electric",
														defaultValue: "Diesel",
														className: "mt-1.5 h-11 text-sm rounded-xl",
														onChange: (e) => setFormPreview((p) => ({
															...p,
															fuel: e.target.value
														}))
													})] }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
														className: "text-xs font-semibold",
														children: ["Manufacture Year ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-destructive",
															children: "*"
														})]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
														name: "year",
														type: "number",
														defaultValue: (/* @__PURE__ */ new Date()).getFullYear(),
														min: "1990",
														max: (/* @__PURE__ */ new Date()).getFullYear(),
														className: "mt-1.5 h-11 text-sm rounded-xl",
														onChange: (e) => setFormPreview((p) => ({
															...p,
															year: e.target.value
														})),
														required: true
													})] }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Label, {
														className: "text-xs font-semibold",
														children: ["Daily Rate (₹/day) ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-destructive",
															children: "*"
														})]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
														name: "price",
														type: "number",
														defaultValue: "2800",
														min: "100",
														className: "mt-1.5 h-11 text-sm rounded-xl font-bold",
														onChange: (e) => setFormPreview((p) => ({
															...p,
															price: e.target.value
														})),
														required: true
													})] })
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-4 rounded-2xl bg-primary-soft/40 border border-primary/20 p-4 flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs font-bold text-primary",
													children: "Estimated Earnings Potential"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[11px] text-muted-foreground mt-0.5",
													children: "Based on average 10 days rental per harvest month"
												})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "text-lg font-extrabold text-primary font-display",
													children: [
														"₹",
														(Number(formPreview.price || 2800) * 10).toLocaleString("en-IN"),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-xs font-normal text-muted-foreground",
															children: "/mo"
														})
													]
												})]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-4 pt-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											type: "button",
											variant: "outline",
											onClick: () => {
												setSection("My Equipment");
												setImagePreview(null);
											},
											className: "flex-1 h-12 rounded-xl cursor-pointer font-bold",
											children: "Cancel"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											type: "submit",
											variant: "hero",
											className: "flex-[2] h-12 rounded-xl font-bold gap-2 cursor-pointer shadow-glow",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-4 w-4" }), " Publish Listing to Marketplace"]
										})]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "sticky top-20 space-y-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-extrabold uppercase tracking-widest text-primary",
									children: "Dynamic Live Preview"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 surface-card rounded-3xl border border-border/80 shadow-soft overflow-hidden",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative aspect-video bg-muted overflow-hidden",
										children: [imagePreview ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: imagePreview,
											alt: "Preview",
											className: "h-full w-full object-cover"
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-full w-full flex items-center justify-center",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "text-center text-muted-foreground/40",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "h-10 w-10 mx-auto" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[11px] mt-1 font-medium",
													children: "Upload photo to preview"
												})]
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "absolute top-3 left-3 px-3 py-1 rounded-full bg-emerald-500/90 text-[10px] font-bold text-white shadow-sm",
											children: "Available"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "p-5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
												className: "font-bold text-base leading-tight font-display text-foreground",
												children: formPreview.name || /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-muted-foreground/50 italic",
													children: "Machine Name..."
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "text-xs text-muted-foreground mt-1",
												children: [
													formPreview.category,
													" · ",
													formPreview.location
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-3 flex flex-wrap gap-2",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "flex items-center gap-1 text-[11px] bg-muted px-2.5 py-1 rounded-lg text-muted-foreground font-semibold",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-3 w-3 text-primary" }), formPreview.power]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "flex items-center gap-1 text-[11px] bg-muted px-2.5 py-1 rounded-lg text-muted-foreground font-semibold",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fuel, { className: "h-3 w-3 text-primary" }), formPreview.fuel]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "flex items-center gap-1 text-[11px] bg-muted px-2.5 py-1 rounded-lg text-muted-foreground font-semibold",
														children: ["📅 ", formPreview.year]
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-4 pt-3.5 border-t border-border/60 flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xl font-extrabold text-primary font-display",
													children: formPreview.price ? `₹${Number(formPreview.price).toLocaleString("en-IN")}` : "₹—"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[10px] text-muted-foreground font-medium",
													children: "per day"
												})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "flex items-center gap-1 text-xs font-bold text-amber-500",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3.5 w-3.5 fill-amber-400" }), " New Listing"]
												})]
											})
										]
									})]
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "surface-card p-5 rounded-3xl border border-border/80 shadow-soft space-y-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "text-xs font-extrabold uppercase tracking-wider text-foreground",
										children: "AgriRent Owner Guarantee"
									}), [{
										icon: ShieldCheck,
										title: "100% Machinery Insurance",
										desc: "Covers damage & breakdown during rentals."
									}, {
										icon: CircleCheck,
										title: "Guaranteed 24h Payouts",
										desc: "Transferred directly to your bank account."
									}].map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-3 pt-2 border-t border-border/50",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "grid h-7 w-7 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary mt-0.5",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(b.icon, { className: "h-4 w-4" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-bold text-foreground",
											children: b.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] text-muted-foreground mt-0.5",
											children: b.desc
										})] })]
									}, b.title))]
								})]
							})]
						})]
					}),
					editingItem && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "fixed inset-0 z-[9999] flex items-center justify-center p-4 overflow-y-auto",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							onClick: () => setEditingItem(null),
							className: "fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								scale: .94,
								y: 16
							},
							animate: {
								opacity: 1,
								scale: 1,
								y: 0
							},
							exit: {
								opacity: 0,
								scale: .94
							},
							className: "relative z-[10000] w-full max-w-lg rounded-3xl border border-border/80 bg-card p-6 sm:p-7 shadow-2xl space-y-5 text-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between border-b border-border/60 pb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid h-9 w-9 place-items-center rounded-xl bg-primary/15 text-primary font-bold",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "h-4 w-4" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-extrabold text-base font-display",
										children: "Edit Machinery & Pricing"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-xs text-muted-foreground",
										children: ["ID: ", editingItem.id]
									})] })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setEditingItem(null),
									className: "grid h-8 w-8 place-items-center rounded-xl bg-muted text-muted-foreground hover:text-foreground cursor-pointer",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit: handleSaveEditEquipment,
								className: "space-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										className: "text-xs font-bold mb-1 block",
										children: "Machine Name / Model"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										name: "name",
										defaultValue: editingItem.name,
										className: "h-10 text-xs rounded-xl",
										required: true
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-2 gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											className: "text-xs font-bold mb-1 block",
											children: "Category"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
											name: "category",
											defaultValue: editingItem.category,
											className: "w-full h-10 rounded-xl border border-border bg-background px-3 text-xs font-medium focus:outline-none focus:border-primary",
											children: [
												"Tractor",
												"Harvester",
												"Seeder",
												"Rotavator",
												"Cultivator",
												"Sprayer",
												"Mini Tools"
											].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: c,
												children: c
											}, c))
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											className: "text-xs font-bold mb-1 block",
											children: "Daily Rate (₹ / Day)"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											type: "number",
											name: "price",
											defaultValue: editingItem.price,
											className: "h-10 text-xs font-bold text-primary rounded-xl",
											required: true
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										className: "text-xs font-bold mb-1 block",
										children: "Location (District / State)"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										name: "location",
										defaultValue: editingItem.location,
										className: "h-10 text-xs rounded-xl",
										required: true
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-3 gap-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												className: "text-xs font-bold mb-1 block",
												children: "Engine Power"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												name: "power",
												defaultValue: editingItem.power,
												className: "h-10 text-xs rounded-xl"
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												className: "text-xs font-bold mb-1 block",
												children: "Fuel Type"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												name: "fuel",
												defaultValue: editingItem.fuel,
												className: "h-10 text-xs rounded-xl"
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
												className: "text-xs font-bold mb-1 block",
												children: "Model Year"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
												type: "number",
												name: "year",
												defaultValue: editingItem.year,
												className: "h-10 text-xs rounded-xl"
											})] })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-end gap-3 pt-3 border-t border-border/60",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											type: "button",
											variant: "outline",
											size: "sm",
											onClick: () => setEditingItem(null),
											className: "rounded-xl font-bold h-10 px-5 cursor-pointer",
											children: "Cancel"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											type: "submit",
											variant: "hero",
											size: "sm",
											className: "rounded-xl font-bold h-10 px-6 cursor-pointer shadow-glow",
											children: "Save Changes"
										})]
									})
								]
							})]
						})]
					})
				]
			})]
		})]
	});
}
function Counter({ to }) {
	const mv = (0, react_exports.useMotionValue)(0);
	const [display, setDisplay] = (0, import_react.useState)("0");
	(0, import_react.useEffect)(() => {
		const controls = (0, react_exports.animate)(mv, to, {
			duration: 1.4,
			ease: [
				.22,
				1,
				.36,
				1
			],
			onUpdate: (v) => setDisplay(Math.round(v).toLocaleString("en-IN"))
		});
		return () => controls.stop();
	}, [to, mv]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: display });
}
//#endregion
export { Dashboard as component };
