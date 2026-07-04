import Link from "next/link";

type ButtonProps = {
    href: string;
    children: React.ReactNode;
    className?: string;
};

export default function Button({
    href,
    children,
    className = "",
}: ButtonProps) {
    return (
        <Link
            href={href}
            className={`
    bg-brand-primary
    text-white
    font-semibold
    text-sm
    py-3.5
    px-7
    rounded-xl
    transition-all
    duration-300
    hover:bg-brand-secondary
    hover:scale-[1.02]
    hover:shadow-lg
    active:scale-[0.98]
    ${className}
  `}
        >
            {children}
        </Link>
    );
}