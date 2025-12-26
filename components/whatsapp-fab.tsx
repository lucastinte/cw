"use client";

import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const whatsappLink =
  "https://wa.me/5491155555555?text=Hola%20Cristian%2C%20quiero%20arrancar%20con%20el%20plan%20CW%20Life";

export function WhatsAppFab() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="fixed bottom-5 right-4 z-50"
    >
      <Link
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="group flex items-center gap-3 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition hover:translate-y-[-2px] hover:shadow-xl"
        aria-label="Chatea por WhatsApp con Cristian"
      >
        <span className="hidden sm:inline">Hablar ahora</span>
        <MessageCircle className="h-5 w-5" aria-hidden />
      </Link>
    </motion.div>
  );
}
