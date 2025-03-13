
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

interface DonateButtonProps {
  className?: string;
  variant?: "primary" | "outline" | "secondary";
  size?: "sm" | "md" | "lg";
}

const DonateButton = ({
  className = "",
  variant = "primary",
  size = "md",
}: DonateButtonProps) => {
  const baseClasses = "inline-flex items-center gap-2 font-medium rounded-full transition-all duration-300 hover:shadow-md hover:gap-3";
  
  const variantClasses = {
    primary: "bg-maos-red hover:bg-maos-red/90 text-white",
    outline: "bg-transparent border-2 border-maos-red text-maos-red hover:bg-maos-red/10",
    secondary: "bg-maos-yellow hover:bg-maos-yellow/90 text-black"
  };
  
  const sizeClasses = {
    sm: "text-sm py-2 px-4",
    md: "py-3 px-6",
    lg: "text-lg py-4 px-8"
  };

  return (
    <Link
      to="/contato"
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      <Heart className="w-5 h-5" />
      Doe Agora
    </Link>
  );
};

export default DonateButton;
