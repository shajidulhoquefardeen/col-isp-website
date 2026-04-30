"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

const NAV_LINKS = [
  { label: "For Family", href: "/for-family" },
  { label: "For Enterprise", href: "/for-enterprise" },
  { label: "About Us", href: "/about" },
  { label: "Support", href: "/support" },
  { label: "Wi-Fi Zones", href: "/wifi-zones" },
  { label: "Career", href: "/career" },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        sticky top-0 z-50 w-full
        bg-[#051d40] text-white
        transition-shadow duration-300
        ${scrolled ? "shadow-lg shadow-black/20" : ""}
      `}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* ── Logo ── */}
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <Image
            src="/images/COLLOGO-white.png"
            alt="Chittagong Online Limited"
            width={90}
            height={36}
            className="h-9 w-auto"
            priority
          />
        </Link>

        {/* ── Desktop Links ── */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`
                  rounded-md px-3 py-2 text-sm font-medium
                  transition-colors duration-200
                  ${
                    pathname === link.href || pathname?.startsWith(link.href + "/")
                      ? "text-[#D71920] font-semibold"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  }
                `}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* ── Right Controls ── */}
        <div className="flex items-center gap-1">
          <ThemeToggle />

          {/* Mobile Hamburger */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white/80 hover:text-white hover:bg-white/10 lg:hidden"
                  aria-label="Open navigation menu"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              }
            />

            <SheetContent
              side="right"
              className="w-72 border-l-navy/30 bg-[#051d40] text-white"
            >
              <SheetHeader className="border-b border-white/10 pb-4">
                <SheetTitle className="text-white">
                  <Image
                    src="/images/COLLOGO-white.png"
                    alt="COL"
                    width={80}
                    height={32}
                    className="h-8 w-auto"
                  />
                </SheetTitle>
              </SheetHeader>

              <nav className="mt-6 flex flex-col gap-1 px-2">
                {NAV_LINKS.map((link) => (
                  <SheetClose
                    key={link.href}
                    render={
                      <Link
                        href={link.href}
                        className={`
                          rounded-md px-4 py-3 text-sm font-medium
                          transition-colors duration-200
                          ${
                            pathname === link.href || pathname?.startsWith(link.href + "/")
                              ? "text-[#D71920] font-semibold bg-white/5"
                              : "text-white/80 hover:bg-white/10 hover:text-white"
                          }
                        `}
                      >
                        {link.label}
                      </Link>
                    }
                  />
                ))}
              </nav>

              <div className="mt-8 border-t border-white/10 px-2 pt-4">
                <div className="flex items-center gap-3 text-sm text-white/60">
                  <ThemeToggle />
                  <span>Toggle theme</span>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
