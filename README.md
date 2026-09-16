# Next.js Practical

This repository contains practical implementations of important **Next.js App Router concepts** including Client-Side Rendering (CSR), Tailwind CSS, Layouts, and Route Groups.

## 📚 Practicals Covered

### 1. Client-Side Rendering (CSR)

A product page that fetches product information after the component loads in the browser.

**Concepts used:**

* Client Components
* `"use client"`
* `useEffect`
* `useState`
* Fetch API

**Route:**

```text
/products
```

**URL:**

```text
http://localhost:3000/products
```

---

### 2. Tailwind CSS

A heading styled using Tailwind CSS utility classes.

**Tailwind utilities used:**

```text
text-4xl       → Font size
font-bold      → Font weight
tracking-wide  → Letter spacing
mb-6           → Bottom spacing
```

**Route:**

```text
/
```

**URL:**

```text
http://localhost:3000/
```

---

### 3. Layout

A common layout containing a navigation bar that appears across the application's pages.

The layout is created using:

```text
app/layout.tsx
```

The navigation provides links to:

* Home
* Products
* Dashboard
* Users

The layout is shared across the pages using the Next.js App Router layout system.

---

### 4. Route Groups

A route group named `(admin)` is used to organize Dashboard and Users pages without adding `admin` to the URL.

### Folder Structure

```text
app/
├── layout.tsx
├── page.tsx
│
├── products/
│   └── page.tsx
│
└── (admin)/
    ├── dashboard/
    │   └── page.tsx
    │
    └── users/
        └── page.tsx
```

Because `(admin)` is a route group, it does not appear in the URL.

### Dashboard

```text
http://localhost:3000/dashboard
```

### Users

```text
http://localhost:3000/users
```

---

## 📁 Project Structure

```text
nextjs-practical/
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   │
│   ├── products/
│   │   └── page.tsx
│   │
│   └── (admin)/
│       ├── dashboard/
│       │   └── page.tsx
│       │
│       └── users/
│           └── page.tsx
│
├── public/
│
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

## 🚀 Getting Started

Clone the repository:

```bash
git clone https://github.com/itzsonu/nextjs-practical.git
```

Navigate to the project:

```bash
cd nextjs-practical
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the application in your browser:

```text
http://localhost:3000
```

## 🌐 Available Routes

| Page      | URL          | Concept      |
| --------- | ------------ | ------------ |
| Home      | `/`          | Tailwind CSS |
| Products  | `/products`  | CSR          |
| Dashboard | `/dashboard` | Route Group  |
| Users     | `/users`     | Route Group  |

## 🛠️ Technologies Used

* Next.js
* React
* TypeScript
* Tailwind CSS
* Fetch API
* Next.js App Router

## 🎯 Learning Objectives

This practical demonstrates how to:

* Implement Client-Side Rendering in Next.js.
* Use React hooks such as `useState` and `useEffect`.
* Style components using Tailwind CSS utility classes.
* Create shared layouts using the App Router.
* Use Route Groups to organize application routes.
* Build and navigate between multiple pages in Next.js.

## 👨‍💻 Author

**MRITUNJAI KUMAR**

GitHub: [itzsonu](https://github.com/itzsonu)

