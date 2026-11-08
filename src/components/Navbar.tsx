"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Insights", href: "/insights" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function scrollToHome(event: React.MouseEvent<HTMLAnchorElement>) {
    closeMenu();

    if (pathname === "/") {
      event.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }

  function scrollToContact(event: React.MouseEvent<HTMLAnchorElement>) {
    closeMenu();

    if (pathname === "/") {
      event.preventDefault();

      if (window.location.hash) {
        window.history.replaceState(window.history.state, "", "/");
      }

      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  useEffect(() => {
    if (pathname !== "/" || window.location.hash !== "#contact") {
      return;
    }

    const frame = requestAnimationFrame(() => {
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      window.history.replaceState(window.history.state, "", "/");
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  function isActive(href: string) {
    if (href === "/") {
      return pathname === "/";
    }

    if (href === "/solutions") {
      return (
        pathname === "/solutions" ||
        pathname.startsWith("/solutions/") ||
        pathname === "/heuron" ||
        pathname.startsWith("/heuron/") ||
        pathname === "/eterna" ||
        pathname.startsWith("/eterna/")
      );
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header
      className={`relative sticky top-0 z-50 w-full transition-[background-color,box-shadow,backdrop-filter] duration-500 ease-in-out
    ${
      pathname === "/" && !isScrolled
        ? "bg-white/15 backdrop-blur-sm"
        : "bg-white/95 shadow-sm backdrop-blur-xl"
    }
  `}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-10">
        <Link
          href="/"
          className="inline-flex shrink-0 items-center"
          onClick={scrollToHome}
          aria-label="NeuroLink AI - Home"
        >
          <Image
            src="/images/NeuroLinkLogo.png"
            alt="NeuroLink AI"
            width={180}
            height={54}
            priority
            className="h-auto w-[145px] object-contain sm:w-[170px] lg:w-[250px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`
                  relative py-2 text-base
                  transition-colors duration-300
                  hover:text-[#07583F]
                  focus-visible:rounded-sm
                  focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-[#07583F]
                  ${
                    active
                      ? "font-semibold text-[#07583F]"
                      : "font-medium text-[#506960]"
                  }
                `}
              >
                {link.label}

                {/* Active Underline */}
                <span
                  className={`
                    absolute bottom-0 left-0 h-[2px] w-full
                    rounded-full bg-[#07583F]
                    transition-transform duration-300
                    ${active ? "scale-x-100" : "scale-x-0"}
                  `}
                />
              </Link>
            );
          })}
        </div>

        {/* Desktop Contact Button */}
        {/* <Button
          href="/#contact"
          variant="primary"
          color="green"
          size="md"
          showArrow={false}
          className="!hidden min-h-12 px-6 text-base lg:!inline-flex"
        >
          Contact Us
        </Button> */}
        <Button
          href="/#contact"
          onClick={scrollToContact}
          variant="primary"
          color="green"
          size="md"
          showArrow={false}
          className="
    !hidden min-h-12 px-6 text-base
    focus-visible:outline-2
    focus-visible:outline-offset-4
    focus-visible:outline-[#07583F]
    lg:!inline-flex
  "
        >
          Contact Us
        </Button>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="
            flex h-12 w-12 items-center justify-center
            rounded-lg text-2xl text-[#07583F]
            focus-visible:outline-2
            focus-visible:outline-offset-2
            focus-visible:outline-[#07583F]
            lg:hidden
          "
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      {/* Mobile Menu */}

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        aria-hidden={!isMenuOpen}
        inert={!isMenuOpen}
        className={`
    absolute left-0 right-0 top-full z-50
    grid overflow-hidden
    border-t border-[#E0EAE3]
    transition-[grid-template-rows,opacity]
    duration-500
    ease-[cubic-bezier(0.22,1,0.36,1)]
    motion-reduce:transition-none
    lg:hidden
    ${
      isMenuOpen
        ? "grid-rows-[1fr] opacity-100"
        : "pointer-events-none grid-rows-[0fr] opacity-0"
    }
    ${isScrolled ? "bg-white/95 backdrop-blur-xl" : "bg-white"}
  `}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="flex flex-col gap-2 px-5 py-5">
            {navLinks.map((link) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  aria-current={active ? "page" : undefined}
                  className={`
              flex min-h-12 items-center
              rounded-xl px-4 py-3 text-base
              transition-colors duration-300
              ${
                active
                  ? "bg-[#E7F0E9] font-semibold text-[#07583F]"
                  : "font-medium text-[#506960] hover:bg-[#F4F8F5]"
              }
            `}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link
              href="/#contact"
              onClick={scrollToContact}
              className={`
          mt-2 flex min-h-12 items-center
          justify-center rounded-full px-6 py-3
          text-base font-semibold
          ${
            isActive("/#contact")
              ? "bg-[#DCECE3] text-[#07583F]"
              : "bg-[#07583F] text-white"
          }
        `}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
