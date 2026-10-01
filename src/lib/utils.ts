export function cn(
  ...classes: Array<string | false | null | undefined>
) {
  return classes.filter(Boolean).join(" ");
}

export function whatsappLink(message?: string) {
  const base = "https://wa.me/2349049393966";
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
