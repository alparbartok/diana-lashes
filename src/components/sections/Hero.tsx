"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Sparkles } from "lucide-react";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 z-0 bg-gradient-hero">
        <div className="absolute inset-0 pattern-crosses opacity-30" />
      </div>

      {/* Decorative Blurred Orbs */}
      <motion.div
        animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-[10%] w-64 h-64 rounded-full bg-blush-pink/40 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-[10%] w-80 h-80 rounded-full bg-rose-gold/30 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-champagne-gold/25 blur-2xl"
      />

      {/* Hero Image - Right Side (Desktop) */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative h-full"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2069&auto=format&fit=crop')`,
              maskImage: 'linear-gradient(to left, black 50%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to left, black 50%, transparent 100%)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-cream/20 to-cream dark:via-background/20 dark:to-background" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl lg:max-w-2xl pt-32 pb-20 lg:pt-0 lg:pb-0">
          {/* Overline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-8"
          >
            <div className="glass-card rounded-full px-4 py-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-champagne-gold" />
              <span className="overline text-charcoal dark:text-cream">{t("overline")}</span>
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-champagne-gold font-medium tracking-[0.25em] uppercase text-sm mb-4"
          >
            {t("tagline")}
          </motion.p>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-6xl md:text-7xl lg:text-8xl font-light tracking-wide mb-2"
          >
            <span className="shimmer">{t("title")}</span>
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-charcoal/80 dark:text-cream/80 tracking-wide mb-8"
          >
            {t("titleSuffix")}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-taupe text-lg md:text-xl max-w-xl leading-relaxed mb-10"
          >
            {t("subtitle")}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <Button
              asChild
              className="btn-primary group"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2"
              >
                {t("cta")}
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  &rarr;
                </motion.span>
              </motion.a>
            </Button>
            <Button
              asChild
              className="btn-secondary"
            >
              <motion.a
                href="#gallery"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t("secondary")}
              </motion.a>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 flex items-center gap-8 text-sm text-taupe"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-champagne-gold" />
              <span>Premium Products</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-rose-gold" />
              <span>Expert Artist</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blush-pink" />
              <span>Natural Results</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.a
          href="#services"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-taupe hover:text-charcoal dark:hover:text-cream transition-colors"
        >
          <span className="text-xs tracking-widest uppercase">Explore</span>
          <ChevronDown className="w-5 h-5" />
        </motion.a>
      </motion.div>
    </section>
  );
}
