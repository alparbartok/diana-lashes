"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Phone,
  MessageCircle,
  Instagram,
  Facebook,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Sparkles,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    key: "phone",
    value: "+40 XXX XXX XXX",
    href: "tel:+40XXXXXXXXX",
    color: "from-champagne-gold to-rose-gold",
  },
  {
    icon: MessageCircle,
    key: "whatsapp",
    value: "+40 XXX XXX XXX",
    href: "https://wa.me/40XXXXXXXXX",
    color: "from-[#25D366] to-[#128C7E]",
  },
  {
    icon: Instagram,
    key: "instagram",
    value: "@artines.lashes",
    href: "https://instagram.com/artines.lashes",
    color: "from-[#833AB4] via-[#FD1D1D] to-[#F77737]",
  },
  {
    icon: Facebook,
    key: "facebook",
    value: "Artines Lash Studio",
    href: "https://facebook.com/artineslashes",
    color: "from-[#1877F2] to-[#0B5ED7]",
  },
  {
    icon: MapPin,
    key: "address",
    value: "Satu Mare, Romania",
    href: "https://maps.google.com/?q=Satu+Mare+Romania",
    color: "from-rose-gold to-blush-pink",
  },
];

export function Contact() {
  const t = useTranslations("contact");
  const tServices = useTranslations("services");
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const services = [
    { value: "classic", label: tServices("items.classic.name") },
    { value: "volume", label: tServices("items.volume.name") },
    { value: "mega", label: tServices("items.mega.name") },
    { value: "lift", label: tServices("items.lift.name") },
    { value: "refill", label: tServices("items.refill.name") },
  ];

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-blush-pink/15 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-rose-gold/20 blur-3xl" />
      <div className="absolute top-1/2 right-0 w-64 h-64 rounded-full bg-champagne-gold/10 blur-3xl translate-x-1/2" />

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

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard variant="strong" hover={false} className="p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-champagne-gold to-rose-gold flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-serif text-2xl font-light text-charcoal">
                  Send us a message
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      {t("form.name")}
                    </label>
                    <Input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="bg-white/50 border-warm-beige/40 focus:border-champagne-gold focus:ring-champagne-gold/20 rounded-xl"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      {t("form.phone")}
                    </label>
                    <Input
                      type="tel"
                      required
                      value={formState.phone}
                      onChange={(e) =>
                        setFormState({ ...formState, phone: e.target.value })
                      }
                      className="bg-white/50 border-warm-beige/40 focus:border-champagne-gold focus:ring-champagne-gold/20 rounded-xl"
                      placeholder="+40 XXX XXX XXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    {t("form.email")}
                  </label>
                  <Input
                    type="email"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="bg-white/50 border-warm-beige/40 focus:border-champagne-gold focus:ring-champagne-gold/20 rounded-xl"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    {t("form.service")}
                  </label>
                  <select
                    value={formState.service}
                    onChange={(e) =>
                      setFormState({ ...formState, service: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-white/50 border border-warm-beige/40 focus:border-champagne-gold focus:outline-none focus:ring-2 focus:ring-champagne-gold/20 text-charcoal"
                  >
                    <option value="">Select a service...</option>
                    {services.map((service) => (
                      <option key={service.value} value={service.value}>
                        {service.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    {t("form.message")}
                  </label>
                  <Textarea
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="bg-white/50 border-warm-beige/40 focus:border-champagne-gold focus:ring-champagne-gold/20 rounded-xl min-h-[120px]"
                    placeholder="Tell us about your desired look..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitted}
                  className="w-full btn-primary py-6"
                >
                  {isSubmitted ? (
                    <span className="flex items-center justify-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      {t("form.success")}
                    </span>
                  ) : (
                    <motion.span
                      className="flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Send className="w-5 h-5" />
                      {t("form.submit")}
                    </motion.span>
                  )}
                </Button>
              </form>
            </GlassCard>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {/* Contact Cards */}
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <GlassCard className="flex items-center gap-4 p-4 group-hover:border-champagne-gold/40 transition-colors">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform`}
                    >
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-taupe uppercase tracking-wider">
                        {t(`info.${item.key}`)}
                      </div>
                      <div className="font-medium text-charcoal">{item.value}</div>
                    </div>
                  </GlassCard>
                </a>
              </motion.div>
            ))}

            {/* Working Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <GlassCard className="p-5">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-champagne-gold to-rose-gold flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div className="font-serif text-xl font-light text-charcoal">
                    {t("info.hours")}
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center py-2 border-b border-warm-beige/20">
                    <span className="text-taupe">{t("hours.weekdays")}</span>
                    <span className="font-medium text-charcoal">{t("hours.time1")}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-warm-beige/20">
                    <span className="text-taupe">{t("hours.weekends")}</span>
                    <span className="font-medium text-charcoal">{t("hours.time2")}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-taupe">{t("hours.closed")}</span>
                    <span className="font-medium text-rose-gold">Closed</span>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
