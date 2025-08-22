type Props = {
  children: React.ReactNode;
  center?: boolean;
  className?: string;
  underlineColor?: string;        // opcional: sobreescribir color
  underlineWidthClass?: string;   // opcional: cambiar ancho
};

export default function SectionTitle({
  children,
  center,
  className,
  underlineColor = "#F37021",      // naranja de marca
  underlineWidthClass = "w-16",
}: Props) {
  return (
    <div className={(center ? "text-center " : "") + (className || "")}>
      {/* Título en azul de marca */}
      <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight" style={{ color: "#225A73" }}>
        {children}
      </h3>

      {/* Subrayado decorativo (naranja) */}
      <div
        className={`${center ? "mx-auto " : ""}${underlineWidthClass} h-1 mt-3`}
        style={{ backgroundColor: underlineColor }}
      />
    </div>
  );
}
