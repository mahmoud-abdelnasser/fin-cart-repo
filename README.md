# 🚚 Quick Quote Shipping Calculator

A production-ready **React + TypeScript + Material UI** implementation of an interactive shipping calculator designed for merchants who need fast, reliable courier comparisons.

This project demonstrates advanced frontend architecture, form orchestration, state management, performance optimization, and responsive UI design.

---

## 🌐 Live Demo

🔗 Demo URL: https://teal-cendol-caca6c.netlify.app/

---

## 🧠 Project Objective

Merchants must quickly decide which courier to use for a shipment.  
This application simplifies complex rate data into a clean, actionable interface that highlights:

- Cheapest option
- Fastest option
- Tax breakdown
- Delivery timeline

The focus of this implementation is not just UI — but architecture, scalability, and professional frontend engineering practices.

---

# 🏗️ Architecture Overview

### Core Stack

- React 18
- TypeScript
- Material UI (MUI v5)
- React Hook Form
- Yup (Schema Validation)
- Context API

---

# 📦 Features

## 1️⃣ Advanced Multi-Step Form

A three-stage stepper flow:

1. Origin Details
2. Destination Details
3. Package Dimensions (Weight / Volume)

### Validation Rules

- Weight must be greater than 0
- International shipping only enabled when valid ISO country codes are selected
- Real-time validation feedback
- Schema-based validation using Yup

### Performance Strategy

- React Hook Form minimizes re-renders
- Controlled components only where required
- `useMemo` used for optimization
- Context values are memoized

---

## 2️⃣ Courier Card Component

Highly modular and reusable component.

### Displays:

- Courier Logo
- Courier Name
- Base Price
- Tax
- Total Price
- Estimated Delivery Time

### Dynamic Highlighting:

- "Cheapest" badge
- "Fastest" badge

Calculated programmatically from result set.

---

## 3️⃣ Centralized State Management

### QuoteContext

Prevents prop drilling and centralizes:

- Shipment data
- Selected courier
- Rate results
- Loading state
- Error state

---

## 4️⃣ Asynchronous State Handling

Three polished states:

### 🔹 Initial / Empty State

Before search is triggered.

### 🔹 Searching State

Skeleton loaders displayed while simulating API request.

### 🔹 Results State

Courier cards rendered in responsive grid.

### 🔹 No Results State

Clear empty message when route not supported.

---

## 📱 Responsive Layout

Mobile-first approach:

- Small screens → Vertical stacking
- Medium & up → Multi-column comparison grid

Built using:

- MUI Grid
- MUI Box
- Flex utilities

---

# 🎨 Design System & Theming

- Centralized MUI theme
- Consistent spacing system
- Reusable color tokens
- `sx` utilities
- Accessible contrast ratios

Brand consistency maintained across all components.

---

# 📂 Project Structure

src/
├── components/
│ ├── CourierCard/
│ ├── ShippmentDetails/
│
├── context/
│ └── QuoteContext.tsx
│
├── hooks/
│
├── utils/
│ ├── helper.ts
│ └── validation.ts
│
├── constants/
│ └── countries.ts
│ └── courios.ts
│
├── pages/
│ └── Home.tsx
│
├── App.tsx
└── index.tsx

---

## ⚙️ Installation

```bash
# Clone the repo
git clone https://github.com/mahmoud-abdelnasser/fin-cart-repo.git
cd fin-cart-repo

# Install dependencies
npm install

# Start server
npm start

---

## ⚙️ Author

Mahmoud Abdelnasser
Frontend Engineer | React | TypeScript
```
