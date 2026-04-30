import type { Metadata } from "next";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Wi-Fi Zones — Chittagong Online Limited",
  description: "Locate our high-speed Wi-Fi zones across Chittagong.",
};

const WIFI_ZONES = [
  {
    name: "GEC Intersection",
    image: "/images/news/wifi-zones.png", // Using existing dummy image as placeholder
    status: "Active",
  },
  {
    name: "Agrabad Commercial Area",
    image: "/images/news/wifi-zones.png",
    status: "Active",
  },
  {
    name: "New Market Area",
    image: "/images/news/wifi-zones.png",
    status: "Active",
  },
  {
    name: "Chawkbazar",
    image: "/images/news/wifi-zones.png",
    status: "Coming Soon",
  },
];

export default function WifiZonesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-muted/20">
      {/* Header */}
      <section className="bg-[#051d40] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Free Wi-Fi Zones
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Stay connected on the go. Find COL's high-speed public Wi-Fi access points across major hubs in Chittagong.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {WIFI_ZONES.map((zone, i) => (
              <Card key={i} className="overflow-hidden border-border/60 shadow-sm hover:shadow-md transition-shadow">
                <div className="relative aspect-video w-full bg-muted">
                  {/* Map Placeholder Image */}
                  <Image 
                    src={zone.image} 
                    alt={`Map showing ${zone.name}`}
                    fill
                    className="object-cover opacity-80"
                  />
                  {/* Pin Drop Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-primary/90 p-3 rounded-full shadow-lg border-2 border-white animate-bounce">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-5 text-center">
                  <h3 className="font-heading text-lg font-bold text-foreground">{zone.name}</h3>
                  <div className="mt-2 text-sm font-medium">
                    {zone.status === "Active" ? (
                      <span className="text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">🟢 {zone.status}</span>
                    ) : (
                      <span className="text-amber-600 bg-amber-50 px-2 py-1 rounded-md">⏳ {zone.status}</span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
