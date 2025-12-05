
# Mini shadcn App Task

## Task Description

You will build a tiny 3-page app using **Next.js (App Router)** and **shadcn components**.

### Pages to Create

* `/` → Home
* `/products` → Products
* `/profile` → Profile

### Requirements per Page

1. Each page must have:

   * A **title**
   * A **description**
   * At least **two shadcn Buttons**
   * Buttons should navigate between pages
   * Each page must be wrapped in a **shadcn Card**

### Navigation Rules

| From     | Buttons Should Go To |
| -------- | -------------------- |
| Home     | Products & Profile   |
| Products | Home & Profile       |
| Profile  | Home & Products      |

### Learning Goals

* Import and use **shadcn Button and Card** components
* Implement **App Router page-based navigation**
* Practice **layout composition**
* Learn **reusable UI patterns** with shadcn components

### Optional Challenges

* Add active page highlighting for buttons
* Include **icons** in buttons using `lucide-react`
* Convert cards into a **dashboard grid**
* Add a **navbar** in `app/layout.jsx` to appear on all pages

---

# Solution

### 1. `app/page.jsx` → HOME

```jsx
"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background p-6">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Home</CardTitle>
          <CardDescription>Welcome to the mini shadcn app.</CardDescription>
        </CardHeader>

        <CardContent className="flex gap-4">
          <Button asChild>
            <Link href="/products">Go to Products</Link>
          </Button>

          <Button variant="secondary" asChild>
            <Link href="/profile">Go to Profile</Link>
          </Button>
        </CardContent>
      </Card>
    </main>
  )
}
```

### 2. `app/products/page.jsx` → PRODUCTS

```jsx
"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function ProductsPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background p-6">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Products</CardTitle>
          <CardDescription>Browse your awesome products.</CardDescription>
        </CardHeader>

        <CardContent className="flex gap-4">
          <Button asChild>
            <Link href="/">Back to Home</Link>
          </Button>

          <Button variant="secondary" asChild>
            <Link href="/profile">Go to Profile</Link>
          </Button>
        </CardContent>
      </Card>
    </main>
  )
}
```

### 3. `app/profile/page.jsx` → PROFILE

```jsx
"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function ProfilePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background p-6">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Profile</CardTitle>
          <CardDescription>Your account information.</CardDescription>
        </CardHeader>

        <CardContent className="flex gap-4">
          <Button asChild>
            <Link href="/">Back to Home</Link>
          </Button>

          <Button variant="secondary" asChild>
            <Link href="/products">Go to Products</Link>
          </Button>
        </CardContent>
      </Card>
    </main>
  )
}
```
