"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { Instagram, Facebook, Phone, MapPin, Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const socialLinks = [
  {
    icon: Instagram,
    href: "https://instagram.com/artines.lashes",
    label: "Instagram",
  },
  {
    icon: Facebook,
    href: "https://facebook.com/artineslashes",
    label: "Facebook",
  },
  {
    icon: Phone,
    href: "tel:+40XXXXXXXXX",
    label: "Phone",
  },
];

const quickLinks = [
  { href: "#home", key: "home" },
  { href: "#services", key: "services" },
  { href: "#gallery", key: "gallery" },
  { href: "#about", key: "about" },
  { href: "#testimonials", key: "testimonials" },
  { href: "#contact", key: "contact" },
];

export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const tCta = useTranslations("cta");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-blush-pink/30 via-soft-pink/20 to-transparent dark:from-accent/10 dark:via-transparent dark:to-transparent" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center py-20 border-b border-warm-beige/30 dark:border-accent/20"
        >
          <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-champagne-gold" />
            <span className="text-xs uppercase tracking-wider text-foreground">Transform Today</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-light tracking-wide mb-6">
            <span className="text-gradient">{tCta("ready")}</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            {tCta("description")}
          </p>
          <Button asChild className="btn-primary">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2"
            >
              {tCta("button")}
              <span>&rarr;</span>
            </motion.a>
          </Button>
        </motion.div>

        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="logo-text text-2xl shimmer">
              Artines
            </h3>
            <p className="text-muted-foreground text-sm italic font-serif">
              &ldquo;{t("tagline")}&rdquo;
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-champagne-gold" />
              <span>{t("location")}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-light text-foreground mb-6">{t("quickLinks")}</h4>
            <nav className="grid grid-cols-2 gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground hover:translate-x-1 transition-all text-sm"
                >
                  {tNav(link.key)}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-serif text-lg font-light text-foreground mb-6">{t("followUs")}</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:border-champagne-gold/40 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-foreground" />
                </motion.a>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Follow us for lash inspiration and behind-the-scenes content.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-warm-beige/30 dark:border-accent/20 text-sm text-muted-foreground">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <p className="flex items-center gap-2 flex-wrap">
              <span>&copy; {currentYear} Artines Lash Studio.</span>
              <span>{t("rights")}</span>
              <span className="mx-2 hidden sm:inline">|</span>
              <span className="flex items-center gap-1">
                Made with <Heart className="w-4 h-4 text-rose-gold inline fill-rose-gold" /> in Satu Mare
              </span>
            </p>
            <ThemeToggle size="sm" />
          </div>
        </div>
      </div>
    </footer>
  );
}
