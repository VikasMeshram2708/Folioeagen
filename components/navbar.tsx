"use client";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

import { Button } from "./ui/button";

export default function Navbar() {
  const { isLoaded, isSignedIn } = useUser();
  return (
    <nav className="bg-background p-3">
      <div className="md:max-w-3xl lg:max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-semibold">
          <Link href="/">Navbar</Link>
        </h1>
        <div>
          {isLoaded && isSignedIn
            ? (
                <UserButton />
              )
            : (
                <div className="flex items-center gap-4">
                  <SignInButton>
                    <Button variant="link">
                      Sign In
                    </Button>
                  </SignInButton>
                  <SignUpButton>
                    <Button>
                      Sign Up
                    </Button>
                  </SignUpButton>
                </div>
              )}
        </div>
      </div>
    </nav>
  );
}
