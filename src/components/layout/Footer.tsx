import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Globe, Video, Briefcase } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const FOOTER_LINKS = [
  { label: "Home", href: "/" },
  { label: "Enterprise", href: "/enterprise" },
  { label: "About Us", href: "/about" },
  { label: "Career", href: "/career" },
  { label: "Contact Us", href: "/contact" },
  { label: "Support", href: "/support" },
  { label: "Wi-Fi Zones", href: "/wifi-zones" },
] as const;

const SOCIAL_LINKS = [
  { icon: Globe, href: "#", label: "Facebook" },
  { icon: Video, href: "#", label: "YouTube" },
  { icon: Briefcase, href: "#", label: "LinkedIn" },
] as const;

export function Footer() {
  return (
    <footer className="bg-[#051d40] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="space-y-4">
            <Image
              src="/images/COLLOGO-white.png"
              alt="Chittagong Online Limited"
              width={110}
              height={44}
              className="h-11 w-auto"
            />
            <p className="text-sm leading-relaxed text-white/70">
              Licensed ISP and IPTSP delivering internet, internet telephony,
              and innovative IT solutions with the most reliable network
              infrastructure in Chittagong.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/90">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/90">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-white/60">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-white/40" />
                <span>+880-31-2850085</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/60">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-white/40" />
                <span>info@col.net.bd</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/60">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/40" />
                <span>
                  COL Tower, 1207/1 CDA Avenue,
                  <br />
                  Chittagong, Bangladesh
                </span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/90">
              Follow Us
            </h3>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 transition-all duration-200 hover:border-white/50 hover:text-white hover:bg-white/10"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-2 text-xs text-white/40 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Chittagong Online Limited. All rights
            reserved.
          </p>
          <p>Licensed ISP & IPTSP — BTRC</p>
        </div>
      </div>
    </footer>
  );
}
