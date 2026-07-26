import { C as __toESM, c as createServerFn, i as TSS_SERVER_FUNCTION, u as getStartContext } from "./createServerFn-BH-xKMvN.mjs";
import { t as bcryptjs_default } from "../_libs/bcryptjs.mjs";
import { t as require_jsonwebtoken } from "../_libs/jsonwebtoken+[...].mjs";
import { t as require_mongoose } from "../_libs/mongoose+mpath+mquery+sift.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/server-u-ECFr7w.js
var import_jsonwebtoken = /* @__PURE__ */ __toESM(require_jsonwebtoken());
var import_mongoose = /* @__PURE__ */ __toESM(require_mongoose());
var getGlobalStartContext = () => {
	const context = getStartContext().contextAfterGlobalMiddlewares;
	if (!context) throw new Error(`Global context not set yet, you are calling getGlobalStartContext() before the global middlewares are applied.`);
	return context;
};
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://biswajitparhi27:parhi%408782@agrirent.vwhemnq.mongodb.net/agrirent?retryWrites=true&w=majority&appName=AgriRent";
if (!MONGODB_URI) throw new Error("Please define the MONGODB_URI environment variable inside .env");
var cached = global.mongooseCache || {
	conn: null,
	promise: null
};
if (!global.mongooseCache) global.mongooseCache = cached;
async function connectDB() {
	if (cached.conn) return cached.conn;
	if (!cached.promise) cached.promise = import_mongoose.default.connect(MONGODB_URI, {
		bufferCommands: false,
		serverSelectionTimeoutMS: 4e3
	}).then((m) => {
		console.log("Connected to MongoDB Atlas successfully");
		return m;
	});
	try {
		cached.conn = await cached.promise;
	} catch (e) {
		cached.promise = null;
		throw e;
	}
	return cached.conn;
}
var UserSchema = new import_mongoose.Schema({
	name: {
		type: String,
		required: [true, "Name is required"],
		trim: true
	},
	email: {
		type: String,
		required: [true, "Email is required"],
		unique: true,
		lowercase: true,
		trim: true
	},
	password: {
		type: String,
		required: [true, "Password is required"],
		select: false
	},
	role: {
		type: String,
		enum: [
			"farmer",
			"owner",
			"admin"
		],
		default: "farmer",
		required: true
	},
	phone: {
		type: String,
		default: ""
	},
	avatar: {
		type: String,
		default: ""
	},
	isVerified: {
		type: Boolean,
		default: true
	}
}, { timestamps: true });
var UserModel = import_mongoose.default.models.User || import_mongoose.default.model("User", UserSchema);
var JWT_SECRET = process.env.JWT_SECRET || "agrirent_secure_super_secret_jwt_key_2026_field_motion_forge";
var COOKIE_NAME = "agrirent_session";
var DEMO_ACCOUNTS = {
	"admin@agrirent.in": {
		name: "Anil Parhi (Admin)",
		role: "admin",
		pass: "Admin@123"
	},
	"owner@agrirent.in": {
		name: "Harpreet Singh (Owner)",
		role: "owner",
		pass: "Owner@123"
	},
	"farmer@agrirent.in": {
		name: "Rajesh Kumar (Farmer)",
		role: "farmer",
		pass: "Farmer@123"
	}
};
function getSessionCookieFromRequest() {
	try {
		const cookieHeader = getGlobalStartContext()?.request?.headers?.get("cookie");
		if (!cookieHeader) return void 0;
		const match = cookieHeader.match(new RegExp(`(?:^|; )${COOKIE_NAME}=([^;]*)`));
		return match ? decodeURIComponent(match[1]) : void 0;
	} catch {
		return;
	}
}
var registerServerFn_createServerFn_handler = createServerRpc({
	id: "fcf3628aef6eb4608f66fe9e0a23ed16e6d62b5d2100122ae11faa924def22aa",
	name: "registerServerFn",
	filename: "src/lib/auth/server.ts"
}, (opts) => registerServerFn.__executeServer(opts));
var registerServerFn = createServerFn({ method: "POST" }).validator((data) => data).handler(registerServerFn_createServerFn_handler, async ({ data }) => {
	const email = data.email.trim().toLowerCase();
	if (DEMO_ACCOUNTS[email]) throw new Error("Email already registered. Please try a different email or sign in.");
	try {
		await connectDB();
		if (await UserModel.findOne({ email })) throw new Error("Email already registered. Please try a different email or sign in.");
		const salt = await bcryptjs_default.genSalt(10);
		const hashedPassword = await bcryptjs_default.hash(data.password, salt);
		const newUser = await UserModel.create({
			name: data.name.trim(),
			email,
			password: hashedPassword,
			role: data.role || "farmer",
			phone: data.phone || ""
		});
		return {
			success: true,
			user: {
				userId: newUser._id.toString(),
				name: newUser.name,
				email: newUser.email,
				role: newUser.role,
				phone: newUser.phone,
				avatar: newUser.avatar
			}
		};
	} catch (err) {
		if (err instanceof Error) {
			const msg = err.message.toLowerCase();
			if (!(msg.includes("econnrefused") || msg.includes("querysrv") || msg.includes("getaddrinfo") || msg.includes("enotfound") || msg.includes("mongonetworkerror") || msg.includes("bad auth") || msg.includes("authentication failed") || msg.includes("connect") || msg.includes("timeout"))) throw err;
		}
		return {
			success: true,
			user: {
				userId: `usr_${Date.now()}`,
				name: data.name.trim(),
				email,
				role: data.role || "farmer",
				phone: data.phone || ""
			}
		};
	}
});
var loginServerFn_createServerFn_handler = createServerRpc({
	id: "6a71e99579dfd6586d8208aea09fd1f903f73c7d5cebe95d24505c22a0b33faa",
	name: "loginServerFn",
	filename: "src/lib/auth/server.ts"
}, (opts) => loginServerFn.__executeServer(opts));
var loginServerFn = createServerFn({ method: "POST" }).validator((data) => data).handler(loginServerFn_createServerFn_handler, async ({ data }) => {
	const email = data.email.trim().toLowerCase();
	try {
		await connectDB();
		const user = await UserModel.findOne({ email }).select("+password");
		if (!user) {
			const demo = DEMO_ACCOUNTS[email];
			if (demo) {
				if (demo.pass !== data.password) throw new Error("__WRONG_PASSWORD__");
				return {
					success: true,
					user: {
						userId: `demo_${demo.role}_101`,
						name: demo.name,
						email,
						role: demo.role,
						phone: "+91 9876543210"
					}
				};
			}
			throw new Error("__EMAIL_NOT_FOUND__");
		}
		if (user.password) {
			if (await bcryptjs_default.compare(data.password, user.password)) return {
				success: true,
				user: {
					userId: user._id.toString(),
					name: user.name,
					email: user.email,
					role: user.role,
					phone: user.phone,
					avatar: user.avatar
				}
			};
			throw new Error("__WRONG_PASSWORD__");
		}
	} catch (err) {
		if (err instanceof Error && (err.message === "__EMAIL_NOT_FOUND__" || err.message === "__WRONG_PASSWORD__")) throw err;
	}
	const demo = DEMO_ACCOUNTS[email];
	if (demo) {
		if (demo.pass !== data.password) throw new Error("__WRONG_PASSWORD__");
		return {
			success: true,
			user: {
				userId: `demo_${demo.role}_101`,
				name: demo.name,
				email,
				role: demo.role,
				phone: "+91 9876543210"
			}
		};
	}
	throw new Error("__EMAIL_NOT_FOUND__");
});
var logoutServerFn_createServerFn_handler = createServerRpc({
	id: "8fee1fb5589c8b12ecdf2a77a202bb4988203b3389d3d5251adf7e61fed4dbcd",
	name: "logoutServerFn",
	filename: "src/lib/auth/server.ts"
}, (opts) => logoutServerFn.__executeServer(opts));
var logoutServerFn = createServerFn({ method: "POST" }).handler(logoutServerFn_createServerFn_handler, async () => {
	return { success: true };
});
var getCurrentUserServerFn_createServerFn_handler = createServerRpc({
	id: "da2ebad19ad65fb12cbcf3a0cccff8b1a08a319bba88dc7d0daf47b589beb282",
	name: "getCurrentUserServerFn",
	filename: "src/lib/auth/server.ts"
}, (opts) => getCurrentUserServerFn.__executeServer(opts));
var getCurrentUserServerFn = createServerFn({ method: "GET" }).handler(getCurrentUserServerFn_createServerFn_handler, async () => {
	try {
		const token = getSessionCookieFromRequest();
		if (!token) return { user: null };
		return { user: import_jsonwebtoken.default.verify(token, JWT_SECRET) };
	} catch {
		return { user: null };
	}
});
//#endregion
export { getCurrentUserServerFn_createServerFn_handler, loginServerFn_createServerFn_handler, logoutServerFn_createServerFn_handler, registerServerFn_createServerFn_handler };
