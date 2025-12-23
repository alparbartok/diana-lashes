"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "motion/react";
import { GlassCard } from "@/components/ui/glass-card";
import { Award, Heart, Sparkles, Users, Clock, Star } from "lucide-react";

export function About() {
  const t = useTranslations("about");

  const stats = [
    { icon: Users, value: "500+", label: t("stats.clients") },
    { icon: Clock, value: "5+", label: t("stats.experience") },
    { icon: Star, value: "10K+", label: t("stats.lashes") },
  ];

  return (
    <section id="about" className="py-28 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-blush-pink/15 blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 rounded-full bg-rose-gold/10 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-champagne-gold/10 blur-3xl -translate-x-1/2" />

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

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image with decorative elements */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop"
                alt="Artines Lash Artist"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />
            </div>

            {/* Decorative Frame */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-champagne-gold/30 rounded-3xl -z-10" />

            {/* Floating Stats Card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -right-4 md:right-8"
            >
              <GlassCard variant="strong" hover={false} className="p-5">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-champagne-gold to-rose-gold flex items-center justify-center">
                    <Heart className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="font-serif text-2xl font-light text-charcoal">500+</div>
                    <div className="text-sm text-taupe">{t("stats.clients")}</div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            {/* Small Decorative Badge */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-8 -left-4 md:-left-8"
            >
              <div className="glass-card rounded-full px-4 py-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-champagne-gold" />
                <span className="text-xs text-charcoal font-medium">Premium Quality</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="font-serif text-3xl md:text-4xl font-light text-charcoal">
              {t("story.title")}
            </h3>
            <p className="text-taupe leading-relaxed text-lg">
              {t("story.p1")}
            </p>
            <p className="text-taupe leading-relaxed">
              {t("story.p2")}
            </p>

            {/* Mini Stats Row */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-warm-beige/30">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="font-serif text-3xl font-light text-gradient-gold mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-taupe uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Premium Products */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <GlassCard className="h-full hover-lift">
              <div className="flex gap-5">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-champagne-gold to-rose-gold flex items-center justify-center flex-shrink-0">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="font-serif text-2xl font-light text-charcoal mb-3">
                    {t("quality.title")}
                  </h4>
                  <p className="text-taupe text-sm leading-relaxed">
                    {t("quality.description")}
                  </p>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Technique */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <GlassCard className="h-full hover-lift">
              <div className="flex gap-5">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-gold to-blush-pink flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="font-serif text-2xl font-light text-charcoal mb-3">
                    {t("technique.title")}
                  </h4>
                  <p className="text-taupe text-sm leading-relaxed">
                    {t("technique.description")}
                  </p>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
