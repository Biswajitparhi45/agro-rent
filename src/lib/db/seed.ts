import dns from "dns";
if (process.env.NODE_ENV === "development" && !process.env.VERCEL) {
  try {
    dns.setServers(["8.8.8.8", "1.1.1.1"]);
  } catch {}
}

import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { UserModel } from "./models/user.model";

const MONGODB_URI = "mongodb+srv://biswajitparhi27:parhi%408782@agrirent.vwhemnq.mongodb.net/agrirent?authSource=admin&retryWrites=true&w=majority&appName=AgriRent";

async function seed() {
  try {
    console.log("Connecting to MongoDB Atlas with authSource=admin...");
    await mongoose.connect(MONGODB_URI);

    const salt = await bcrypt.genSalt(10);
    const adminPassword = await bcrypt.hash("Admin@123", salt);
    const ownerPassword = await bcrypt.hash("Owner@123", salt);
    const farmerPassword = await bcrypt.hash("Farmer@123", salt);

    const demoUsers = [
      {
        name: "Anil Parhi (Admin)",
        email: "admin@agrirent.in",
        password: adminPassword,
        role: "admin",
        phone: "+91 9876543210",
        isVerified: true,
      },
      {
        name: "Harpreet Singh (Owner)",
        email: "owner@agrirent.in",
        password: ownerPassword,
        role: "owner",
        phone: "+91 9876543211",
        isVerified: true,
      },
      {
        name: "Rajesh Kumar (Farmer)",
        email: "farmer@agrirent.in",
        password: farmerPassword,
        role: "farmer",
        phone: "+91 9876543212",
        isVerified: true,
      },
    ];

    for (const u of demoUsers) {
      await UserModel.findOneAndUpdate(
        { email: u.email },
        u,
        { upsert: true, new: true, setDefaultsOnInsert: true }
      );
      console.log(`Seeded account: ${u.email} (${u.role.toUpperCase()})`);
    }

    console.log("Database seeding completed successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Seeding failed:", error);
    process.exit(1);
  }
}

seed();
