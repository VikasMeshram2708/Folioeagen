"use client";
import { SignedIn, useUser } from "@clerk/nextjs";
import Link from "next/link";

import { Button } from "../ui/button";

export default function DashNav() {
  const { user } = useUser();
  return (
    <nav className="bg-background p-3">
      <div className="md:max-w-3xl lg:max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-semibold">
          <Link href="/">Navbar</Link>
        </h1>
        <div>
          <SignedIn>
            <Button>
              Welcome,
              {" "}
              {user?.firstName}
            </Button>
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}
