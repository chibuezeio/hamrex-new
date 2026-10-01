"use client";

import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/utils";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink(
        "Hello Hamrex, I would like to book a free site inspection."
      )}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={22} />
    </a>
  );
}
