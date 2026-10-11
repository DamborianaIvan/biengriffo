import { ArrowUpRight } from "lucide-react";

export default function Button({
  children,
  href,
  variant = "primary",
  arrow = true,
  className = "",
  ...props
}) {
  const Tag = href ? "a" : "button";
  return (
    <Tag
      {...(href ? { href } : { type: "button" })}
      className={`button button--${variant} ${className}`}
      {...props}
    >
      {children}
      {arrow && <ArrowUpRight size={18} aria-hidden="true" />}
    </Tag>
  );
}
