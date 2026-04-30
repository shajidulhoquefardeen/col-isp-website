import { Phone, Mail, ChevronRight } from "lucide-react";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className} 
    fill="currentColor"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className} 
    fill="currentColor"
  >
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const CONTACT_METHODS = [
  {
    icon: WhatsAppIcon,
    iconColor: "text-green-500",
    text: "Text 'Hi' to +8801647465507",
    href: "https://wa.me/8801647465507?text=Hi",
    external: true,
  },
  {
    icon: Phone,
    iconColor: "text-blue-500",
    text: "Call +8801647465507 for Support",
    href: "tel:+8801647465507",
    external: false,
  },
  {
    icon: FacebookIcon,
    iconColor: "text-blue-600",
    text: "Message us on Facebook",
    href: "https://www.facebook.com/col.com.bd",
    external: true,
  },
  {
    icon: Mail,
    iconColor: "text-red-500",
    text: "Email info@col.net.bd",
    href: "mailto:info@col.net.bd",
    external: false,
  },
];

export function QuickContactGrid() {
  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 sm:px-6">
      <h2 className="text-3xl font-bold text-[#051d40] text-center mb-8 font-heading">
        We're Here to Help
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {CONTACT_METHODS.map((method, index) => {
          const Icon = method.icon;
          return (
            <a
              key={index}
              href={method.href}
              target={method.external ? "_blank" : undefined}
              rel={method.external ? "noopener noreferrer" : undefined}
              className="group flex items-center bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex-shrink-0 mr-4">
                <Icon className={`w-8 h-8 ${method.iconColor}`} />
              </div>
              <div className="flex-grow font-bold text-[#051d40] text-lg">
                {method.text}
              </div>
              <div className="flex-shrink-0 ml-4">
                <ChevronRight className="w-6 h-6 text-slate-400 group-hover:text-[#D71920] transition-colors" />
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
