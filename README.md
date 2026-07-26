# 🌾 AgriRent — Agricultural Equipment Rental Marketplace

AgriRent is a modern, full-stack web application designed to revolutionize farm machinery sharing. It seamlessly connects **Farmers** looking to rent affordable agricultural machinery with **Equipment Owners** seeking to monetize their idle tractors, harvesters, seeders, and specialized farm tools.

---

## 🌟 Key Features

### 🚜 1. Equipment Marketplace (`/equipment`)
- **Smart Filtering & Search**: Search machinery by keyword, filter by category (*Tractors, Harvesters, Seeders, Rotavators, Cultivators, Sprayers, Mini Tools*), maximum daily rate slider, and sort by rating or price.
- **Active Availability Sync**: Deactivated equipment by owners is automatically hidden from farmers in real time.
- **Dynamic Price Calculation**: Real-time daily rate calculation based on selected pickup and return dates, including service fees and insurance breakdown.

### 📅 2. Overlapping Booking & Date Protection
- **Date Range Overlap Detection**: Prevents double-booking by analyzing existing confirmed reservations.
- **Availability Alert Banner**: Instant feedback if a machine is already booked for the chosen date range with disabled reservation triggers.

### 💬 3. Direct Farmer-to-Owner Live Messaging
- **Instant Communication**: Farmers can send direct inquiries to machinery owners straight from the equipment page.
- **Owner Inbox & Reply Center**: Machinery owners receive notifications and can respond directly to farmer inquiries inside their Dashboard.
- **Persistent Message Store**: Conversation history is maintained in real-time across sessions.

### 📊 4. Owner Management Dashboard (`/dashboard`)
- **Inventory Control**: Add new equipment with photos, horsepower, fuel type, location, and daily rate.
- **Edit & Pricing Manager**: Interactive modal to edit listed machine specs and adjust daily rental pricing (`₹/day`).
- **Live Status Toggle**: Instantly activate or deactivate equipment availability across the marketplace.
- **Booking Requests**: Accept or decline incoming rental requests with one click.

### 🔐 5. Multi-Role Authentication (`/auth`)
- **Supported Roles**: `Farmer`, `Owner`, and `Admin`.
- **Persistent Auth & Local Fallback**: Supports both MongoDB connection and resilient client-side storage for offline/demo environments.

---

## 🔑 Demo Login Credentials

Try out different user perspectives using the pre-configured credentials:

| Role | Email | Password | Access Rights |
| :--- | :--- | :--- | :--- |
| **Owner** | `owner@agrirent.in` | `Owner@123` | Equipment Inventory, Pricing Edit, Messages, Booking Approvals |
| **Farmer** | `farmer@agrirent.in` | `Farmer@123` | Search, Rent Machinery, Live Messaging to Owners |
| **Admin** | `admin@agrirent.in` | `Admin@123` | Platform Overview & System Analytics |

---

## 🛠️ Technology Stack

- **Framework**: [TanStack Start](https://tanstack.com/router/latest) (Vite + SSR / Nitro)
- **UI Components & Styling**: React 19, Tailwind CSS, Lucide Icons, Framer Motion
- **Database & Auth**: MongoDB / Mongoose, JWT, BcryptJS, LocalStorage Sync Fallback
- **Form & Validation**: Zod, React Hook Form
- **Notifications**: Sonner Toast Notifications

---

## 📁 Project Architecture

```
field-motion-forge/
├── src/
│   ├── components/
│   │   ├── equipment/      # Marketplace equipment cards & filters
│   │   ├── site/           # Navigation headers, footers & hero sections
│   │   └── ui/             # Reusable UI primitives (Button, Input, Switch, Modal)
│   ├── lib/
│   │   ├── auth/           # Session context, login/register server functions
│   │   ├── db/             # MongoDB database connection & user models
│   │   └── equipment-data.ts # Equipment data stores, bookings, and messaging engine
│   ├── routes/
│   │   ├── index.tsx       # Landing Page
│   │   ├── auth.tsx        # Authentication Page (Sign in / Register)
│   │   ├── equipment.index.tsx # Equipment Catalog Page
│   │   ├── equipment.$id.tsx   # Machinery Detail Page & Inquiries
│   │   ├── booking.tsx     # Streamlined Checkout Flow
│   │   ├── dashboard.tsx   # Machinery Owner Dashboard
│   │   └── admin.tsx       # Admin Analytics Overview
│   └── styles.css          # Core CSS tokens, gradients, and custom utility classes
├── public/                 # Static assets, logos, and favicons
├── vite.config.ts          # Vite build configuration
├── package.json            # Project dependencies & scripts
└── README.md               # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js** (v18.0 or higher) and **npm** installed on your system.

### 1. Clone the Repository

```bash
git clone <repository-url>
cd field-motion-forge
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

The application will be accessible locally at `http://localhost:3000`.

### 4. Build for Production

To create an optimized production build:

```bash
npm run build
```

---

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).
