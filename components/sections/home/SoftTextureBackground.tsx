export function SoftTextureBackground() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 -z-10 bg-[#f6faf8]"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.84) 0%, rgba(244, 250, 248, 0.94) 100%), repeating-linear-gradient(0deg, rgba(8, 39, 68, 0.032) 0 1px, transparent 1px 20px), repeating-linear-gradient(90deg, rgba(15, 125, 123, 0.028) 0 1px, transparent 1px 24px), repeating-linear-gradient(135deg, rgba(240, 138, 36, 0.024) 0 1px, transparent 1px 38px)",
        backgroundBlendMode: "normal, multiply, multiply, normal"
      }}
    />
  );
}
