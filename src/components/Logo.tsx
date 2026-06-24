import "./Logo.css";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  const src =
    variant === "light"
      ? "/stellar-philippines-logo-light.png"
      : "/stellar-philippines-logo.png";

  return (
    <img
      src={src}
      alt="Stellar Philippines"
      className={`site-logo ${className}`.trim()}
    />
  );
}
