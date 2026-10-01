"use client";

import { FormEvent, useState } from "react";
import { whatsappLink } from "@/lib/utils";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("Site inspection");
  const [message, setMessage] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const body = [
      `Hello Hamrex, my name is ${name || "a prospective buyer"}.`,
      email ? `Email: ${email}.` : "",
      `I am writing about: ${interest}.`,
      message,
    ]
      .filter(Boolean)
      .join(" ");
    window.open(whatsappLink(body), "_blank", "noopener,noreferrer");
  }

  const field =
    "w-full border-0 border-b border-line bg-transparent py-3 text-navy outline-none placeholder:text-muted/70 focus:border-navy";

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <label className="block">
        <span className="text-[0.7rem] uppercase tracking-[0.16em] text-muted">
          Name
        </span>
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={field}
          placeholder="Your name"
        />
      </label>
      <label className="block">
        <span className="text-[0.7rem] uppercase tracking-[0.16em] text-muted">
          Email
        </span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={field}
          placeholder="you@email.com"
        />
      </label>
      <label className="block">
        <span className="text-[0.7rem] uppercase tracking-[0.16em] text-muted">
          Interest
        </span>
        <select
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
          className={field}
        >
          <option>Site inspection</option>
          <option>Land banking</option>
          <option>Buy & Build</option>
          <option>Finished home</option>
          <option>NextCity Estate</option>
          <option>Join the team</option>
        </select>
      </label>
      <label className="block">
        <span className="text-[0.7rem] uppercase tracking-[0.16em] text-muted">
          Message
        </span>
        <textarea
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={field}
          placeholder="Which estate, and when can you inspect?"
        />
      </label>
      <button
        type="submit"
        className="rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white"
      >
        Continue on WhatsApp
      </button>
    </form>
  );
}
