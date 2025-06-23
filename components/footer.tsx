import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  /* --- data -------------------------------------------------------------- */
  const footerLinks = [
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
    { title: "Terms of Service", href: "/terms" },
    { title: "Privacy Policy", href: "/privacy-policy" },
  ] as const;

  const socialMedia = [
    { icon: Instagram, label: "Instagram", href: "/" },
    { icon: Twitter, label: "Twitter", href: "/" },
    { icon: Facebook, label: "Facebook", href: "/" },
  ] as const;

  /* --- view -------------------------------------------------------------- */
  return (
    <footer className="bg-background border-t shadow-lg">
      {/* container */}
      <div className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 lg:px-8">
        {/* stack all children on mobile, space them out on larger screens */}
        <div className="flex flex-col items-center gap-6 sm:gap-8">
          {/* 1 ▸ page links -------------------------------------------------- */}
          <ul className="flex flex-wrap justify-center gap-4 text-sm sm:gap-6">
            {footerLinks.map(link => (
              <li key={link.title}>
                <Link
                  href={link.href}
                  className="transition-opacity hover:opacity-80 text-muted-foreground"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* 2 ▸ social icons --------------------------------------------- */}
          <ul className="flex justify-center gap-6 sm:gap-8">
            {socialMedia.map(({ icon: Icon, href, label }) => (
              <li key={label}>
                <Link
                  href={href}
                  aria-label={label}
                  className="transition-opacity hover:opacity-80 text-muted-foreground"
                >
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </Link>
              </li>
            ))}
          </ul>

          {/* 3 ▸ copyright -------------------------------------------------- */}
          <p className="text-center text-xs sm:text-sm text-muted-foreground">
            &copy;
            {" "}
            {new Date().getFullYear()}
&nbsp;Portfoliogen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
