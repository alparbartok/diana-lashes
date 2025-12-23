"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Clock, Sparkles, Eye, Star, RefreshCw, Zap } from "lucide-react";

const serviceIcons = {
  classic: Eye,
  volume: Sparkles,
  mega: Star,
  lift: Zap,
  refill: RefreshCw,
};

const servicePrices = {
  classic: 150,
  volume: 200,
  mega: 280,
  lift: 100,
  refill: 80,
};

const serviceAccent = {
  classic: "from-blush-pink to-rose-gold",
  volume: "from-champagne-gold to-rose-gold",
  mega: "from-rose-gold to-champagne-gold",
  lift: "from-soft-pink to-blush-pink",
  refill: "from-warm-beige to-blush-pink",
};

export function Services() {
  const t = useTranslations("services");

  const services = ["classic", "volume", "mega", "lift", "refill"] as const;

  return (
    <section id="services" className="py-28 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 left-0 w-96 h-96 rounded-full bg-blush-pink/20 blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-20 right-0 w-80 h-80 rounded-full bg-champagne-gold/15 blur-3xl translate-x-1/3" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-rose-gold/10 blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="overline mb-4 block">{t("overline")}</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-wide mb-6">
            <span className="text-gradient">{t("title")}</span>
          </h2>
          <p className="text-taupe text-lg max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = serviceIcons[service];
            const price = servicePrices[service];
            const gradient = serviceAccent[service];

            return (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard className="h-full flex flex-col group hover-lift">
                  {/* Icon Badge */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="font-serif text-2xl font-light text-charcoal mb-3">
                    {t(`items.${service}.name`)}
                  </h3>
                  <p className="text-taupe text-sm leading-relaxed flex-grow mb-6">
                    {t(`items.${service}.description`)}
                  </p>

                  {/* Duration Badge */}
                  <div className="inline-flex items-center gap-2 text-sm text-taupe mb-6">
                    <Clock className="w-4 h-4 text-champagne-gold" />
                    <span>
                      {t("duration")}: {t(`items.${service}.duration`)}
                    </span>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-6 border-t border-warm-beige/30">
                    <div>
                      <span className="text-xs text-taupe uppercase tracking-wider">
                        {t("from")}
                      </span>
                      <div className="font-serif text-3xl font-light">
                        <span className="text-gradient-gold">{price}</span>
                        <span className="text-base text-taupe ml-1">{t("currency")}</span>
                      </div>
                    </div>
                    <Button
                      asChild
                      className="btn-ghost text-xs px-5 py-3"
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
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-taupe mb-6">
            Not sure which service is right for you?
          </p>
          <Button asChild className="btn-secondary">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Book a Free Consultation
            </motion.a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
