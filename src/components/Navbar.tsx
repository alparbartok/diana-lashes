"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Globe, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";
import { locales, localeNames, type Locale } from "@/i18n/config";

export function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: t("home") },
    { href: "#services", label: t("services") },
    { href: "#gallery", label: t("gallery") },
    { href: "#about", label: t("about") },
    { href: "#testimonials", label: t("testimonials") },
    { href: "#contact", label: t("contact") },
  ];

  const switchLocale = (newLocale: Locale) => {
    router.replace(pathname, { locale: newLocale });
    setShowLangMenu(false);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "glass-strong py-3 shadow-sm" : "py-5"
      )}
    >
      <nav className="container mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-champagne-gold to-rose-gold flex items-center justify-center group-hover:scale-105 transition-transform">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="logo-text text-xl shimmer">
            Artines
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-foreground/70 hover:text-foreground transition-colors font-medium text-sm tracking-wide group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-champagne-gold to-rose-gold group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Theme Toggle */}
          <ThemeToggle size="sm" />

          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setShowLangMenu(!showLangMenu)}
              className="flex items-center gap-2 px-3 py-2 rounded-full glass hover:glass-strong transition-all text-sm"
            >
              <Globe className="w-4 h-4 text-champagne-gold" />
              <span className="font-medium text-foreground">{localeNames[locale]}</span>
            </button>
            <AnimatePresence>
              {showLangMenu && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute top-full right-0 mt-2 glass-strong rounded-xl overflow-hidden min-w-[130px] shadow-lg"
                >
                  {locales.map((loc) => (
                    <button
                      key={loc}
                      onClick={() => switchLocale(loc)}
                      className={cn(
                        "w-full px-4 py-2.5 text-left text-sm transition-colors text-foreground hover:bg-blush-pink/20 dark:hover:bg-accent/20",
                        locale === loc && "bg-blush-pink/30 dark:bg-accent/30 font-medium"
                      )}
                    >
                      {localeNames[loc]}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* CTA Button */}
          <Button
            asChild
            className="btn-primary text-sm py-3 px-6"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {t("book")}
            </motion.a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2.5 rounded-xl glass hover:glass-strong transition-all"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-strong mt-2 mx-4 rounded-2xl overflow-hidden shadow-lg"
          >
            <div className="p-5 flex flex-col gap-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="px-4 py-3 rounded-xl hover:bg-blush-pink/20 dark:hover:bg-accent/20 transition-colors text-foreground font-medium"
                >
                  {item.label}
                </motion.a>
              ))}
              <hr className="border-warm-beige/30 dark:border-accent/20 my-3" />
              <div className="flex items-center justify-between px-4 py-2">
                <div className="flex items-center gap-3">
                  <Globe className="w-4 h-4 text-champagne-gold" />
                  <span className="text-sm text-muted-foreground">Language:</span>
                  <div className="flex gap-2">
                    {locales.map((loc) => (
                      <button
                        key={loc}
                        onClick={() => switchLocale(loc)}
                        className={cn(
                          "px-4 py-1.5 rounded-full text-sm transition-colors",
                          locale === loc
                            ? "bg-gradient-to-r from-champagne-gold to-rose-gold text-white"
                            : "glass hover:bg-blush-pink/20 dark:hover:bg-accent/20 text-foreground"
                        )}
                      >
                        {loc.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>
                <ThemeToggle size="sm" />
              </div>
              <Button
                asChild
                className="mt-3 btn-primary w-full"
              >
                <a href="#contact" onClick={() => setIsOpen(false)}>
                  {t("book")}
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
