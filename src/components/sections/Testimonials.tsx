"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "motion/react";
import { GlassCard } from "@/components/ui/glass-card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Maria A.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    text: "Absolutely love my lashes! The attention to detail is incredible. I've been coming here for over a year and wouldn't go anywhere else.",
    service: "Volume Extensions",
  },
  {
    id: 2,
    name: "Elena D.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    text: "The best lash artist in Satu Mare! My lashes look so natural yet glamorous. Everyone asks where I get them done.",
    service: "Classic Extensions",
  },
  {
    id: 3,
    name: "Ana M.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    text: "Professional, skilled, and such a relaxing experience. The studio is beautiful and the results are always perfect.",
    service: "Mega Volume",
  },
  {
    id: 4,
    name: "Ioana P.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    text: "I was nervous about getting lash extensions for the first time, but the experience was so comfortable. Highly recommend!",
    service: "Classic Extensions",
  },
];

export function Testimonials() {
  const t = useTranslations("testimonials");

  return (
    <section id="testimonials" className="py-28 relative overflow-hidden bg-soft-pink/30">
      {/* Background Decorations */}
      <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-champagne-gold/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-blush-pink/15 blur-3xl" />
      <div className="absolute top-1/2 right-0 w-64 h-64 rounded-full bg-rose-gold/10 blur-3xl translate-x-1/2" />

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

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="h-full hover-lift relative">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-champagne-gold/10 flex items-center justify-center">
                  <Quote className="w-5 h-5 text-champagne-gold" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-champagne-gold text-champagne-gold"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-charcoal/80 leading-relaxed mb-6 text-lg italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-warm-beige/30">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-champagne-gold/30">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-medium text-charcoal">{testimonial.name}</div>
                    <div className="text-xs text-taupe uppercase tracking-wider">
                      {testimonial.service}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 glass-card rounded-full px-6 py-3">
            <div className="flex -space-x-2">
              {testimonials.slice(0, 3).map((t) => (
                <div
                  key={t.id}
                  className="relative w-8 h-8 rounded-full overflow-hidden ring-2 ring-cream"
                >
                  <Image src={t.image} alt="" fill className="object-cover" />
                </div>
              ))}
            </div>
            <div className="text-sm">
              <span className="text-charcoal font-medium">500+</span>
              <span className="text-taupe"> happy clients trust us</span>
            </div>
            <div className="flex gap-0.5 ml-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-3 h-3 fill-champagne-gold text-champagne-gold" />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
