import Link from "next/link";
import { Mail, MessageCircle, ArrowUpRight } from "lucide-react";

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/#contact" },
];

const legalItems = ["Privacy Policy", "Terms & Conditions", "Cookie Policy"];

export default function Footer() {
  return (
    <footer className="bg-[#0B3328] text-white">
      <div className="mx-auto max-w-[1280px] px-5 pt-16 pb-8 lg:px-10 lg:pt-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_1fr] lg:gap-16">
          {/* Brand */}
          <div>
            <h2 className="text-[28px] font-bold tracking-tight">
              NeuroLink <span className="text-[#8ADBC0]">AI</span>
            </h2>

            <p className="mt-5 max-w-[320px] text-sm leading-[1.9] text-[#C5D9D1]">
              Technology and innovation for better health and quality of life.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white">
              Quick Links
            </h3>

            <nav
              aria-label="Footer navigation"
              className="mt-6 flex flex-col items-start gap-4"
            >
              {quickLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm text-[#C5D9D1] transition-colors duration-200 hover:text-[#8ADBC0] focus-visible:text-[#8ADBC0]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white">
              Contact
            </h3>

            <div className="mt-6 flex flex-col gap-5">
              <div className="flex items-start gap-3">
                <MessageCircle
                  size={19}
                  strokeWidth={1.8}
                  className="mt-0.5 shrink-0 text-[#8ADBC0]"
                />

                <div>
                  <p className="text-sm font-medium text-white">
                    LINE Official Account
                  </p>
                  <p className="mt-1 text-sm text-[#C5D9D1]">@neurolink</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail
                  size={19}
                  strokeWidth={1.8}
                  className="mt-0.5 shrink-0 text-[#8ADBC0]"
                />

                <div>
                  <p className="text-sm font-medium text-white">Email</p>
                  <p className="mt-1 text-sm text-[#C5D9D1]">
                    ติดต่อผ่านช่องทางอีเมล
                  </p>
                </div>
              </div>

              <Link
                href="/#contact"
                className="group mt-1 inline-flex w-fit items-center gap-2 text-sm font-medium text-[#8ADBC0] transition-colors hover:text-white"
              >
                Contact Us
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-white/15 pt-7 lg:mt-20">
          <div className="flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
            <p className="text-xs leading-6 text-[#AFC8BD]">
              © 2026 NeuroLink. All Rights Reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {legalItems.map((item) => (
                <span key={item} className="text-xs text-[#AFC8BD]">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
