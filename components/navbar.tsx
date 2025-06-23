"use client";

import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import { FileSliders, LoaderCircle } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

import { Button } from "./ui/button";

export default function Navbar() {
  const { isLoaded } = useUser();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto container flex h-14 max-w-screen-xl items-center justify-between px-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-2"
        >
          <Link href="/" className="flex items-center gap-2">
            <FileSliders className="h-5 w-5 text-primary" />
            <span className="text-lg font-semibold tracking-tight">FolioEagen</span>
          </Link>
        </motion.div>

        <div className="flex items-center gap-2">
          {!isLoaded
            ? (
                <LoaderCircle className="h-5 w-5 animate-spin text-muted-foreground" />
              )
            : (
                <>
                  <SignedIn>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <UserButton
                        afterSignOutUrl="/"
                        appearance={{
                          elements: {
                            userButtonAvatarBox: "h-8 w-8",
                            userButtonPopoverCard: "shadow-lg border border-border/20",
                          },
                        }}
                      />
                    </motion.div>
                  </SignedIn>
                  <SignedOut>
                    <div className="flex items-center gap-2">
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <SignInButton mode="modal">
                          <Button variant="ghost" className="text-sm">
                            Sign in
                          </Button>
                        </SignInButton>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <SignUpButton mode="modal">
                          <Button className="text-sm">
                            Get started
                          </Button>
                        </SignUpButton>
                      </motion.div>
                    </div>
                  </SignedOut>
                </>
              )}
        </div>
      </div>
    </nav>
  );
}
