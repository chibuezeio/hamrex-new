const items = [
  { name: "Nexport Estate", place: "Elele Express Road", price: "₦1.8M" },
  { name: "Citycore Phase 4", place: "Isiokpo", price: "₦1.3M" },
  { name: "Downtown Estate", place: "Deeper Life Campground", price: "₦2M" },
  { name: "Airport View", place: "Omagwa", price: "₦2M" },
  { name: "Citycore Phase 1", place: "Behind Wigwe University", price: "₦2.8M" },
  { name: "NextCity Estate", place: "Tumbee, Oyigbo", price: "₦3M" },
  { name: "Worthland Premium", place: "Rumuodogho", price: "₦4M" },
  { name: "Belle Garden", place: "Omunwei, Igwuruta", price: "₦8M" },
];

export function Marquee() {
  const row = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-line bg-white py-4">
      <div className="marquee-track px-6">
        {row.map((item, i) => (
          <span
            key={`${item.name}-${i}`}
            className="flex shrink-0 items-baseline gap-2 pr-10 text-sm whitespace-nowrap"
          >
            <span className="font-medium text-navy">{item.name}</span>
            <span className="text-muted/70">{item.place}</span>
            <span className="font-semibold text-blue">{item.price}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
