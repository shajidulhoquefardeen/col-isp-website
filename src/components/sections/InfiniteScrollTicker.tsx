import { Award, Building2, Globe, MapPin, Wifi } from "lucide-react";
import type { ReactNode } from "react";

interface TickerItem {
  icon: ReactNode;
  text: string;
}

const TICKER_ITEMS: TickerItem[] = [
  {
    icon: <Award className="h-6 w-6" strokeWidth={1.5} />,
    text: "First E1 Digital ISP for dial up in Bangladesh.",
  },
  {
    icon: <Building2 className="h-6 w-6" strokeWidth={1.5} />,
    text: "First ISP in Chittagong to establish a Metro Optical Fiber backbone.",
  },
  {
    icon: <Globe className="h-6 w-6" strokeWidth={1.5} />,
    text: "Largest Optical Fiber Network across the Metropolitan area with ring & mesh topology for uninterrupted connectivity.",
  },
  {
    icon: <MapPin className="h-6 w-6" strokeWidth={1.5} />,
    text: "25 POP Stations in Chittagong Metropolitan Area for easy and cost-effective connectivity.",
  },
  {
    icon: <Wifi className="h-6 w-6" strokeWidth={1.5} />,
    text: "Wireless Broadband Access Points across the city in every Point of Presence.",
  },
];

function TickerContent() {
  return (
    <>
      {TICKER_ITEMS.map((item, i) => (
        <div key={i} className="flex shrink-0 items-center gap-4 px-8">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30">
            {item.icon}
          </div>
          <span className="whitespace-nowrap text-sm font-medium leading-tight">
            {item.text}
          </span>
        </div>
      ))}
    </>
  );
}

export function InfiniteScrollTicker() {
  return (
    <section
      className="group relative w-full overflow-hidden bg-[#051d40] py-4 text-white"
      aria-label="Company achievements"
    >
      {/* Edge fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#051d40] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#051d40] to-transparent" />

      {/* Scrolling track */}
      <div className="flex [animation:ticker-scroll_45s_linear_infinite] group-hover:[animation-play-state:paused]">
        <div className="flex shrink-0">
          <TickerContent />
        </div>
        <div className="flex shrink-0" aria-hidden="true">
          <TickerContent />
        </div>
      </div>
    </section>
  );
}
