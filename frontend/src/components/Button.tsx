interface ButtonProps {
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  onClick,
  className,
  type,
  children,
}: React.PropsWithChildren<ButtonProps>) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex bg-primary px-3 py-1.5 text-white round w-fit rounded-4xl cursor-pointer text-center justify-center ${className}`}
    >
      {children}
    </button>
  );
}
